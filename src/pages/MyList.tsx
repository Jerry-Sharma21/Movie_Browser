import React, { useState, useEffect } from 'react';
import { Movie } from '../types/movies'; // Adjust the import path as needed
import MovieCard from '../components/MovieCard'; // Adjust the import path as needed

const MyList: React.FC = () => {
  const [myList, setMyList] = useState<Movie[]>([]);

  useEffect(() => {
    // Retrieve the list from local storage
    const savedList = JSON.parse(localStorage.getItem('myList') || '[]');
    setMyList(savedList);
  }, []);

  return (
    <div className="p-4 mt-16">
      {myList.length === 0 ? (
        <p className="text-gray-500">Your list is empty.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <MovieCard movies={myList} />
        </div>
      )}
    </div>
  );
};

export default MyList;
