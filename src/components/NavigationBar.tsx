import React, { useState, useEffect } from 'react';
import { Clapperboard } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import NavigationItems from '@/components/NavigationItems';
import ThemeToggle from '@/components/ThemeToggle';

const NavigationBar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const isHomePage = location.pathname === '/';

  const handleNavigate = () => {
    if (!isHomePage) {
      navigate('/');
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-10 transition-colors duration-300 ${
        isHomePage && !isScrolled ? 'transparent' : 'bg-gradient-to-b from-gray-800 to-black'
      }`}
      role="banner"
    >
      <div className="flex items-center" onClick={handleNavigate}>
        <Clapperboard className="mr-2" />
        <h1 className="text-2xl font-bold mr-4 text-red-600">Movie Browser</h1>
        <NavigationItems />
      </div>
      <div className="flex space-x-4">
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavigationBar;
