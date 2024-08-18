import React, { useState } from 'react';

import GenreList from '@/components/GenreList';
import MovieCard from '@/components/MovieCard';
import QueryStateWrapper from '@/components/QueryStateWrapper';
import useSearchMovies from '@/hooks/useSearchMovies';
import useMovies from '@/hooks/useMovies';
import { useSearch } from '@/context/SearchContext';

const MovieList: React.FC = () => {
  const [genreId, setGenreId] = useState<number | null>(null);

  const { movies: genreMovies, isLoading: genreLoading, isError: genreError } = useMovies(genreId);
  const { movies: searchMovies, isLoading: searchLoading, isError: searchError } = useSearchMovies();

  const { searchQuery } = useSearch();

  const movies = searchQuery ? searchMovies : genreMovies;
  const loading = searchQuery ? searchLoading : genreLoading;
  const error = searchQuery ? searchError : genreError;
  const isEmpty = movies.length === 0;

  const LoadingState = <p className="text-center text-gray-500">Loading more movies...</p>;

  const ErrorState = <p className="text-red-500 text-center">Error: {error}</p>;

  const EmptyState = <p className="text-center text-gray-500">No movies found.</p>;

  return (
    <div className="flex flex-col h-full">
      <GenreList onGenreSelect={setGenreId} />

      <div className="flex-1 overflow-y-auto p-4">
        <QueryStateWrapper
          isLoading={loading}
          isError={!!error}
          isEmpty={isEmpty}
          loading={LoadingState}
          error={ErrorState}
          empty={EmptyState}
        >
          <section aria-labelledby="movie-list-title">
            <h2 id="movie-list-title" className="sr-only">
              Movie List
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
              <MovieCard movies={movies} />
            </div>
          </section>
        </QueryStateWrapper>
      </div>
    </div>
  );
};

export default MovieList;
