import React from "react";
import s from "./Opportunities.module.css";
import flipchart from "../../assets/images/icons/flipchart.svg";
import group from "../../assets/images/icons/group.svg";
import cup from "../../assets/images/icons/cup.svg";
import adaptive from "../../assets/images/icons/adaptive.svg";
import bubble from "../../assets/images/icons/bubble.svg";
import landing from "../../assets/images/icons/landing.svg";

const Opportunities = () => {
    return <div className={s.wrapper}>
        <div className={s.title}> Возможности</div>
        <div className={s.opportunities}>
            <div>
                <div><img src={landing}/></div>
                <div className={s.titles}>Интерактивность</div>
                <div>Устраивайте групповые обсуждения, коллективное составление справочных материалов, проводите
                    тестирования.
                    Составляйте индивидуальные траектории обучения. Используйте широкие возможности по геймификации,
                    награждайте баллами и значками, отслеживайте выполнение курса, увеличивайте вовлеченность в процесс.
                </div>
            </div>
            <div>
                <div><img src={bubble}/></div>
                <div className={s.titles}>Доступность и коммуникация</div>
                <div>Получайте доступ к электронному курсу в любое удобное время, со стационарных компьютеров и
                    мобильных устройств.
                    Оповещайте учащихся о переносе занятий и других важных событиях.
                </div>
            </div>
            <div>
                <div><img src={flipchart}/></div>
                <div className={s.titles}> Наглядность</div>
                <div>Широкие возможности Moodle позволяют наглядно представить любой курс. Используйте мультимедиа,
                    проводите тесты,
                    составляйте кроссворды, глоссарии, интеллект-карты. Структурируйте информацию по разделам, книгам,
                    папкам.
                    Всего 24 различных элемента и может стать еще больше если окажется что Вам чего-то не хватает.
                </div>
            </div>
            <div>
                <div><img src={cup}/></div>
                <div className={s.titles}>Дух соревнования</div>
                <div>Поощряйте инициативу! Награждайте значками за выполнение теста на 100 баллов или лучшую курсовую
                    работу.
                    Учащиеся видят свое место в рейтинге по группе, которое зависит от качества выполнения заданий.
                </div>
            </div>
            <div>
                <div><img src={adaptive}/></div>
                <div className={s.titles}>Удобство проверки работ</div>
                <div>Экономьте время на проверке работ! Тесты проверяются автоматически, лабораторные и курсовые работы
                    Вы можете проверить в любое удобное время, ведь они всегда доступны на сайте.
                </div>
            </div>
            <div>
                <div><img src={group}/></div>
                <div className={s.titles}>Коллективная деятельность</div>
                <div>Студенты могут совместно составлять статьи энциклопедии, глоссарии, участвовать в обсуждениях на
                    форуме
                    и выставлять оценки чужим работам на семинарах.
                </div>
            </div>
        </div>
    </div>
}

export default Opportunities;