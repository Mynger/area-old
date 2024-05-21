import styles from '../select.module.scss'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import Bar from '/src/components/bar/bar';

function TwoD() {

    const { t, i18n } = useTranslation();

    const links = [
        {text: '', scroll: ''},
      ];

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }, []);

    document.title = t('twoD');

    return (
        <>
            <Bar links={links}/>
            <section className={styles.twod}>
                <Link to="/area/triangles" className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" className={styles.svg}>
                        <polygon points="3.72 354.16 489.41 354.16 146.37 4.46 3.72 354.16"/>
                    </svg>
                     <p>{t('triangles')}</p>
                </Link>
                <Link to="/area/quadrilaterals" className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" className={styles.svg}>
                         <rect x="2.5" y="2.5" width="495" height="350"/>
                    </svg>
                     <p>{t('quadrilaterals')}</p>
                </Link>
                <Link to="/area/other-polygons" className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 412.69 357.4" className={styles.svg}>
                        <polygon points="308.07 2.5 104.62 2.5 2.89 178.7 104.62 354.9 308.07 354.9 409.8 178.7 308.07 2.5"/>
                    </svg>
                     <p>{t('opolygons')}</p>
                </Link>
                <Link to="/area/ovals" className={styles.link}>
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 360" className={styles.svg}>
                        <ellipse cx="247.56" cy="178.79" rx="245.06" ry="176.29"/>
                    </svg>
                     <p>{t('ovals')}</p>
                </Link>
            </section>
        </> 
    )
}

export default TwoD