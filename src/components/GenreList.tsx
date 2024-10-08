import React, { useState } from 'react';

import QueryStateWrapper from '@/components/QueryStateWrapper';
import useGenres from '@/hooks/useGenre';

interface GenreListProps {
  onGenreSelect: (genreId: number) => void;
}

const GenreList: React.FC<GenreListProps> = props => {
  const { onGenreSelect } = props;

  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  const { genres, isLoading, isError } = useGenres();

  const handleGenreClick = (genreId: number) => {
    setSelectedGenre(genreId);
    onGenreSelect(genreId);
  };

  const LoadingState = (
    <p role="status" className="text-center text-gray-500">
      Loading genres...
    </p>
  );
  const ErrorState = (
    <p role="alert" className="text-red-500 text-center">
      Error: {isError}
    </p>
  );
  const EmptyState = (
    <p role="status" className="text-center text-gray-500">
      No genres available.
    </p>
  );

  return (
    <QueryStateWrapper
      isLoading={isLoading}
      isError={!!isError}
      isEmpty={genres.length === 0}
      loading={LoadingState}
      error={ErrorState}
      empty={EmptyState}
    >
      <div className="flex space-x-4 overflow-x-auto p-4 scrollbar-hidden" aria-label="Genre List">
        {genres.map(genre => (
          <button
            key={genre.id}
            onClick={() => handleGenreClick(genre.id)}
            className={`px-4 h-9 min-w-[120px] border border-gray-400 rounded-full text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200 ease-in-out flex items-center justify-center overflow-hidden whitespace-nowrap ${
              selectedGenre === genre.id ? 'bg-gray-300 dark:bg-gray-700' : ''
            }`}
            aria-pressed={selectedGenre === genre.id}
            aria-label={`Select ${genre.name} genre`}
          >
            {genre.name}
          </button>
        ))}
      </div>
    </QueryStateWrapper>
  );
};

export default GenreList;
