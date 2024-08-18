import React, { useState, useEffect, ChangeEvent } from 'react';

import { useSearch } from '@/context/SearchContext';

const DEBOUNCE_DELAY = 300;

const SearchBar: React.FC = () => {
  const [query, setQuery] = useState('');

  const { setSearchQuery } = useSearch();

  useEffect(() => {
    const handler = setTimeout(() => {
      setSearchQuery(query);
    }, DEBOUNCE_DELAY);

    return () => clearTimeout(handler);
  }, [query, setSearchQuery]);

  const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <div className="px-4 mt-5 flex justify-end w-full max-w-md">
      <input
        className={`w-full p-2 border rounded-3xl focus:outline-gray-300 dark:bg-gray-600 text-black dark:text-white`}
        type="text"
        placeholder="Search..."
        autoFocus
        value={query}
        onChange={handleInputChange}
        aria-label="Search Movies"
      />
    </div>
  );
};

export default SearchBar;
