import CardsTable from "../components/CardsTable";
import EventsTable from "../components/EventsTable";
import ControlPanel from "../components/ControlPanel";
import {useTranslation} from "react-i18next";
import {useSelector} from "react-redux";
import Graphics from "../components/Graphics";

export default function MainPage() {

    const {t} = useTranslation();

    const auth = useSelector((state) => state.auth);

    if (!auth.status) {
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
                <Graphics/>
            </div>
        </div>
    </>);
}