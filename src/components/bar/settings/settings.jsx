import styles from './settings.module.scss'
import Theme from './theme/theme.jsx'
import Localization from './localization/localization.jsx'

function Settings() {
    return (
        <div className={styles.settings}>
            <Localization />
            <Theme />
        </div>
    )
}

export default Settings