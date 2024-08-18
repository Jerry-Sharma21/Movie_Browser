import { useState, useEffect, useCallback } from 'react';

import API from './config';
import { Movie } from '@/types/movies';

const useMovies = (genreId: number | null) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState<string | null>(null);

  const [page, setPage] = useState(1);

  const fetchMovies = useCallback(async () => {
    setIsLoading(true);
    try {
      const response = await API.get('/discover/movie', {
        params: {
          page,
          with_genres: genreId || undefined,
        },
      });
      setMovies(prevMovies => [...prevMovies, ...response.data.results]);
    } catch (err) {
      setIsError(err instanceof Error ? err.message : 'An unknown error occurred');
    } finally {
      setIsLoading(false);
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

  return { movies, isLoading, isError };
};

export default useMovies;
