import React from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";

export default function Cart(props) {
  const cartItems = [{ id: "c1", name: "Sushi", amount: 2, price: 12.99 }].map(
    (item) => {
      return (
        <ul className={styles["cart-items"]}>
          <li>{item.name}</li>
        </ul>
      );
    }
  );
  return (
    <Modal backdropClick={props.closeCart}>
      {cartItems}
      <div className={styles["total"]}>
        <span>Total Amount:</span>
        <span>35.62</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["button--alt"]} onClick={props.closeCart}>
          close
        </button>
        <button className={styles["button"]}>Order</button>
      </div>
    </Modal>
  );
}
