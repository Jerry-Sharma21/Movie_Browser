import React from 'react';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../components/NavigationBar';

const AppLayout: React.FC = () => {
  return (
    <div className="text-white dark:bg-gray-800 dark:text-gray-100">
      <header className="bg-gray-900 dark:bg-gray-700 shadow-md">
        <NavigationBar />
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
};

export default AppLayout;
