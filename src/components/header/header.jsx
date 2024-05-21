import styles from './header.module.scss'
import { useTranslation } from 'react-i18next';

function Header() {

    const { t, i18n } = useTranslation();

    return (
        <>
            <header>
                <h1>{t('area')}</h1>
                <p className={styles.subheader}>{t('areaSubheader')}</p>
            </header>
            <div className={styles.hr}></div>
        </> 
    )
}

export default Header