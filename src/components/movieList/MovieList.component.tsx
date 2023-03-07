import React from "react";
import styles from "./MovieList.component.module.css";
import { IMovieListProps } from "./interfaces";
import { IMovie } from "../movie/interfaces";
import Movie from "../movie/Movie.component";
import { SEARCH_FOR_ANOTHER_MOVIE, NO_MOVIE_FOUND } from "../../constants";

const MovieList: React.FC<IMovieListProps> = (props) => {
  const { movieList } = props;
  return (
    <div className={styles.movieListContainer}>
      {movieList && movieList?.length ? (
        movieList?.map((movie: IMovie, index: number) => {
          return <Movie key={index} movie={movie} />;
        })
      ) : (
        <div className={styles.errorContainer}>
          <h4 className={styles.errorMessage}>{NO_MOVIE_FOUND}</h4>
          <h4>{SEARCH_FOR_ANOTHER_MOVIE}</h4>
        </div>
      )}
    </div>
  );
};

export default MovieList;
