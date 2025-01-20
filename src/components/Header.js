import "../config/i18n";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useKeycloak } from "../config/keycloak"; // Импортируйте useKeycloak

export default function Header() {
    const { t, i18n } = useTranslation();
    const { login, logout } = useKeycloak(); // Вызовите useKeycloak вне условий

    const auth = useSelector((state) => state.auth);

    const changeLanguage = () => {
        const newLang = i18n.language === "en" ? "ru" : "en";
        i18n.changeLanguage(newLang);
    };

    return (
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
                    {auth.status ? (
                        <button onClick={logout}>{t("app.logout")}</button>
                    ) : (
                        <button onClick={login}>{t("app.login")}</button>
                    )}
                    <button onClick={changeLanguage}>{t("language")}</button>
                </div>
            </div>
        </header>
    );
}
