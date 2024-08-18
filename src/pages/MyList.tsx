import React, { useState, useEffect } from 'react';
import { Movie } from '../types/movies'; // Adjust the import path as needed
import MovieCard from '../components/MovieCard'; // Adjust the import path as needed

const MyList: React.FC = () => {
  const [myList, setMyList] = useState<Movie[]>([]);

  useEffect(() => {
    const savedList = JSON.parse(localStorage.getItem('myList') || '[]');
    setMyList(savedList);
  }, []);

  return (
    <main className="p-4 mt-16" aria-labelledby="my-list-title">
      <h1 id="my-list-title" className="text-2xl font-bold mb-4">
        My List
      </h1>
      {myList.length === 0 ? (
        <p className="text-gray-500">Your list is empty.</p>
      ) : (
        <section
          aria-labelledby="my-list-content"
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6"
        >
          <h2 id="my-list-content" className="sr-only">
            My List Movies
          </h2>
          <MovieCard movies={myList} />
        </section>
      )}
    </main>
  );
};

export default MyList;
