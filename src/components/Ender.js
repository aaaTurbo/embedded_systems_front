import "../config/i18n";
import {useTranslation} from "react-i18next";

export default function Ender() {
    const {t} = useTranslation();

    return (<>
        <div className="container" id="ender">
            <div id="faq">
                {t("faq.developed")}
                <a href="https://github.com/aaaTurbo">{t("faq.anton")}</a>
                {t("faq.and")}
                <a href="https://github.com/enzulode">{t("faq.vlad")}</a>
                ,
                {t("faq.period")}
            </div>
        </div>
    </>);
}