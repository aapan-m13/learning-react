import React from "react";
import ReactDOM from "react-dom";
import Button from "../Button/Button";
import Card from "../Card/Card";
import styles from "./ErrorModal.module.css";

export default function ErrorModal(props) {
  const Backdrop = (props) => {
    return <div className={styles["backdrop"]} onClick={actionHandler}></div>;
  };

  const Overlay = (props) => {
    return (
      <Card className={styles["modal"]}>
        <header className={styles["header"]}>
          <h2>{props.data.title}</h2>
        </header>
        <div className={styles["content"]}>
          <p>{props.data.message}</p>
        </div>
        <footer className={styles["actions"]}>
          <Button onClick={actionHandler}>Okay</Button>
        </footer>
      </Card>
    );
  };

  const actionHandler = () => {
    props.stateHandler();
  };

  return (
    <React.Fragment>
      {ReactDOM.createPortal(
        <Backdrop></Backdrop>,
        document.getElementById("modal-backdrop")
      )}
      {ReactDOM.createPortal(
        <Overlay data={props}></Overlay>,
        document.getElementById("modal-overlay")
      )}
    </React.Fragment>
  );
}
