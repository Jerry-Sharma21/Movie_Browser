import React from 'react';

import MovieList from '@/components/MovieList';
import SearchBar from '@/components/SearchBar';
import TrendingMovie from '@/components/TrendingMovie';

const Home: React.FC = () => {
  return (
    <main className="" aria-labelledby="home-title">
      <section aria-labelledby="trending-movie-section">
        <TrendingMovie />
      </section>
      <section aria-labelledby="search-movie-section">
        <SearchBar />
      </section>
      <section aria-labelledby="movie-list-section">
        <MovieList />
      </section>
    </main>
  );
};

export default Home;
