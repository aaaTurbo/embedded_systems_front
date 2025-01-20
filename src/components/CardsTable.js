import Table from './Table';
import {useTranslation} from "react-i18next";
import {setCards, deleteCard} from '../store';
import {useDispatch, useSelector} from "react-redux";
import {request} from "../Util";
import {useEffect} from "react";

export default function CardsTable() {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const cards = useSelector((state) => state.cards.data);

    const columns = [
        {name: 'ID', selector: row => row.id, id: 'id'},
        {name: t('cardsTable.name'), selector: row => row.name},
        {name: t('cardsTable.delete'), cell: row => <button onClick={() => handleDeleteCard(row.id)}>X</button>}
    ];

    useEffect(() => {
        request('/api/get_cards').then((data) => {
            dispatch(setCards(data));
        });
    }, [dispatch]);

    useEffect(() => {
        const fetchCards = () => {
            request('/api/get_cards').then((data) => {
                dispatch(setCards(data));
            });
        };

        fetchCards();

        const timer = setTimeout(() => {
            fetchCards();
        }, 1000);

        return () => clearInterval(timer);
    }, [cards, dispatch]);

    const handleDeleteCard = (id) => {
        request('/api/delete/' + id, 'DELETE').then((res) => {
            if (res) {
                dispatch(deleteCard(id));
            }
        });
    };

    return (<>
        <div className="row-element">
            <div className="tag styled-tag">{t('cardsTable.tag')}</div>
            <Table className="table border-dotted"
                   columns={columns}
                   data={cards}
                   defaultSortFieldId={'id'}
                   pagination
                   paginationPerPage={5}
                   paginationRowsPerPageOptions={[5, 10, 20, 30]}
                   responsive
            />
        </div>
    </>);
}