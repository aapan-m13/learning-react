import React from "react";
import mealsImage from "../../assets/meals.jpg";
import styles from "./Header.module.css";
export default function Header(props) {
  return (
    <React.Fragment>
      <header className={styles["header"]}>
        <h1>Meals</h1>
        <button>Cart</button>
      </header>
      <div className={styles["main-image"]}>
        <img src={mealsImage} alt="header" />
      </div>
    </React.Fragment>
  );
}
