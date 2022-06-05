import s from "../NewsForm/NewsForm.module.css";
import React, {useState} from "react";
import {NavLink} from "react-router-dom";


const NewsForm = ({onSubmit, error, editNews}) => {
    const [title, setTitle] = useState(editNews?.title || "")
    const [text, setText] = useState("")
    const [smallText, setSmallText] = useState("")
    const [date, setDate] = useState("")
    const [img, setImg] = useState("")
    const [tag, setTag] = useState("")

    const handleChangeTitle = (e) => {
        const value = e.target.value;
        setTitle(value)
    }
    const handleChangeText = (e) => {
        const value = e.target.value;
        setText(value)
    }
    const handleChangeSmallText = (e) => {
        const value = e.target.value;
        setSmallText(value)
    }
    const handleChangeDate = (e) => {
        const value = e.target.value;
        setDate(value)
    }
    const handleChangeImg = (e) => {
        const value = e.target.value;
        setImg(value)
    }
    const handleChangeTag = (e) => {
        const value = e.target.value;
        setTag(value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({title, text, smallText, date, img, tag})
    }
    return (
        <div>

            <div className={s.wrapper}>
                <div className={s.panel}>
                    <button type="submit">Абзац</button>
                    <button type="submit">Курсив</button>
                    <button type="submit">Жирный</button>
                    <button type="submit">Ссылка</button>
                    <button type="submit">Добавить изображение</button>
                    <div className={s.button}><NavLink to="/admin-news"> Отмена </NavLink>
                    </div>
                </div>

                <div className={s.forma}>
                    <form onSubmit={handleSubmit}>
                        <label>Заголовок</label> <br/>
                        <input type="text" value={title} onChange={handleChangeTitle} placeholder="Введите заголовок"/>
                        <br/>
                        <label>Текст новости</label> <br/>
                        <textarea type="text" value={text} onChange={handleChangeText} placeholder="Текст новости"/>
                        <br/>
                        <label>Превью</label> <br/>
                        <textarea type="text" value={smallText} onChange={handleChangeSmallText} placeholder="Превью"/>
                        <br/>
                        <label>Дата</label> <br/>
                        <input type="date" value={date} onChange={handleChangeDate} placeholder="Дата"/> <br/>
                        <label>Тег</label> <br/>
                        <input type="text" value={tag} onChange={handleChangeTag} placeholder="Тег"/> <br/>
                        <label>Ссылка на фото</label> <br/>
                        <input type="text" value={img} onChange={handleChangeImg} placeholder="Ссылка на фото"/> <br/>
                        <button type="submit">Отправить</button>
                    </form>
                </div>
                <div></div>
                <div>
                </div>
            </div>
        </div>
    );
}

export default NewsForm;
