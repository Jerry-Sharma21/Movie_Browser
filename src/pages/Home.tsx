import React from 'react';
import TrendingMovie from '../components/TrendingMovie';
import MovieList from '../components/MovieList';

const Home: React.FC = () => {
  return (
    <div>
      <TrendingMovie />
      <MovieList />
    </div>
  );
};

export default Home;
