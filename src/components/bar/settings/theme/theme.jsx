import { useState, useEffect } from 'react';
import styles from './theme.module.scss';
import dark from '/src/assets/dark.svg';
import light from '/src/assets/light.svg';

function Theme() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light');

  useEffect(() => {
    const storedTheme = localStorage.getItem('theme');
    setTheme(storedTheme || 'light');
    document.documentElement.classList.add(theme);

    return () => {
      document.documentElement.classList.remove(theme);
    };
  }, []);

  const handleThemeToggle = () => {
    const newTheme = theme === 'light' ? 'dark-theme' : 'light';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme);
    document.documentElement.classList.toggle('dark-theme');
  };

  return ( 
    <img className={styles.theme} src={theme === 'light' ? light : dark} alt="theme" onClick={handleThemeToggle}/>
  );
}

export default Theme;