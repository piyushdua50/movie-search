import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header.component";
import MovieList from "../../components/movieList/MovieList.component";
import styles from "./FavoriteMovies.component.module.css";

const FavoriteMovies: React.FC = () => {
  const movies = useSelector((state: any) => state.movies.favoriteMovies);
  return (
    <div className={styles.favoriteContainer}>
      <Header />
      <MovieList movieList={movies} />
    </div>
  );
};

export default FavoriteMovies;
