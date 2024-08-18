import React, { useState } from 'react';
import { Movie } from '../types/movies';
import MovieModal from './MovieModal';

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
        <div
          key={movie.id}
          className="bg-gray-900 rounded-lg shadow-lg overflow-hidden cursor-pointer"
          onClick={() => handleMovieClick(movie)}
        >
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-64 object-cover"
          />
          <div className="p-4">
            <h3 className="text-xl font-bold text-white truncate">{movie.title}</h3>
            <p className="text-gray-400 text-sm">{movie.release_date}</p>
          </div>
        </div>
      ))}
      {selectedMovie && <MovieModal movie={selectedMovie} onClose={handleCloseModal} />}
    </>
  );
};

export default MovieCard;
