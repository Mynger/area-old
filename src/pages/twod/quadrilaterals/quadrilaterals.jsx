import styles from '../../article.module.scss'
import { useTranslation} from 'react-i18next';
import Bar from '/src/components/bar/bar.jsx';
import Video from '/src/components/video.jsx';
import square from '/src/assets/2d/quadrilaterals/square.mp4';
import rectangle from '/src/assets/2d/quadrilaterals/rectangle.mp4';
import parallelogramHeight from '/src/assets/2d/quadrilaterals/parallelogram(height).mp4';
import parallelogramSin from '/src/assets/2d/quadrilaterals/parallelogram(sin).mp4';
import rhombus from '/src/assets/2d/quadrilaterals/rhombus.mp4';

function Quadrilaterals() {

    const { t, i18n } = useTranslation();

    const links = [
        {text: t('rectangles'), scroll: 'rectangles'},
        {text: t('parallelogram'), scroll: 'parallelogram'},
        {text: t('trapezoid'), scroll: 'trapezoid'},
        {text: t('other'), scroll: 'other'},
    ];

    document.title = t('quadrilaterals');

    return (
        <section  className={styles.section}>
            <Bar links={links} />
            <h2>{t('quadrilaterals')}</h2>
            <p>{t('quadrilateralsInfo')}</p>
            <h3 id='rectangles'>{t('square')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('squareInfo') }}></p>
                <Video src={square}/>
            </article>
            <h3>{t('rectangle')}</h3>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('rectangleInfo') }}></p>
                <Video src={rectangle}/>
            </article>
            <h3 id='parallelogram'>{t('parallelogram')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('parallelogramInfo') }}></p>
                <Video src={parallelogramHeight}/>
            </article>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('parallelogramInfoTwo') }}></p>
                <Video src={parallelogramSin}/>
            </article>
            <article className={styles}>
                <p dangerouslySetInnerHTML={{ __html: t('parallelogramInfoThree') }}></p>
                <Video src='./src/assets/2d/quadrilaterals/parallelogram(diagonal).mp4'/>
            </article>
            <h3>{t('rhombus')}</h3>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('rhombusInfo') }}></p>
                <Video src={rhombus}/>
            </article>
            <h3 id='trapezoid'>{t('trapezoid')}</h3>
            <article>
                <p dangerouslySetInnerHTML={{ __html: t('trapezoidInfo') }}></p>
                <Video src='./src/assets/2d/quadrilaterals/trapezoid.mp4'/>
            </article>
            <h3 id='other'>{t('oQuadrilaterals')}</h3>
            <article className={styles.reverse}>
                <p dangerouslySetInnerHTML={{ __html: t('oQuadrilateralsInfo') }}></p>
                <Video src='./src/assets/2d/quadrilaterals/other(q).mp4'/>
            </article>
        </section>
    )
}

export default Quadrilaterals