import React from "react";
import {NavLink} from "react-router-dom";
import s from "./HeaderAdmin.module.css";

const Header = () => {
    return (
        <div className={s.wrapper}>
            <div className={s.itemtitle}> Панель администратора </div>
            <div className={s.navi}>
            <NavLink to="/" activeClassName={s.active}>Перейти на сайт</NavLink>
            <NavLink to="/" activeClassName={s.active} onClick={() => localStorage.clear()} > Выйти </NavLink>
            </div>
        </div>)
}

export default Header;