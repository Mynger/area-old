import styles from './properties.module.scss'
import { useTranslation } from 'react-i18next';

function Properties() {

    const { t, i18n } = useTranslation();

    return (
        <section className={styles.properties}>
            <h3 id='properties'>{t('areaProperties')}</h3>
            <p>{t('areaConcept')}</p>
            <p>{t('areaConditions')}</p>
            <ul>
                <li>{t('nonNegative')}</li>
                <li>{t('additive')}</li>
                <li>{t('congruent')}</li>
                <li>{t('squareOne')}</li>
            </ul>
            <p>{t('areaAxioms')}</p>
            <p>{t('areaAnalogs')}</p>
        </section>
    )
}

export default Properties