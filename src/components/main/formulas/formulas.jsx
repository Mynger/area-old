import styles from './formulas.module.scss'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function Formulas() {

    const { t, i18n } = useTranslation();

    return (
        
        <section className={styles.formulas}>
            <h3 className={styles.header} id='formulas'>{t('areaFormulas')}</h3>
            <div className={styles.select}>
                <Link to="/area/2d" className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" className={styles.svg}>
                         <rect x="2.5" y="2.5" width="495" height="350"/>
                    </svg>
                     <p>{t('twoD')}</p>
                </Link>
                <Link to="/area/3d" className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" className={styles.svg}>
                        <polygon points="243.43 347.78 4.01 270.83 4.01 59.42 243.43 136.37 243.43 347.78"/>
                        <polygon points="243.43 347.78 482.85 270.83 482.85 59.42 243.43 136.37 243.43 347.78"/>
                        <polygon points="9.3 56.47 243.87 133.84 477.37 57.03 244.86 2.57 9.3 56.47"/>
                    </svg>
                    <p>{t('threeD')}</p>
                </Link>
            </div>
        </section>
    )
}

export default Formulas