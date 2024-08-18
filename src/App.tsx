import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import { SearchProvider } from './context/SearchContext';
import Home from './pages/Home';
import MyList from './pages/MyList';

const App: React.FC = () => {
  return (
    <SearchProvider>
      <Router>
        <Routes>
          <Route path="/" element={<AppLayout />}>
            <Route index element={<Home />} />
            <Route path="my-list" element={<MyList />} />
          </Route>
        </Routes>
      </Router>
    </SearchProvider>
  );
};

export default App;
