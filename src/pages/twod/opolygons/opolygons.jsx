import styles from '../../article.module.scss'
import { useTranslation} from 'react-i18next';
import Bar from '/src/components/bar/bar.jsx';
import Video from '/src/components/video.jsx';

function OPolygons() {

    const { t, i18n } = useTranslation();

    const links = [
        {text: t('hexagon'), scroll: 'hexagon'},
        {text: t('octagon'), scroll: 'octagon'},
        {text: t('other'), scroll: 'other'},
    ];

    document.title = t('opolygons');

    return (
        <section  className={styles.section}>
            <Bar links={links} />
            <h2>{t('opolygons')}</h2>
            <h3 id='hexagon'>{t('hexagon')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('hexagonInfo') }}></p>
                <Video src='./src/assets/2d/polygons/hexagon.mp4'/>
            </article>
            <h3 id='octagon'>{t('octagon')}</h3>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('octagonInfo') }}></p>
                <Video src='./src/assets/2d/polygons/octagon.mp4'/>
            </article>
            <a href='https://www.desmos.com/calculator/zv8ghd2hsj?lang=uk' target='_blank'><h3 id='other'>{t('other')}</h3></a>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('otherInfo') }}></p>
                <Video  src='./src/assets/2d/polygons/other.mp4'/>
            </article>
        </section>
    )
}

export default OPolygons