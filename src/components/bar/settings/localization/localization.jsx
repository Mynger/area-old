import styles from './localization.module.scss'
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

function Localization() {
  const { i18n } = useTranslation();
  const [selectedLanguage, setSelectedLanguage] = useState(
    localStorage.getItem('selectedLanguage') || i18n.language
  );

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [selectedLanguage, i18n]);

  const handleChangeLanguage = (event) => {
    const newLanguage = event.target.value;
    setSelectedLanguage(newLanguage);
    i18n.changeLanguage(newLanguage);
    localStorage.setItem('selectedLanguage', newLanguage);
  };

  return (
    <select className={styles.select} value={selectedLanguage} onChange={handleChangeLanguage}>
      <option value="en">English</option>
      <option value="uk">Українська</option>
    </select>
  );
}

export default Localization;