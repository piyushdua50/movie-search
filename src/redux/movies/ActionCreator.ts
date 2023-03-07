import {
  IMovieSearch,
  IAddFavoriteMovie,
  IRemoveFavoriteMovie,
  IMovie,
} from "./interfaces";
import { OMDB_SERVICE, API_KEY } from "../../configs/commons";
import { SEARCH, ADD_FAVORITE, REMOVE_FAVORITE } from "./ActionTypes";

export const searchMovie: IMovieSearch = (search: string, type?: string) => {
  return async function (dispatch: any) {
    try {
      let url = `${OMDB_SERVICE}?s=${search}&apikey=${API_KEY}`;
      if (type !== "ALL") {
        url = `${url}&type=${type}`;
      }
      const response = await fetch(url);
      const data = await response.json();
      dispatch({
        type: SEARCH,
        payload: { movies: data.Search },
      });
    } catch (e) {
      dispatch({
        type: SEARCH,
        payload: { movies: [] },
      });
    }
  };
};

export const addFavorite: IAddFavoriteMovie = (movie: IMovie) => {
  return {
    type: ADD_FAVORITE,
    payload: { movie },
  };
};

export const removeFavorite: IRemoveFavoriteMovie = (movie: IMovie) => {
  return {
    type: REMOVE_FAVORITE,
    payload: { movie },
  };
};
