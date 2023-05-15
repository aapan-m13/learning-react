import React, { useContext } from "react";
import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const noOfItems = cartCtx.items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  return (
    <button className={styles["button"]} onClick={props.onClick}>
      <span className={styles["icon"]}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles["badge"]}>{noOfItems}</span>
    </button>
  );
}
