import React, { useContext, useEffect, useState } from "react";
import CartIcon from "../../Cart/CartIcon";
import styles from "./HeaderCartButton.module.css";
import CartContext from "../../store/cart-context";

export default function HeaderCartButton(props) {
  const cartCtx = useContext(CartContext);

  const [isBtnHighlighted, setIsBtnHighlighted] = useState(false);

  const { items } = cartCtx;

  const noOfItems = items.reduce((curr, item) => {
    return curr + item.amount;
  }, 0);

  useEffect(() => {
    if (noOfItems === 0) return;

    setIsBtnHighlighted(true);

    const clearBtnClass = setTimeout(() => {
      setIsBtnHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(clearBtnClass);
    };
  }, [noOfItems]);

  const buttonHighlightedClass = isBtnHighlighted ? styles["bump"] : "";

  return (
    <button
      className={`${styles["button"]} ${buttonHighlightedClass}`}
      onClick={props.onClick}
    >
      <span className={styles["icon"]}>
        <CartIcon></CartIcon>
      </span>
      <span>Your Cart</span>
      <span className={styles["badge"]}>{noOfItems}</span>
    </button>
  );
}
