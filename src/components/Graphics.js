import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../config/i18n';
import { useSelector } from 'react-redux';
import anychart from 'anychart';
import 'anychart/dist/css/anychart-ui.min.css';

export default function Graphics() {
    const { t } = useTranslation();
    const [cardId, setCardId] = useState('');

    const events = useSelector((state) => state.events.data);

    const handleInput = () => {
        console.log(events);

        let filteredEvents = events
            .filter(event => {
                const isValidCardId = event.cardId == cardId;
                const isValidType = event.type === "BEGIN" || event.type === "END";

                return isValidCardId && isValidType;
            })

        let chartData = [];

        for (let i = 0; i < filteredEvents.length; i += 2) {
            let x = filteredEvents[i].at.split("T")[0];
            if (filteredEvents[i + 1]) {
                chartData.push({
                    x: x,
                    value: Math.abs((new Date(filteredEvents[i + 1].at) - new Date(filteredEvents[i].at)) / (1000 * 60 * 60))
                });
            } else {
                chartData.push({
                    x: x,
                    value: Math.abs((Date.now() - new Date(events[i].at)) / (1000 * 60 * 60))
                });
            }
        }

        // Создание графика
        const chart = anychart.column(chartData);

        chart.yAxis().title(t("graphics.hours"));

        // Установка заголовка
        chart.title('Fruit Distribution');

        // Отображение графика в элементе с id 'graph'
        chart.container('graph');
        chart.draw();
    };

    return (
        <>
            <div className="row-element" style={{marginTop: "0.5rem"}}>
                <div className="small-tag styled-tag">{t('graphics.tag')}</div>
                <div className="border-dotted styled-element">
                    <div className="row">
                        <input className="form-field"
                               type="text"
                               id="name"
                               value={cardId}
                               placeholder={t('graphics.id')}
                               onChange={(e) => setCardId(e.target.value)}
                               required
                        />
                        <button className="button" onClick={handleInput}>{t('graphics.submit')}</button>
                    </div>
                    <div id="graph"></div>
                </div>
            </div>
        </>
    );
}
