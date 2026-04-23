// ProductItem - one product card; includes "Add to Cart" button (Redux).
import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductItem({ product }) {
  const dispatch = useDispatch();

  return (
    <article className="card">
      <Link to={`/product/${product.id}`} className="card-link">
        {/* lazy-loaded image for performance */}
        <img
          src={product.thumbnail}
          alt={product.title}
          loading="lazy"
          className="card-img"
        />
        <h3 className="card-title">{product.title}</h3>
      </Link>
      <p className="price">${product.price}</p>
      <button
        className="btn btn-primary"
        onClick={() => dispatch(addToCart(product))}
      >
        Add to Cart
      </button>
    </article>
  );
}
