import Table from './Table';
import {useTranslation} from "react-i18next";
import {setCards, setEvents} from '../store';
import {useDispatch, useSelector} from "react-redux";
import {request} from "../Util";
import {useEffect} from "react";

export default function CardsTable() {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const events = useSelector((state) => state.events.data);
    const columns = [
        {name: 'ID', selector: row => row.id, id: 'id'},
        {name: t('eventsTable.name'), selector: row => row.name},
        {
            name: t('eventsTable.event'), selector: row => {
                if (row.event.match("entered")) {
                    return t("event.entered");
                } else {
                    return t("event.left");
                }
            }
        },
        {name: t('eventsTable.dt'), selector: row => row.dt}
    ];

    useEffect(() => {
        const fetchEvents = () => {
            request('/api/get_events').then((data) => {
                dispatch(setEvents(data));
            });
        };

        fetchEvents();

        const timer = setTimeout(() => {
            fetchEvents();
        }, 1000);

        return () => clearInterval(timer);
    }, [events, dispatch]);

    return (<>
        <div className="row-element">
            <div className="tag styled-tag">{t('eventsTable.tag')}</div>
            <Table className="table border-dotted"
                   columns={columns}
                   data={events}
                   pagination
                   paginationPerPage={5}
                   paginationRowsPerPageOptions={[5, 10, 20, 30]}
                   responsive
            />
        </div>
    </>);
}