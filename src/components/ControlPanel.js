import AddForm from "./AddForm";
import {useTranslation} from 'react-i18next';
import '../config/i18n';

export default function ControlPanel() {
    const {t} = useTranslation();

    return (<>
        <div className="container" id="controles">
            <div className="margined-tag styled-tag">{t('controls.tag')}</div>
            <div className="row">
                <AddForm/>
            </div>
        </div>
    </>);
}