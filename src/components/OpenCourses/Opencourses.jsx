import React from "react";
import s from "./Opencourses.module.css";
import palette from "../../assets/images/icons/palette.svg";
import past from "../../assets/images/icons/past.svg";
import diamond from "../../assets/images/icons/diamond.svg";


const Opencourses = () => {
    return <div>
        <div className={s.title}> Массовые открытые онлайн-курсы</div>
        <div className={s.wrapper}>
            <div>
                <div className={s.item}>
                    <div className={s.titles}>
                        <img src={diamond}/>
                        Камень в дизайне художественных и промышленных изделий
                    </div>
                    <div><p><b>Автор:</b> Лобацкая Раиса Моисеевна — профессор института недропользования ИРНИТУ,
                        доктор геолого-минералогических наук, зав. Кафедрой геммологии, кавалер Ордена им. Михаила
                        Перхина Международного Фонда К. Фаберже за вклад в развитие ювелирного дела России. </p>
                        <p><b> Описание:</b> Узнайте о истории применения камня в художественных изделиях и современном
                            дизайне. Познакомьтесь с камнерезными шедеврами от доисторических времен до наших дней и
                            технологиям обработки камня. </p></div>
                    <div><a className={s.buttonstyle} href='https://open.istu.edu/course/view.php?id=6/'> Подробнее </a>
                    </div>
                </div>
            </div>
            <div className={s.item}>
                <div className={s.titles}><img src={past}/>
                    Прошлое глазами археолога
                </div>
                <div><p><b>Автор:</b> Харинский Артур Викторович — профессор кафедры истории и философии ИРНИТУ, доктор
                    исторических наук, заведующий лабораторией археологии, палеоэкологии и систем жизнедеятельности
                    народов Северной Азии. </p>
                    <p><b>Описание:</b> Окунитесь в прошлое, побывайте на раскопках и ощутите дух приключений. Вы
                        получите
                        базовые навыки археолога и узнаете много нового о жизни древних людей. </p></div>
                <div><a className={s.buttonstyle} href='https://open.istu.edu/course/view.php?id=7/'>
                    Подробнее </a></div>
            </div>
            <div className={s.item}>
                <div className={s.titles}><img src={palette}/>
                    Синтез изобразительных искусств и архитектуры
                </div>
                <div><p><b>Автор:</b> Элоян Сергей Норикович — профессор кафедры архитектурного проектирования ИРНИТУ,
                    Заслуженный художник России.</p>
                    <p><b>Описание:</b> Познакомьтесь с основными принципами работы художника и дизайнера в
                        архитектурном
                        пространстве Князе-Владимирского храма. Курс знакомит с историей христианской культовой
                        архитектуры
                        и храмовой росписи. </p></div>
                <div><a className={s.buttonstyle} href='https://open.istu.edu/course/view.php?id=7/'> Подробнее </a>
                </div>
            </div>
        </div>
    </div>
}

export default Opencourses;