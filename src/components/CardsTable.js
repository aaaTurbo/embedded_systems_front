import Table from './Table';
import {useTranslation} from "react-i18next";
import { setCards, deleteCard } from '../store';
import {useDispatch, useSelector} from "react-redux";
import {request} from "../Util";
import {useEffect} from "react";

export default function CardsTable() {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.data);

    const auth = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchCards = () => {
            request('/api/v1/card', auth.token).then((data) => {
                if (data) {
                    dispatch(setCards(data));
                } else {
                    dispatch(setCards([]))
                }
            });
        };

        fetchCards();

        const timer = setInterval(() => {
            fetchCards();
        }, 1000);

        return () => clearInterval(timer);
    }, [dispatch, auth]);

    const columns = [
        {name: 'ID', selector: row => row.id, id: 'id', width: "3rem"},
        {name: 'Card Id', selector: row => row.cardId, width: "10rem"},
        {name: t('cardsTable.name'), selector: row => row.username},
        {name: t('cardsTable.delete'), cell: row => <button onClick={() => handleDeleteCard(row.id)}>X</button>}
    ];

    const handleDeleteCard = (id) => {
        request('/api/v1/card/' + id, auth.token, 'DELETE').then((res) => {
            if (res) {
                dispatch(deleteCard(id));
            }
        });
    };

    return (<>
        <div className="row-element">
            <div className="tag styled-tag">{t('cardsTable.tag')}</div>
            {cards.length > 0 ? (
                <Table className="table border-dotted"
                       columns={columns}
                       data={cards}
                       defaultSortFieldId={'id'}
                       pagination
                       paginationPerPage={5}
                       paginationRowsPerPageOptions={[5, 10, 20, 30]}
                       responsive
                />
            ) : (
                <p>{t("cardsTable.empty")}</p>
            )}
        </div>
    </>);
}