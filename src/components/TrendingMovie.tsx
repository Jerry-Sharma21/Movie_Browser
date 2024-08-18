import React from 'react';
import useTrendingMovie from '../hooks/useTrendingMovie';

const TrendingMovie: React.FC = () => {
  const { movie, loading, error } = useTrendingMovie();

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="relative w-full h-[calc(90vh-70px)]">
      {movie ? (
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
            alt={movie.title}
            className="w-full h-full object-fill"
          />
          <div className="absolute inset-0 flex items-center p-6 text-white bg-gradient-to-r from-black/80 via-transparent to-transparent">
            <div className="w-[50%]  md:w-[30%] overflow-hidden">
              <h1 className="text-4xl font-bold mb-4">{movie.title}</h1>
              <p className="text-lg mb-2">{movie.release_date}</p>
              <p className="text-lg text-ellipsis">{movie.overview}</p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/50 to-transparent blur-sm shadow-2xl transform translate-y-4 scale-105"></div>
        </div>
      ) : (
        <p>No movie found</p>
      )}
    </div>
  );
};

export default TrendingMovie;
