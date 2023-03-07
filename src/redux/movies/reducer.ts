import { IMovie, IMovieList } from "./interfaces";
import { SEARCH, ADD_FAVORITE, REMOVE_FAVORITE } from "./ActionTypes";

const initialState: IMovieList = {
  movies: [
    {
      Title: "Kuch Kuch Hota Hai",
      Year: "1998",
      imdbID: "tt0172684",
      Type: "movie",
      isFavorite: false,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNGNhNWMwNTgtZmNlOS00OGM3LWIxYzItOWQwZDJjMzQ3MzRlXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Title: "Kuch Rang Pyar Ke Aise Bhi",
      Year: "2016–2021",
      imdbID: "tt5697728",
      Type: "series",
      isFavorite: true,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDZjNjdmM2YtNWM1Ni00MjRhLThjYTYtMjYxMWMwZTk5NWE3XkEyXkFqcGdeQXVyNjIyMjY4OTU@._V1_SX300.jpg",
    },
    {
      Title: "Kuch Naa Kaho",
      Year: "2003",
      imdbID: "tt0369637",
      Type: "movie",
      isFavorite: true,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDc5YmZjMmMtNzE5Ny00MDg5LThmOTQtYmQ1NzcwNmFjMDBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
    {
      Title: "Maddam Sir - Kuch Baat Hai Kyunki Jaazbaat Hai",
      Year: "2020–2023",
      imdbID: "tt11867650",
      Type: "series",
      isFavorite: false,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BYWMwMTM1Y2UtNDJmNS00OTAxLWJhODMtMjlkNjRmNjE5ODE2XkEyXkFqcGdeQXVyMTMwNjA1NDIx._V1_SX300.jpg",
    },
  ],
  favoriteMovies: [
    {
      Title: "Kuch Rang Pyar Ke Aise Bhi",
      Year: "2016–2021",
      imdbID: "tt5697728",
      Type: "series",
      isFavorite: true,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BZDZjNjdmM2YtNWM1Ni00MjRhLThjYTYtMjYxMWMwZTk5NWE3XkEyXkFqcGdeQXVyNjIyMjY4OTU@._V1_SX300.jpg",
    },
    {
      Title: "Kuch Naa Kaho",
      Year: "2003",
      imdbID: "tt0369637",
      Type: "movie",
      isFavorite: true,
      Poster:
        "https://m.media-amazon.com/images/M/MV5BNDc5YmZjMmMtNzE5Ny00MDg5LThmOTQtYmQ1NzcwNmFjMDBhXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg",
    },
  ],
};

const moviesReducer = (state: any = initialState, action: any) => {
  switch (action.type) {
    case SEARCH:
      const movies = action.payload.movies;
      const transformedMovies = movies.map((movie: IMovie) => {
        return { ...movie, isFavorite: false };
      });
      return { ...state, movies: transformedMovies };

    case ADD_FAVORITE:
      const newMovie = action.payload.movie;
      const allMovies = state.movies;
      for (let i = 0; i < allMovies.length; i++) {
        if (allMovies[i].Title === newMovie.Title) {
          allMovies[i].isFavorite = true;
          newMovie.isFavorite = true;
          break;
        }
      }
      return { ...state, ...state.favoriteMovies.push(newMovie) };

    case REMOVE_FAVORITE:
      const movieToRemove = action.payload.movie;
      movieToRemove.isFavorite = false;
      const filteredFavoriteMovies = state.favoriteMovies.filter(
        (movie: IMovie) => movie.Title !== movieToRemove.Title
      );
      return { ...state, favoriteMovies: filteredFavoriteMovies };

    default:
      return state;
  }
};

export default moviesReducer;
