import styles from './bar.module.scss'
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import Settings from './settings/settings.jsx'

function Bar ({ links }) {

    const { t, i18n } = useTranslation();

    const scrollToElement = (id) => {
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView();
      }
    }

    const [click, setclick] = useState(false);

    function handleClick() {
        setclick(!click);
    }

    return (
        <>
            <section className={styles.dbar}>
                <nav>
                    {links.map((link) => (
                        <a onClick={(event) => {event.preventDefault(); scrollToElement(link.scroll);}}>{link.text}</a>
                    ))}
                </nav>
                <Settings />
            </section>
            <section className={styles.mbar}>
                {click ? 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 485.13 485.13" className={styles.svg} onClick={handleClick}>
                        <rect x="-42.04" y="200" width="584.08" height="100" transform="translate(242.56 -110.99) rotate(45)"/>
                        <rect x="-42.04" y="200" width="584.08" height="100" transform="translate(-110.99 242.56) rotate(-45)"/>
                    </svg> : 
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 500 500" className={styles.svg} onClick={handleClick}>
                        <rect x="0.5" y="0.5" width="500" height="100"/>
                        <rect x="0.5" y="400.5" width="500" height="100"/>
                        <rect x="0.5" y="197.5" width="500" height="100"/>
                    </svg>}
                {click &&   
                    <nav>
                        {links.map((link) => (
                            <a onClick={(event) => {event.preventDefault(); scrollToElement(link.scroll); handleClick();}}>{link.text}</a>
                    ))}
                    </nav>}
                <Settings />
            </section>
        </>
        
    )
}

export default Bar