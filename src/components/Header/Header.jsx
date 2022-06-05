import React from "react";
import {NavLink} from "react-router-dom";
import s from "./Header.module.css";

const Header = () => {
    return (
        <div className={s.wrapper}>
    <div className={s.itemtitle}> Центр электронного обучения ИРНИТУ </div>
            <div className={s.navi}>
                <ul>
       <li><NavLink to="/">Главная </NavLink> </li>
                    <li> <div><NavLink to="/news" > Новости </NavLink> </div></li>
                        <li><div><NavLink to="/documents"> Документы </NavLink> </div></li>
                            <li><div><NavLink to="/centre"> О центре </NavLink> </div></li>
                </ul>
            </div>
    </div>)
}

export default Header;