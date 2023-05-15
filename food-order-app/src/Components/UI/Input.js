import React from "react";
import styles from "./Input.module.css";
export default React.forwardRef(function Input(props, ref) {
  return (
    <div className={styles["input"]}>
      <label htmlFor={props.input.id}>{props.label}</label>
      <input {...props.input} ref={ref}></input>
    </div>
  );
});
