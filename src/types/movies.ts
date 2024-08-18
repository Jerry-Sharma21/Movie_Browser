export interface Movie {
  id: string;
  backdrop_path: string;
  adult: boolean;
  poster_path: string;
  release_date: string;
  title: string;
  vote_count: number;
  vote_average: number;
  genre_ids: number[];
  overview: string;
}

export interface Genre {
  id: number;
  name: string;
}
