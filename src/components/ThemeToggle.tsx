import React, { useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle: React.FC = () => {
  const [darkMode, setDarMode] = useState(false);

  const toggleTheme = () => {
    setDarMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  return (
    <button className="text-gray-700 dark:text-gray-300 focus:outline-none" onClick={toggleTheme}>
      {darkMode && <Sun />}
      {!darkMode && <Moon />}
    </button>
  );
};

export default ThemeToggle;
