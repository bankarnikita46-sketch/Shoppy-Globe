// Header - navigation menu + cart icon with item count
import React from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectCartCount } from "../redux/cartSlice";

export default function Header() {
  const cartCount = useSelector(selectCartCount);

  return (
    <header className="header">
      <Link to="/" className="logo">🛒 ShoppyGlobe</Link>
      <nav className="nav">
        <NavLink to="/" end>Home</NavLink>
        <NavLink to="/checkout">Checkout</NavLink>
        <NavLink to="/cart" className="cart-link">
          Cart
          <span className="cart-badge">{cartCount}</span>
        </NavLink>
      </nav>
    </header>
  );
}
