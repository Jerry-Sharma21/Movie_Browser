import { useState, useEffect } from 'react';

import API from './config';
import { Movie } from '@/types/movies';

const useTrendingMovie = () => {
  const [movie, setMovie] = useState<Movie>();

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        setIsLoading(true);
        const response = await API.get('/trending/movie/day');
        const movies = response.data.results;

        if (movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          setMovie(movies[randomIndex]);
        } else {
          setIsError('No trending movies available');
        }
      } catch (err) {
        if (err instanceof Error) {
          setIsError(err.message);
        } else {
          setIsError('An unknown error occurred');
        }
      } finally {
        setIsLoading(false);
      }
    };

    fetchRandomMovie();
  }, []);

  return { movie, isLoading, isError };
};

export default useTrendingMovie;
