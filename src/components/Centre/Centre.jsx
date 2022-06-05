import React from "react";
import s from "./Centre.module.css";
import Headers from "../Header/Headers";

const Centre = () => {
    return <div>
        <Headers/>
        <div className={s.banner}>
            <div>
                <div className={s.title}>О центре</div>
                <div className={s.description1}>Назначение Центра электронного обучения - реализация политики ИРНИТУ в
                    области электронного обучения и
                    дистанционных образовательных технологий.
                </div>
            </div>
        </div>
        <div className={s.titles}>Сотрудники</div>
        <div className={s.wrapper}>
            <div className={s.item}>
                <div className={s.post}>Руководитель центра</div>
                <div className={s.name}>Лукьянов Никита Дмитриевич</div>
                <a href="mailto:lukyanovnd@istu.edu">lukyanovnd@istu.edu</a>
                <div> ауд. Б-112, тел. 40-56-16</div>
            </div>
            <div className={s.item}>
                <div className={s.post}>Специалист по учебно-методической работе</div>
                <div className={s.name}>Попова Ирина Константиновна</div>
                <div>ауд. Б-116, тел. 40-56-52</div>
                <div className={s.tasks}>Основные задачи</div>
                <div className={s.description}>разработка методических указаний по составлению электронных курсов
                    консультации преподавателей по наполнению электронных курсов
                    оказание помощи студентам по освоению системы электронного обучения
                </div>
            </div>

            <div className={s.item}>
                <div className={s.post}>Программист</div>
                <div className={s.name}>Алексеев Роман Вячеславович</div>
                <a href="mailto:raceo187@el.istu.edu">raceo187@el.istu.edu</a>
                <div className={s.tasks}>Основные задачи</div>
                <div>ауд. Б-112</div>
                <div className={s.description}>разработка и поддержка сайта электронного обучения ИРНИТУ
                    техническая поддержка пользователей системы
                </div>
            </div>
            <div className={s.item}>
                <div className={s.post}>Программист</div>
                <div className={s.name}>Жошкин Владимир Владимирович</div>
                <a href="mailto:vj@el.istu.edu">vj@el.istu.edu</a>
                <div className={s.tasks}>Основные задачи</div>
                <div>ауд. Б-112</div>
                <div className={s.description}>разработка и поддержка сайта электронного обучения ИРНИТУ
                    техническая поддержка пользователей системы
                </div>
            </div>
        </div>
    </div>
}

export default Centre;