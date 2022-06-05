import React from "react";
import s from "./Start.module.css";

const Start = () => {
    return <div className={s.start}>
        <div className={s.title}>C чего начать</div>
        <div className={s.wrapper}>

            <div className={s.number}> 1</div>
            <div>
                <div className={s.titles}> Получите данные для входа</div>
                <b>Для преподавателей.</b> <br/>
                <p>Для получения логина и пароля для входа на сайт электронного образования обратитесь в ауд. Б-112 к
                    руководителю
                    Центра электронного обучения Лукьянову Никите Дмитриевичу, тел. 40-56-16. </p>
                <b>Для студентов. </b><br/>
                <p>Воспользуйтесь <a
                    href="https://el.istu.edu/help/doku.php?id=%D1%81%D1%82%D1%83%D0%B4%D0%B5%D0%BD%D1%82%D0%B0%D0%BC:%D1%80%D0%B5%D0%B3%D0%B8%D1%81%D1%82%D1%80%D0%B0%D1%86%D0%B8%D1%8F"> инструкцией </a>.
                </p>
            </div>
            <div>
                <div className={s.titles}>Войдите в систему</div>
                <p>Перейдите на сайт электронного обучения <a
                    href="https://el.istu.edu/login/index.php"> el.istu.edu </a>
                    и введите полученные на
                    предыдущем шаге логин и пароль. </p>
                После чего Вам станут доступен курс, демонстрирующий возможности системы и обучающий курс, а также
                возможность создавать собственные электронные курсы.
            </div>
            <div className={s.number}> 2</div>
            <div className={s.number}> 3</div>
            <div>
                <div className={s.titles}> Остались вопросы? <br/></div>
                Ищите ответы в справке ( <a href="https://el.istu.edu/help/doku.php"> el.istu.edu/help </a> ) или
                задайте Ваш вопрос в техподдержку:
                <a href="mailto:support@el.istu.edu">support@el.istu.edu</a>
            </div>
        </div>
    </div>
}

export default Start;