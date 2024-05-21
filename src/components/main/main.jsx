import styles from './main.module.scss'
import Properties from './properties/properties.jsx'
import Units from './units/units.jsx';
import Formulas from './formulas/formulas.jsx';

function Main() {
    return (
        <main>
            <Properties />
            <Units />
            <Formulas />
        </main>
    )
}

export default Main