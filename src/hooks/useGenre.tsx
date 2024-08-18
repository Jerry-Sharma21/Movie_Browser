import { useState, useEffect } from 'react';

import API from './config';
import { Genre } from '@/types/movies';

const useGenres = () => {
  const [genres, setGenres] = useState<Genre[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  const [isError, setIsError] = useState<string | null>(null);

  useEffect(() => {
    const fetchGenres = async () => {
      try {
        setIsLoading(true);
        const response = await API.get('/genre/movie/list');
        setGenres(response.data.genres);
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

    fetchGenres();
  }, []);

  return { genres, isLoading, isError };
};

export default useGenres;
