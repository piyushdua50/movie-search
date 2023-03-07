import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { IMovieProps } from "./interfaces";
import { addFavorite, removeFavorite } from "../../redux/movies/ActionCreator";
import styles from "./Movie.component.module.css";
import { FAVORITE, UNFAVORITE, YEAR, TYPE } from "../../constants";

const Movie: React.FC<IMovieProps> = (props) => {
  const { Title, Year, imdbID, Type, Poster, isFavorite } = props.movie;
  const [markFavorite, setMarkFavorite] = useState(isFavorite);
  const dispatch = useDispatch();
  const handleFavoriteClick = () => {
    setMarkFavorite((prevFavoriteState) => !prevFavoriteState);
    isFavorite
      ? dispatch(removeFavorite(props.movie))
      : dispatch(addFavorite(props.movie));
  };
  return (
    <div className={styles.movieContainer} key={imdbID}>
      <img className={styles.imgContainer} src={Poster} alt={Title} />
      <span className={styles.movieNameContainer}>{Title}</span>
      <div className={styles.movieInfoContainer}>
        <span className={styles.movieInfo}>
          {YEAR}: {Year}
        </span>
        <span className={styles.movieInfo}>
          {TYPE}: {Type}
        </span>
      </div>
      <div
        className={styles.movieFavoriteInfo}
        role="button"
        onClick={handleFavoriteClick}
      >
        {markFavorite ? UNFAVORITE : FAVORITE}
      </div>
    </div>
  );
};

export default Movie;
