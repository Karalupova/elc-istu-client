import React from "react";
import s from "./Lastnews.module.css";



const Lastnews = () => {
    return <div>
        <div className={s.title}>Новости  </div>
        <div className={s.lastnews}>
        <div> 14.03.22</div>
            <div className={s.item}> <div className={s.name}> Язык, наука и техника в диалоге культур в 2022 году </div>
            Уважаемые преподаватели и студенты! На базе платформы открытых курсов ИРНИТУ open.istu.edu состоится
            Вторая научно-практическая студенческа... <br/>
            <a href="#"> Подробнее</a>
        </div>
            <div> 05.03.22</div>
            <div className={s.item}> <div className={s.name}> Работа систем электронного обучения </div>
                Уважаемые студенты и преподаватели! Системы электронного обучения el.istu.edu и open.istu.edu
                работают в штатном режиме. <br/>
                <a href="#"> Подробнее</a>
            </div>
            <div > 10.12.21</div>
            <div className={s.item}> <div className={s.name}> Результаты тестирования по базовой математике </div>
                Уважаемые студенты! В ИРНИТУ состоялось тестирование студентов первого курса по базовой математике.
                Средний балл составил 66 из 100 (в сен... <br/>
                <a href="#"> Подробнее</a>
            </div>
            <div > 06.08.21</div>
            <div className={s.item}> <div className={s.name}> Подача курсов на экспертную оценку</div>
                Уважаемые преподаватели! С 10 августа по 25 августа 2021 г. включительно будет проходить подача электронных
                курсов на экспертную оценку ... <br/>
                <a href="#"> Подробнее</a>
            </div>
        </div>
    </div>
}

export default Lastnews;