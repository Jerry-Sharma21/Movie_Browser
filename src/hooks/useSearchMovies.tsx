import { useState, useEffect, useCallback } from 'react';
import API from './config';
import { Movie } from '../types/movies';
import { useSearch } from '../context/SearchContext';

const useSearchMovies = () => {
  const { searchQuery } = useSearch();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchMovies = useCallback(async () => {
    if (!searchQuery) {
      setMovies([]); // Clear movies if no search query
      return;
    }

    setLoading(true);
    try {
      const response = await API.get('/search/movie', {
        params: {
          query: searchQuery,
        },
      });
      setMovies(response.data.results);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [searchQuery]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  return { movies, loading, error };
};

export default useSearchMovies;
