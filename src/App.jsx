import './App.scss'
import { useTranslation } from 'react-i18next'
import Bar from './components/bar/bar.jsx'
import Header from './components/header/header.jsx'
import Main from './components/main/main.jsx'

function App() {

  const { t, i18n } = useTranslation();
  
  const links = [
    {text: t('areaProperties'), scroll: 'properties'},
    {text: t('areaUnits'), scroll: 'units'},
    {text: t('areaFormulas'), scroll: 'formulas'},
  ];

  document.title = t('area');

  return (
    <>
      <Bar links={links}/>
      <Header />
      <Main />
    </>
  )
}

export default App
