import React, { useState } from 'react';

import MovieModal from '@/components/MovieModal';
import { Movie } from '@/types/movies';

interface IMovieCardProps {
  movies: Movie[];
}

const MovieCard: React.FC<IMovieCardProps> = ({ movies }) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleMovieClick = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleCloseModal = () => {
    setSelectedMovie(null);
  };

  return (
    <>
      {movies.map((movie: Movie) => (
        <article
          key={movie.id}
          className="bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleMovieClick(movie)}
          role="button"
          tabIndex={0} // Ensure the article is focusable
          aria-label={`View details for ${movie.title}`}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={`Poster of ${movie.title}`}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h2 className="text-xl font-bold text-white truncate">{movie.title}</h2>
            <p className="text-gray-400 text-sm">{movie.release_date}</p>
          </div>
        </article>
      ))}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </>
  );
};

export default MovieCard;
