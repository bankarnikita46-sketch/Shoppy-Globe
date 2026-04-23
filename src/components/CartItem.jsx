// CartItem - single cart row: qty controls (min 1) + remove button.
import React from "react";
import { useDispatch } from "react-redux";
import {
  removeFromCart,
  increaseQty,
  decreaseQty,
} from "../redux/cartSlice";

export default function CartItem({ item }) {
  const dispatch = useDispatch();

  return (
    <div className="cart-item">
      <img src={item.thumbnail} alt={item.title} loading="lazy" />
      <div className="cart-item-info">
        <h4>{item.title}</h4>
        <p>${item.price} each</p>
      </div>
      <div className="qty-controls">
        <button
          onClick={() => dispatch(decreaseQty(item.id))}
          disabled={item.quantity <= 1}  // can't go below 1
        >
          -
        </button>
        <span>{item.quantity}</span>
        <button onClick={() => dispatch(increaseQty(item.id))}>+</button>
      </div>
      <p className="line-total">${(item.price * item.quantity).toFixed(2)}</p>
      <button
        className="btn btn-danger"
        onClick={() => dispatch(removeFromCart(item.id))}
      >
        Remove
      </button>
    </div>
  );
}
