import React from "react";
import s from "./Solutions.module.css";
import hat from "./../../assets/images/icons/hat.svg";
import course from "./../../assets/images/icons/course.svg";
import phone from "../../assets/images/icons/phone.svg";


const Solutions = () => {
    return <div className={s.wrapper}>
        <div className={s.content}>
            <div className={s.title}> Решения</div>
            <div>
                <div className={s.item}>
                    <div><img src={hat}/></div>
                    <div className={s.des}>
                        <div className={s.titles}>Электронное обучение</div>
                        <div><b>Для кого:</b> для студентов и преподавателей ИРНИТУ. <br/>
                            <b>Что:</b> электронные курсы в дополнение к традиционным лекциям и практикам, олимпиады.
                        </div>
                        <div><a className={s.buttonstyle} href='https://el.istu.edu/login/index.php/'> Перейти на
                            el.istu.edu </a></div>
                    </div>
                </div>
                <div className={s.item}>
                    <div><img src={course}/></div>
                    <div className={s.des}>
                        <div className={s.titles}>Открытые курсы</div>
                        <div><b>Для кого:</b> для всех желающих. <br/>
                            <b>Что: </b>электронные курсы по самым актуальным темам.
                        </div>
                        <div><a className={s.buttonstyle} href='https://open.istu.edu/'> Перейти на open.istu.edu </a>
                        </div>
                    </div>
                </div>
                <div className={s.item}>
                    <div><img src={phone}/></div>
                    <div className={s.des}>
                        <div className={s.titles}>Мобильное приложение</div>
                        <div><b>Для кого: </b>для студентов и преподавателей ИРНИТУ. <br/>
                            <b>Что: </b>Мобильное приложжение с оффлайн доступом к материалам курсов и моментальными
                            уведомлениями
                        </div>
                        <div><a className={s.buttonstyle} href='https://elc.istu.edu/mobile/'> Подробнее </a></div>
                    </div>
                </div>
            </div>
        </div>
    </div>
}

export default Solutions;