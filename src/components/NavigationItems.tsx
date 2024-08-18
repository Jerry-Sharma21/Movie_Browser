import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import DropDownMenu from '@/components/DropDownMenu';
import { NAV_ITEMS } from '@/constants/constants';
import { AlignJustify } from 'lucide-react';

const NavigationItems: React.FC = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const navigate = useNavigate();

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(prevState => !prevState);
  };

  const closeDropdown = () => {
    setIsDropdownOpen(false);
  };

  return (
    <nav className="flex items-center space-x-4" aria-label="Main Navigation">
      <div className="relative md:hidden">
        <button className="text-white cursor-pointer mt-[10px]" aria-label="Open navigation menu" onClick={toggleDropdown}>
          <AlignJustify />
        </button>
        {isDropdownOpen && <DropDownMenu onNavigate={handleNavigation} onClose={closeDropdown} />}
      </div>

      <div className="hidden md:flex space-x-4 mt-[5px]">
        {NAV_ITEMS.map(item => (
          <button
            key={item.key}
            className="text-white cursor-pointer"
            onClick={() => handleNavigation(item.path)}
            aria-label={`Navigate to ${item.value}`}
          >
            {item.value}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default NavigationItems;
