export interface IMovieList {
  movies: Array<IMovie>;
  favoriteMovies: Array<IMovie>;
}

export interface IMovie {
  Title: string;
  Year: string;
  imdbID: string;
  Type: string;
  Poster: string;
  isFavorite?: boolean;
}

export type MOVIE_LIST_ACTIONS =
  | {
      type: string;
      payload: {
        movies: Array<IMovie>;
      };
    }
  | {
      type: string;
      payload: {
        movie: IMovie;
      };
    }
  | {
      type: string;
      payload: {
        movie: IMovie;
      };
    };

export interface IMovieSearch {
  (search: string, type?: string): any;
}

export interface IAddFavoriteMovie {
  (movie: IMovie): MOVIE_LIST_ACTIONS;
}

export interface IRemoveFavoriteMovie {
  (movieId: IMovie): MOVIE_LIST_ACTIONS;
}
