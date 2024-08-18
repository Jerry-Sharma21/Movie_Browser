import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';

import { useSearch } from '@/context/SearchContext';

const DEBOUNCE_DELAY = 300;

const SearchBar: React.FC = () => {
  const [searchExpanded, setSearchExpanded] = useState(false);
  const [query, setQuery] = useState('');
  const { setSearchQuery } = useSearch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(query);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(handler);
  }, [query, setSearchQuery]);

  const handleSearchClick = () => {
    setSearchExpanded(!searchExpanded);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  const handleInputBlur = () => {
    setSearchExpanded(false);
  };

  return (
    <div className="relative">
      {searchExpanded ? (
        <input
          className="p-2 border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md w-40"
          type="text"
          placeholder="Search..."
          autoFocus
          value={query}
          onChange={handleInputChange}
          onBlur={handleInputBlur}
          aria-label="Search Movies"
        />
      ) : (
        <button
          className="text-gray-700 dark:text-gray-300 focus:outline-none"
          onClick={handleSearchClick}
          aria-label="Toggle Search"
        >
          <Search size={24} />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
