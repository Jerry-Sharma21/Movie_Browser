import { useState, useEffect, useCallback } from 'react';

import API from './config';
import { Movie } from '@/types/movies';

const useMovies = (genreId: number | null) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const fetchMovies = useCallback(async () => {
    setLoading(true);
    try {
      const response = await API.get('/discover/movie', {
        params: {
          page,
          with_genres: genreId || undefined,
        },
      });
      setMovies(prevMovies => [...prevMovies, ...response.data.results]);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setLoading(false);
    }
  }, [page, genreId]);

  useEffect(() => {
    setMovies([]);
    setPage(1);
  }, [genreId]);

  useEffect(() => {
    fetchMovies();
  }, [fetchMovies]);

  const loadMoreMovies = useCallback(() => {
    if (window.innerHeight + window.scrollY >= document.documentElement.scrollHeight - 100) {
      setPage(prevPage => prevPage + 1);
    }
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', loadMoreMovies);
    return () => window.removeEventListener('scroll', loadMoreMovies);
  }, [loadMoreMovies]);

  return { movies, loading, error };
};

export default useMovies;
