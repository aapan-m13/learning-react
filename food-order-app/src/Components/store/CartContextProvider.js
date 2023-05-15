import React, { useReducer } from "react";
import CartContext from "./cart-context";

const INIT_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    const updatedItems = state.items.concat(action.item);
    console.log(action);
    const updatedTotalAmount =
      state.totalAmount + action.item.amount * action.item.price;
    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
    };
  }
  return INIT_CART_STATE;
};

export default function CartContextProvider(props) {
  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    INIT_CART_STATE
  );

  const addItemToCartHandler = (item) => {
    console.log(item);
    dispatchCartAction({
      type: "ADD_ITEM",
      item: item,
    });
  };

  const removeItemFromCartHandler = (id) => {};

  const cartContextData = {
    items: cartState.items,
    totalAmount: cartState.totalAmount,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContextData}>
      {props.children}
    </CartContext.Provider>
  );
}
