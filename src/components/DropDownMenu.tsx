import React from 'react';

import { NAV_ITEMS } from '@/constants/constants';

interface DropDownMenuProps {
  onNavigate: (path: string) => void;
  onClose: () => void;
}

const DropDownMenu: React.FC<DropDownMenuProps> = props => {
  const { onNavigate, onClose } = props;

  const handleNavigation = (path: string) => {
    onNavigate(path);
    onClose();
  };

  return (
    <div className="absolute top-full left-0 mt-2 w-48 bg-whi te shadow-lg rounded-lg">
      {NAV_ITEMS.map(item => (
        <button
          key={item.key}
          className="bg-white w-full text-left px-4 py-2 text-black  dark:bg-gray-700 dark:text-white"
          onClick={() => handleNavigation(item.path)}
          aria-label={`Navigate to ${item.value}`}
        >
          {item.value}
        </button>
      ))}
    </div>
  );
};

export default DropDownMenu;
