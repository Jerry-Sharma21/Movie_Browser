import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <button
      className="text-gray-700 dark:text-gray-300 focus:outline-none"
      onClick={toggleTheme}
      aria-label={`Switch to ${darkMode ? 'light' : 'dark'} mode`}
    >
      {darkMode ? <Sun color="white" /> : <Moon color="white" />}
    </button>
  );
};

export default ThemeToggle;
