import React from 'react';

import NavigationItems from '@/components/NavigationItems';
import SearchBar from '@/components/SearchBar';
import ThemeToggle from '@/components/ThemeToggle';

const NavigationBar: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-10 bg-transparent" role="banner">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-4 text-red-600">Movie Browser</h1>
        <NavigationItems />
      </div>
      <div className="flex space-x-4">
        <SearchBar />
        <ThemeToggle />
      </div>
    </header>
  );
};

export default NavigationBar;
