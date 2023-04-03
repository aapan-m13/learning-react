import React from "react";
import styles from "./Button.module.css";
export default function Button(props) {
  return (
    <button
      className={styles["button"]}
      type={props.type ? props.type : "button"}
      onClick={props.onClick ? props.onClick : null}
    >
      {props.children}
    </button>
  );
}
