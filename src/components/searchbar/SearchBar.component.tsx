import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "./SearchBar.component.module.css";
import { searchMovie } from "../../redux/movies/ActionCreator";
import { SEARCH_MOVIE, SEARCH, MOVIE_OPTIONS } from "../../constants";

const SearchBar: React.FC = () => {
  const [searchInput, setSearchInput] = useState("");
  const [selectedMovieType, setSelectedMovieType] = useState("ALL");
  const { MOVIES, SERIES, EPISODES, ALL } = MOVIE_OPTIONS;

  const dispatch = useDispatch();

  const handleButtonClick = () => {
    dispatch(searchMovie(searchInput, selectedMovieType));
    setSearchInput("");
  };
  return (
    <div className={styles.searchContainer}>
      <div className={styles.searchInputContainer}>
        <input
          type="text"
          value={searchInput}
          placeholder={SEARCH_MOVIE}
          onChange={(e) => setSearchInput(e.target.value)}
          className={styles.searchInput}
        />
        <select
          className={styles.searchInputButton}
          onChange={(e) => setSelectedMovieType(e.target.value)}
          value={selectedMovieType}
        >
          <option value="ALL" selected>
            {ALL}
          </option>
          <option value="movie">{MOVIES}</option>
          <option value="series">{SERIES}</option>
          <option value="episode">{EPISODES}</option>
        </select>
      </div>
      <button className={styles.searchButton} onClick={handleButtonClick}>
        {SEARCH}
      </button>
    </div>
  );
};

export default SearchBar;
