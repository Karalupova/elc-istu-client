import React from "react";
import s from "./Advantages.module.css";

const Advantages = () => {
    return <div>
        <div className={s.title}>Преимущества электронного образования</div>
        <div className={s.body}>
            <div className={s.item}>
                <div className={s.titles}>Увеличение вовлеченности в процесс</div>
                <div className={s.description}>Использование элементов геймификации, интерактивных возможностей,
                    соревнование и самоконтроль
                    за прохождением курса являются мощными инструментами вовлечения в учебный процесс.
                </div>
            </div>
            <div className={s.item}>
                <div className={s.titles}>Развитие навыков</div>
                <div className={s.description}>Электронное образование позволяет студенту получить навыки командной
                    работы, оценки чужих
                    курсовых и лабораторных работ, самоконтроля.
                </div>
            </div>
            <div className={s.item}>
                <div className={s.titles}>Повышение эффективности</div>
                <div className={s.description}>Система электронного образования позволяет автоматизировать
                    многие рутинные процессы и получить
                    даже больше информации об успеваемости чем при традиционном обучении.
                </div>
            </div>
            <div className={s.item}>
                <div className={s.titles}>Престиж</div>
                <div className={s.description}>Наличие электронной версии курса не только удобно для студента и
                    преподавателя, но и показывает
                    Вашу заинтересованность в мировых тенденциях в образовании.
                </div>
            </div>
        </div>
    </div>
}

export default Advantages;