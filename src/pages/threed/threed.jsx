import styles from '../select.module.scss'
import { useTranslation } from 'react-i18next';

function ThreeD() {

    const { t, i18n } = useTranslation();

    document.title = t('area');

    return (
        <>
        </> 
    )
}

export default ThreeD