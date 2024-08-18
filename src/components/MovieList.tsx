import React, { useState } from 'react';
import useMovies from '../hooks/useMovies';
import useSearchMovies from '../hooks/useSearchMovies';
import GenreList from './GenreList';
import { useSearch } from '../context/SearchContext';
import MovieCard from './MovieCard';

const MovieList: React.FC = () => {
  const { searchQuery } = useSearch();
  const [genreId, setGenreId] = useState<number | null>(null);

  const { movies: genreMovies, loading: genreLoading, error: genreError } = useMovies(genreId);
  const { movies: searchMovies, loading: searchLoading, error: searchError } = useSearchMovies();

  const movies = searchQuery ? searchMovies : genreMovies;
  const loading = searchQuery ? searchLoading : genreLoading;
  const error = searchQuery ? searchError : genreError;

  if (error) return <p className="text-red-500 text-center">Error: {error}</p>;

  return (
    <div className="flex flex-col h-full">
      <GenreList onGenreSelect={setGenreId} />
      <div className="flex-1 overflow-y-auto p-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          <MovieCard movies={movies} />
        </div>
        {loading && <p className="text-center text-gray-500">Loading more movies...</p>}
      </div>
    </div>
  );
};

export default MovieList;
