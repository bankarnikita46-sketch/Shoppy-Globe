// Cart - displays all CartItems with totals and a checkout link.
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartItem from "./CartItem";
import { selectCartItems, selectCartTotal } from "../redux/cartSlice";

export default function Cart() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <div className="empty">
        <h2>Your cart is empty 🛒</h2>
        <Link to="/" className="btn btn-primary">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <section>
      <h1>Your Cart</h1>
      <div className="cart-list">
        {items.map((item) => (
          // Unique key required for list rendering
          <CartItem key={item.id} item={item} />
        ))}
      </div>
      <div className="cart-summary">
        <h3>Total: ${total.toFixed(2)}</h3>
        <Link to="/checkout" className="btn btn-primary">
          Proceed to Checkout
        </Link>
      </div>
    </section>
  );
}
