import { useState, useEffect } from 'react';
import API from './config';
import { Movie } from '../types/movies';

const useTrendingMovie = () => {
  const [movie, setMovie] = useState<Movie | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRandomMovie = async () => {
      try {
        setLoading(true);
        const response = await API.get('/trending/movie/day');
        const movies = response.data.results;

        if (movies.length > 0) {
          const randomIndex = Math.floor(Math.random() * movies.length);
          setMovie(movies[randomIndex]);
        } else {
          setError('No trending movies available');
        }
      } catch (err) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchRandomMovie();
  }, []);

  return { movie, loading, error };
};

export default useTrendingMovie;
