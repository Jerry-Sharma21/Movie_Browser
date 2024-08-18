import React from 'react';
import SearchBar from './SearchBar';
import ThemeToggle from './ThemeToggle';
import NavigationItems from './NavigationItems';

const NavigationBar: React.FC = () => {
  return (
    <div className="fixed top-0 left-0 w-full flex items-center justify-between px-6 py-4 z-10 bg-transparent">
      <div className="flex items-center">
        <h1 className="text-2xl font-bold mr-4 text-red-600">Movie Browser</h1>
        <NavigationItems />
      </div>
      <div className="flex space-x-4">
        <SearchBar />
        <ThemeToggle />
      </div>
    </div>
  );
};

export default NavigationBar;
