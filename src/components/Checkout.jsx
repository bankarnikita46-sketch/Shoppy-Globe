// Checkout - dummy form + cart summary; on submit clears cart and redirects home.
import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  selectCartItems,
  selectCartTotal,
  clearCart,
} from "../redux/cartSlice";

export default function Checkout() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    address: "",
    city: "",
    zip: "",
  });
  const [placed, setPlaced] = useState(false);

  // Generic input handler
  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  // On "Place Order": show confirmation, empty cart, redirect to home
  const handleSubmit = (e) => {
    e.preventDefault();
    setPlaced(true);
    dispatch(clearCart());
    setTimeout(() => navigate("/"), 2000);
  };

  if (placed) {
    return (
      <div className="success">
        <h2>✅ Order placed</h2>
        <p>Thank you, {form.name || "customer"}! Redirecting to Home...</p>
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="empty">
        <h2>Your cart is empty</h2>
        <p>Add items before checking out.</p>
      </div>
    );
  }

  return (
    <section className="checkout">
      <h1>Checkout</h1>

      <form className="checkout-form" onSubmit={handleSubmit}>
        <h3>Shipping Details</h3>
        <input name="name" placeholder="Full name" required value={form.name} onChange={handleChange} />
        <input name="email" type="email" placeholder="Email" required value={form.email} onChange={handleChange} />
        <input name="address" placeholder="Address" required value={form.address} onChange={handleChange} />
        <input name="city" placeholder="City" required value={form.city} onChange={handleChange} />
        <input name="zip" placeholder="ZIP" required value={form.zip} onChange={handleChange} />
        <button className="btn btn-primary" type="submit">Place Order</button>
      </form>

      <aside className="order-summary">
        <h3>Order Summary</h3>
        <ul>
          {items.map((i) => (
            <li key={i.id}>
              {i.title} × {i.quantity} = ${(i.price * i.quantity).toFixed(2)}
            </li>
          ))}
        </ul>
        <h4>Total: ${total.toFixed(2)}</h4>
      </aside>
    </section>
  );
}
