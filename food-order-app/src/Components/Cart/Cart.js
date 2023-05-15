import React, { useContext } from "react";
import styles from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartContext from "../store/cart-context";

export default function Cart(props) {
  const cartCtx = useContext(CartContext);

  console.log(cartCtx.totalAmount);

  const cartItems = cartCtx.items.map((item) => {
    console.log(item);
    return (
      <ul className={styles["cart-items"]} key={item.id}>
        <div>{item.item}</div>
        <div>
          {item.price}
          <span>+</span>
          <span>-</span>
        </div>
      </ul>
    );
  });

  return (
    <Modal backdropClick={props.closeCart}>
      {cartItems}
      <div className={styles["total"]}>
        <span>Total Amount:</span>
        <span>{`$${cartCtx.totalAmount}`}</span>
      </div>
      <div className={styles["actions"]}>
        <button className={styles["button--alt"]} onClick={props.closeCart}>
          close
        </button>
        {cartCtx.items.length > 0 && (
          <button className={styles["button"]}>Order</button>
        )}
      </div>
    </Modal>
  );
}
