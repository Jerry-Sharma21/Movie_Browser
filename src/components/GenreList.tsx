import React, { useState } from 'react';
import useGenres from '../hooks/useGenre';

const GenreList: React.FC<{ onGenreSelect: (genreId: number) => void }> = ({ onGenreSelect }) => {
  const { genres, loading, error } = useGenres();
  const [selectedGenre, setSelectedGenre] = useState<number | null>(null);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  const handleGenreClick = (genreId: number) => {
    setSelectedGenre(genreId);
    onGenreSelect(genreId);
  };

  return (
    <div className="flex space-x-4 overflow-x-auto p-4 scrollbar-hidden">
      {genres.map(genre => (
        <button
          key={genre.id}
          onClick={() => {
            handleGenreClick(genre.id);
          }}
          className={`px-4 h-9 min-w-[120px] border border-gray-400 rounded-full text-gray-700 hover:bg-gray-200 transition-colors duration-200 ease-in-out flex items-center justify-center overflow-hidden whitespace-nowrap ${
            selectedGenre === genre.id ? 'bg-gray-300' : ''
          }`}
        >
          {genre.name}
        </button>
      ))}
    </div>
  );
};

export default GenreList;
