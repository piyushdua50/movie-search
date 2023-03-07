import React from "react";
import { useNavigate } from "react-router-dom";
import { HOME, FAVORITES } from "../../constants";
import styles from "./Header.component.module.css";

const Header: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className={styles.headerContainer}>
      <h1 className={styles.headerTitle} onClick={() => navigate("/")}>
        {HOME}
      </h1>
      <h1 className={styles.headerTitle} onClick={() => navigate("/favorite")}>
        {FAVORITES}
      </h1>
    </div>
  );
};

export default Header;
