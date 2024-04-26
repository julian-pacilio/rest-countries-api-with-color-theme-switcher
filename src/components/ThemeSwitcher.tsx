import { useState, useEffect } from 'react';

export const ThemeSwitcher = () => {

    const [darkMode, setDarkMode] = useState<boolean>(false);
  
    useEffect(() => {
      const isDarkMode = localStorage.getItem('darkMode') === 'true';
      setDarkMode(isDarkMode);
    }, []);
  
    useEffect(() => {
      document.documentElement.classList.toggle('dark', darkMode);
      localStorage.setItem('darkMode', darkMode.toString());
    }, [darkMode]);
  
    const toggleDarkMode = () => {
      setDarkMode((prevMode) => !prevMode);
    };

    return (
        <>
            <button
                onClick={toggleDarkMode}
            >
                Icono
            </button>
            {darkMode ? 'Light Mode' : 'Dark Mode'}
        </>
      );
};