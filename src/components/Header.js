import "../config/i18n";
import {useTranslation} from "react-i18next";
import { useKeycloak } from '@react-keycloak/web';

export default function Header() {
    const { t, i18n } = useTranslation();
    const { keycloak } = useKeycloak();

    const changeLanguage = () => {
        if (i18n.language.match("en")) {
            i18n.changeLanguage("ru");
        } else {
            i18n.changeLanguage("en");
        }
    };

    return (<>
        <header className="container" id="header">
            <div className="row">
                <div>
                    <span>Time Keeper Limited Inc.</span>
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" id="ico">
                        <path
                            d="M12 7V12L14.5 10.5M21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12Z"
                            stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </div>
                <div>
                    {keycloak.authenticated ? (
                    <button onClick={() => keycloak.logout()}>{t("app.logout")}</button>
                    ) : (
                    <button onClick={() => keycloak.login()}>{t("app.login")}</button>
                    )}
                    <button onClick={() => changeLanguage()}>{t("language")}</button>
                </div>
            </div>
        </header>
    </>);
}