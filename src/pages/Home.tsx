import React from 'react';
import TrendingMovie from '../components/TrendingMovie';
import MovieList from '../components/MovieList';

const Home: React.FC = () => {
  return (
    <main className="p-4" aria-labelledby="home-title">
      <h1 id="home-title" className="sr-only">
        Home - Movie Browser
      </h1>
      <section aria-labelledby="trending-movie-section">
        <h2 id="trending-movie-section" className="text-2xl font-bold mb-4">
          Trending Movie
        </h2>
        <TrendingMovie />
      </section>
      <section aria-labelledby="movie-list-section">
        <h2 id="movie-list-section" className="text-2xl font-bold mt-6 mb-4">
          Movie List
        </h2>
        <MovieList />
      </section>
    </main>
  );
};

export default Home;
