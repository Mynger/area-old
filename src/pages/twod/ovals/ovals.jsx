import styles from '../../article.module.scss'
import { useTranslation} from 'react-i18next';
import Bar from '/src/components/bar/bar.jsx';
import Video from '/src/components/video.jsx';
import circle from '/src/assets/2d/ovals/circle.mp4';
import sector from '/src/assets/2d/ovals/sector.mp4';
import ellipse from '/src/assets/2d/ovals/ellipse.mp4';

function Ovals() {

    const { t, i18n } = useTranslation();

    const links = [
        {text: t('circle'), scroll: 'circle'},
        {text: t('sector'), scroll: 'sector'},
        {text: t('ellipse'), scroll: 'ellipse'},
    ];

    document.title = t('ovals');

    return (
        <section  className={styles.section}>
            <Bar links={links} />
            <h2>{t('ovals')}</h2>
            <p>{t('ovalsInfo')}</p>
            <h3 id='circle'>{t('circle')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('circleInfo') }}></p>
                <Video src={circle}/>
            </article>
            <h3 id='sector'>{t('sector')}</h3>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('sectorInfo') }}></p>
                <Video src={sector}/>
            </article>
            <h3 id='ellipse'>{t('ellipse')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('ellipseInfo') }}></p>
                <Video  src={ellipse}/>
            </article>
        </section>
    )
}

export default Ovals