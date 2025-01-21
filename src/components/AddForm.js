import React, {useState} from 'react';
import {useTranslation} from 'react-i18next';
import '../config/i18n';
import {request} from "../Util";
import {useDispatch, useSelector} from 'react-redux';
import {addCard} from '../store';

export default function AddForm() {
    const {t} = useTranslation();
    const dispatch = useDispatch();
    const [name, setName] = useState('');
    const [id, setId] = useState('');

    const auth = useSelector((state) => state.auth);

    const handleSubmit = (event) => {
        event.preventDefault();
        request('/api/v1/card/add', auth.token, 'POST', {cardId: id, username: name}).then(
            res => {
                if (res) {
                    dispatch(addCard({id: res.id, cardId: res.cardId, username: res.userame}));
                }
            }
        )
        setName('');
        setId('');
    };

    return (<>
        <div className="row-element">
            <div className="small-tag styled-tag">{t('addForm.tag')}</div>
            <div className="border-dotted styled-element">
                <form onSubmit={handleSubmit} className="form">
                    <div>
                        <input className="form-field"
                               type="text"
                               id="name"
                               placeholder={t('addForm.name')}
                               value={name}
                               onChange={(e) => setName(e.target.value)}
                               required
                        />
                    </div>
                    <div>

                        <input className="form-field"
                               type="text"
                               id="id"
                               placeholder={t('addForm.id')}
                               value={id}
                               onChange={(e) => setId(e.target.value)}
                               required
                        />
                    </div>
                    <button type="submit">{t('addForm.submit')}</button>
                </form>
            </div>
        </div>
    </>);
}
