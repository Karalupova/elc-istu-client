import Headeradmin from "../Headeradmin/Headeradmin";
import s from "../EditNews/Editnews.module.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import NewsForm from "../NewsForm/NewsForm";
import {useLocation, useNavigate, useParams} from "react-router-dom";

const EditNews = () => {
    const {newsId} = useParams()
    const [error, setError] = useState()
    const [news, setNews] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        axios.get("http://localhost:4001/news").then(({data}) => {
            setNews(data)
        })
    }, [])
    const editNews = news.find((item) => item._id === newsId)
    const onSubmit = async (data) => {
        const response = await axios.put("http://localhost:4001/news", {
            ...data,
            _id: editNews._id
        }, {headers: {"x-access-token": localStorage.getItem("token")}}).catch(() => setError("Произошла ошибка"))
        if (response.statusText === "OK") {
            const {data} = response
            console.log(data)
            navigate("/admin-news")
        }
    }
    return (
        <div>
            <Headeradmin/>
            {editNews && <NewsForm onSubmit={onSubmit} error={error} editNews={editNews}/>}
        </div>
    );
}

export default EditNews;
