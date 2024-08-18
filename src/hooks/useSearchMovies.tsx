import { useState, useEffect, useCallback } from 'react';

import API from './config';
import { Movie } from '@/types/movies';
import { useSearch } from '@/context/SearchContext';

const useSearchMovies = () => {
  const { searchQuery } = useSearch();

  const [movies, setMovies] = useState<Movie[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    if (!searchQuery) {
      setMovies([]);
      return;
    }

    setIsLoading(true);
    try {
      const response = await API.get('/search/movie', {
        params: {
          query: searchQuery,
        },
      });
      setMovies(response.data.results);
    } catch (err) {
      setIsError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { movies, isLoading, isError };
};

export default useSearchMovies;
