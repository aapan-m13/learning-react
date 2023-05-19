import React, { useReducer, useContext } from "react";
import CartContext from "./cart-context";

const INIT_CART_STATE = {
  items: [],
  totalAmount: 0,
};

const cartReducer = (state, action) => {
  if (action.type === "ADD_ITEM") {
    if (action.contextData.length > 0) {
      let exists = false;
      action.contextData.forEach((item) => {
        if (item.id === action.item.id) {
          exists = true;
          item.amount = item.amount + action.item.amount;
        }
      });
      if (!exists) action.contextData.push(action.item);
    } else {
      console.log("here");
      action.contextData.push(action.item);
    }
    console.log(action.contextData);
    // const updatedItems = state.items.concat(action.item);
    const updatedTotalAmount = action.item.amount * action.item.price;

    return {
      items: action.contextData,
      totalAmount: updatedTotalAmount,
    };
  }
  return INIT_CART_STATE;
};

export default function CartContextProvider(props) {
  const cartCtx = useContext(CartContext);

  const [cartState, dispatchCartAction] = useReducer(
    cartReducer,
    INIT_CART_STATE
  );

  const addItemToCartHandler = (item) => {
    dispatchCartAction({
      contextData: cartCtx.items,
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
