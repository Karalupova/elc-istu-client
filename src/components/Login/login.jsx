import React, {useState} from "react";
import s from "./login.module.css";
import axios from "axios";
import {useNavigate} from "react-router-dom";
import Header from "../Headeradmin/HeaderAdminLog";


const Login = () => {
    const [login, setLogin] = useState("")
    const [password, setPassword] = useState("")
    const [error, setError] = useState()
    const navigate = useNavigate();
    const handleChangeLogin = (e) => {
        const value = e.target.value;
        setLogin(value)
    }
    const handleChangePassword = (e) => {
        const value = e.target.value;
        setPassword(value)
    }
    const onSubmit = async (e) => {
        e.preventDefault();
        const response = await axios.post("http://localhost:4001/login", {
            email: login,
            password
        }).catch(() => setError("Неверные данные для входа"))
        if (response.statusText === "OK") {
            const {data} = response
            localStorage.setItem("token", data.token)
            navigate("/admin-news")
        }
    }
    console.log(login, password)
    return <div>
        <Header/>
        <div className={s.login}>
            Введите логин и пароль для авторизации:
            <form onSubmit={onSubmit}>
                <input type="text" onChange={handleChangeLogin} value={login} placeholder="Логин"/>
                <input type="password" onChange={handleChangePassword} value={password} placeholder="Пароль"/>
                {error}
                <br/> <br/>
                <button type="submit">Авторизоваться</button>

            </form>
        </div>
    </div>
}

export default Login;