import Headeradmin from "../Headeradmin/Headeradmin";
import s from "../AddNews/Add.module.css";
import React, {useState} from "react";
import axios from "axios";
import NewsForm from "../NewsForm/NewsForm";
import {useNavigate} from "react-router-dom";


const Addnews = () => {
    const navigate = useNavigate();
    const [error, setError] = useState()

    const onSubmit = async (data) => {

        const response = await axios.post("http://localhost:4001/news", data, {headers: {"x-access-token": localStorage.getItem("token")}}).catch(() => setError("Произошла ошибка"))
        if (response.statusText === "OK") {
            const {data} = response
            console.log(data)
            navigate("/admin-news")
        }
    }

    return (
        <div>
            <Headeradmin/>
            <NewsForm onSubmit={onSubmit} error={error}/>
        </div>
    );
}

export default Addnews;
