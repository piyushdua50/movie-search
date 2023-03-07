import React from "react";
import { useSelector } from "react-redux";
import Header from "../../components/header/Header.component";
import MovieList from "../../components/movieList/MovieList.component";
import SearchBar from "../../components/searchbar/SearchBar.component";
import styles from "./Home.component.module.css";

const Home: React.FC = () => {
  const movies = useSelector((state: any) => state.movies.movies);
  return (
    <div className={styles.homeContainer}>
      <Header />
      <SearchBar />
      <MovieList movieList={movies} />
    </div>
  );
};

export default Home;
