import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Headers.module.css";

const Headers = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.itemtitle}> Центр электронного обучения ИРНИТУ</div>
            <div className={s.navi}>
                <NavLink to="/">Главная </NavLink>
                <NavLink to="/news"> Новости </NavLink>
                <NavLink to="/documents"> Документы </NavLink>
                <NavLink to="/centre"> О центре </NavLink>
            </div>
        </div>)
}

export default Headers;