import React, { useContext } from "react";
import styles from "./MealItem.module.css";
import MealItemForm from "../MealItemForm/MealItemForm";
import CartContext from "../../store/cart-context";

export default function MealItem(props) {
  const cartCtx = useContext(CartContext);

  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    const cartData = {
      id: props.id,
      item: props.name,
      price: +props.price.toFixed(2),
      amount: amount,
    };

    cartCtx.addItem(cartData);
  };

  return (
    <li className={styles["meal"]}>
      <div>
        <h3>{props.name}</h3>
        <div className={styles["price"]}>{price}</div>
        <div className={styles["description"]}>{props.description}</div>
      </div>
      <MealItemForm id={props.id} addToCart={addToCartHandler}></MealItemForm>
    </li>
  );
}
