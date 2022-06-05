import React, {useEffect, useState} from "react";
import s from "./News.module.css";
import Headers from "../Header/Headers";
import Newsitem from "./Item/Newsitem";
import axios from "axios";


const News = () => {
    const [news, setNews] = useState([])
    useEffect(() => {
        axios.get("http://localhost:4001/newss").then(({data}) => {
            setNews(data)
        })
    }, [])
    console.log(news)
    return <div>
        <Headers/>
        <div className={s.banner}>
            <div className={s.itemtitle}>
                <div className={s.title}>Новости</div>
                <div className={s.description1}> Узнавайте о событиях и изменениях в системе элекронного обучения
                </div>
            </div>
            <div className={s.navigation}>
                {/*  <div> Теги
                    mobile
                    mooc
                    Moodle
                    Мероприятия
                </div> */}
                <div></div>
            </div>
        </div>
        <div className={s.body}>
            <div className={s.content}>
                <div className={s.item}>
                    <table>
                        <thead>
                        <tr>
                            <th></th>
                        </tr>
                        </thead>
                        <tbody>
                        {news.map(item => {
                            return (
                                <tr>  {item.title} <br/>,
                                    {item.date} <br/>,
                                    {item.text} <br/>,
                                    {item.tag} <br/><br/></tr>
                            )
                        })}
                        </tbody>
                    </table>
                    <div> 14 марта 2022 г.</div>
                    <div> Уважаемые преподаватели и студенты!
                        На базе платформы открытых курсов ИРНИТУ open.istu.edu состоится Вторая научно-практическая
                        студенческая
                        конференция "Язык, наука и техника в диалоге культур".
                        Организатором конференции выступает Институт лингвистики ИРНИТУ. Цель конференции: расширение
                        опыта при
                        обмене
                        научными результатами. В рамках конференции предусмотрено четыре направления:
                        1. Актуальные вопросы современной лингвистики;
                        2. Переводческие аспекты межъязыковой коммуникации ...
                    </div>
                    <div><a href="/"> Читать далее </a></div>
                    Теги: нет тегов
                </div>
                <Newsitem/>
            </div>
            {/*  <div className={s.nav}>
                <div>
                    <form>
                        <input type="text" placeholder="Введите запрос"/> <br/>
                        <button type="submit">Поиск</button>
                    </form>
                </div>
                <h2>Архив </h2>
                <ul>
                    <li>2022</li>
                    <li>2021</li>
                    <li>2020</li>
                    <li>2019</li>
                    <li>2018</li>
                    <li>2017</li>
                    <li>2016</li>
                    <li>2015</li>
                </ul>
            </div> */}
        </div>
    </div>
}

export default News;