import CardsTable from "../components/CardsTable";
import EventsTable from "../components/EventsTable";
import ControlPanel from "../components/ControlPanel";
import useWebSocket from "../config/ws";
import { useKeycloak } from '@react-keycloak/web';
import {useTranslation} from "react-i18next";

export default function MainPage() {

    const {t} = useTranslation();

    const { keycloak } = useKeycloak();

    if (!keycloak.authenticated) {
        return <div>{t("app.notAuthenticated")}</div>;
    }

    // eslint-disable-next-line react-hooks/rules-of-hooks
    useWebSocket();

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