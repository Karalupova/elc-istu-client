import Headeradmin from "../Headeradmin/Headeradmin";
import s from "../AdminNews/Adminnews.module.css";
import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link, NavLink} from 'react-router-dom';

const Adminnews = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4001/news").then(({data}) => {
            setNews(data)
        })
    }, [])
    console.log(news)


    return (
        <div>
            <Headeradmin/>
            {/*  <div className={s.navigation}>
                <div className={s.otstup}>
                    <div className={s.item}>
                        <form>
                            <input type="text" placeholder="Введите запрос"/>
                            <button type="submit">Поиск</button>
                        </form>
                    </div>
                    <div></div>

                </div>
            </div> */}
            <div className={s.content}>
                <table>
                    <thead>
                    <tr>
                        <th>Заголовок</th>
                        <th>Автор</th>
                        <th>Текст</th>
                        <th>Дата</th>
                        <th>Редактирование</th>
                    </tr>
                    </thead>
                    <tbody>
                    {news.map(item => {
                        return (

                            <tr>
                                <td> {item.title}</td>
                                <td>{item?.createdBy?.email}</td>
                                <td>{item.text}</td>
                                <td>{item.date}</td>
                                <td><Link to={`/news/edit/${item._id}`}> Редактировать </Link></td>
                            </tr>
                        )
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default Adminnews;
