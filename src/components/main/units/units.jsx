import styles from './units.module.scss'
import { useTranslation } from 'react-i18next'

function Units() {

    const { t, i18n } = useTranslation();

    return (
        <section className={styles.units}>
            <h3 className={styles.header} id='units'>{t('areaUnits')}</h3>
            <div className={styles.text}>
                <div>
                    <p>{t('areaMeasure')}</p>
                    <p>{t('unitsSquare')}</p>
                    <p>{t('si')}</p>
                    <p>{t('unitsRatio')}&nbsp;
                    <math xmlns="http://www.w3.org/1998/Math/MathML"><mfrac><mrow><msup><mi mathvariant="normal">{t('meter')}</mi><mn>2</mn></msup></mrow><mrow><msup><mi mathvariant="normal">{t('kilometer')}</mi><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mrow><msup><mn>1</mn><mn>2</mn></msup></mrow><mrow><msup><mn>1000</mn><mn>2</mn></msup></mrow></mfrac><mo>=</mo><mfrac><mn>1</mn><mn>1000000</mn></mfrac></math> (<math xmlns="http://www.w3.org/1998/Math/MathML"><mn>1</mn><msup><mi mathvariant="normal">{t('kilometer')}</mi><mn>2</mn></msup><mo>&#x2260;</mo><mn>1000</mn><msup><mi mathvariant="normal">{t('meter')}</mi><mn>2</mn></msup></math>)</p>
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={styles.svg}>
                    <rect width="500" height="500" className={styles.square}/>
                    <rect y="495" width="500" height="5" className={styles.hline}/>
                    <rect y="495" width="500" height="5" className={styles.vline}/>
                    <text x="240" y="485" className={styles.meter}>{t('meter')}</text>
                    <text x="235" y="250" className={styles.smeter}>{t('meter')}&sup2;</text>
                </svg>
            </div>
        </section>
    )
}

export default Units