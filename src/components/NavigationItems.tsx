import React from 'react';
import { NAV_ITEMS } from '../constants/constants';
import { useNavigate } from 'react-router-dom';

const NavigationItems: React.FC = () => {
  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };
  return (
    <nav className="flex items-center space-x-4">
      {NAV_ITEMS.map(item => (
        <div key={item.key} className="text-black cursor-pointer" onClick={() => handleNavigation(item.path)}>
          {item.value}
        </div>
      ))}
    </nav>
  );
};

export default NavigationItems;
