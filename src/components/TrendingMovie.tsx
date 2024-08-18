import React from 'react';

import QueryStateWrapper from '@/components/QueryStateWrapper';
import useTrendingMovie from '@/hooks/useTrendingMovie';

const TrendingMovie: React.FC = () => {
  const { movie, loading, error } = useTrendingMovie();

  const LoadingState = (
    <p className="text-center text-gray-500" role="status">
      Loading...
    </p>
  );
  const ErrorState = (
    <p className="text-center text-red-500" role="alert">
      Error: {error}
    </p>
  );
  const EmptyState = (
    <p className="text-center text-gray-500" role="status">
      No movie found
    </p>
  );

  return (
    <QueryStateWrapper
      isLoading={loading}
      isError={!!error}
      isEmpty={!movie}
      loading={LoadingState}
      error={ErrorState}
      empty={EmptyState}
    >
      <section className="relative w-full h-[calc(90vh-70px)]" aria-labelledby="trending-movie-title" aria-live="polite">
        <h2 id="trending-movie-title" className="sr-only">
          Trending Movie
        </h2>
        <div className="relative w-full h-full overflow-hidden">
          <img
            src={`https://image.tmdb.org/t/p/w500${movie?.poster_path}`}
            alt={`Poster for ${movie?.title}`}
            className="w-full h-full object-cover"
            role="img"
          />
          <div className="absolute inset-0 flex items-center p-6 text-white bg-gradient-to-r from-black/80 via-transparent to-transparent">
            <div className="w-[50%] md:w-[30%] overflow-hidden">
              <h3 className="text-4xl font-bold mb-4">{movie?.title}</h3>
              <p className="text-lg mb-2">{movie?.release_date}</p>
              <p className="text-lg text-ellipsis">{movie?.overview}</p>
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-black/80 via-black/50 to-transparent blur-sm shadow-2xl transform translate-y-4 scale-105"></div>
        </div>
      </section>
    </QueryStateWrapper>
  );
};

export default TrendingMovie;
