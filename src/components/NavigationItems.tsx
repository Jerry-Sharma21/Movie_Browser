import React from 'react';
import { useNavigate } from 'react-router-dom';

import { NAV_ITEMS } from '@/constants/constants';

const NavigationItems: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <nav className="flex items-center space-x-4" aria-label="Main Navigation">
      {NAV_ITEMS.map(item => (
        <button
          key={item.key}
          className="text-black cursor-pointer"
          onClick={() => handleNavigation(item.path)}
          aria-label={`Navigate to ${item.value}`}
        >
          {item.value}
        </button>
      ))}
    </nav>
  );
};

export default NavigationItems;
