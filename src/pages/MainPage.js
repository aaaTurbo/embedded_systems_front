import CardsTable from "../components/CardsTable";
import EventsTable from "../components/EventsTable";
import ControlPanel from "../components/ControlPanel";
import {useTranslation} from "react-i18next";
import keycloak from "../config/keycloak";

export default function MainPage() {

    const {t} = useTranslation();

    console.log(keycloak.authenticated);

    if (!keycloak.authenticated) {
        return <div>{t("app.notAuthenticated")}</div>;
    }

    return (<>
        <div className="container" id="main">
            <div className="row">
                <CardsTable/>
                <EventsTable/>
            </div>
            <div>
                <ControlPanel/>
            </div>
        </div>
    </>);
}