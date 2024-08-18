import React, { useState, useEffect } from 'react';
import { X, CirclePlus, CircleMinus } from 'lucide-react';

import { Movie } from '@/types/movies';

interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}

const MovieModal: React.FC<MovieModalProps> = ({ movie, onClose }) => {
  const [isInMyList, setIsInMyList] = useState<boolean>(false);

  useEffect(() => {
    const myList = JSON.parse(localStorage.getItem('myList') || '[]');
    setIsInMyList(myList.some((favMovie: Movie) => favMovie.id === movie.id));
  }, [movie]);

  const handleToggleFavorite = () => {
    let myList = JSON.parse(localStorage.getItem('myList') || '[]');

    if (isInMyList) {
      myList = myList.filter((favMovie: Movie) => favMovie.id !== movie.id);
    } else {
      myList.push(movie);
    }

    localStorage.setItem('myList', JSON.stringify(myList));
    setIsInMyList(!isInMyList);
  };

  useEffect(() => {
    const focusableElements = 'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])';
    const firstFocusableElement = document.querySelector(focusableElements) as HTMLElement;
    if (firstFocusableElement) {
      firstFocusableElement.focus();
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, []);

  return (
    <div
      className="fixed inset-0 flex items-center justify-center z-50 bg-gray-900 bg-opacity-75"
      role="dialog"
      aria-labelledby="movie-modal-title"
      aria-modal="true"
    >
      <div className="bg-gray-800 text-white rounded-lg shadow-lg w-11/12 md:w-1/2 lg:w-1/3 relative">
        <button className="absolute top-2 right-2 text-gray-400 hover:text-white" onClick={onClose} aria-label="Close modal">
          <X className="h-6 w-6" />
        </button>
        <img
          src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
          alt={`Poster of ${movie.title}`}
          className="w-full h-64 object-fill rounded-t-lg"
        />
        <div className="p-4">
          <div className="flex justify-between">
            <h2 id="movie-modal-title" className="text-2xl font-bold">
              {movie.title}
            </h2>
            <button onClick={handleToggleFavorite} aria-label={isInMyList ? 'Remove from favorites' : 'Add to favorites'}>
              {isInMyList ? <CircleMinus className="h-6 w-6 text-red-500" /> : <CirclePlus className="h-6 w-6 text-gray-400" />}
            </button>
          </div>
          <p>TMDB Rating: {movie.vote_average}</p>
          <p className="text-gray-400 text-sm">{movie.release_date}</p>
          <p className="mt-2">{movie.overview}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
