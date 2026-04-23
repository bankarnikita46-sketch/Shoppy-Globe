// ProductDetail - fetches one product based on route param (:id).
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/cartSlice";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  // Fetch on mount / id change
  useEffect(() => {
    let cancelled = false;
    async function load() {
      try {
        setLoading(true);
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        if (!res.ok) throw new Error(`Request failed (${res.status})`);
        const data = await res.json();
        if (!cancelled) setProduct(data);
      } catch (err) {
        if (!cancelled) setError(err.message || "Failed to load product");
      } finally {
        if (!cancelled) setLoading(false);
      }
    }
    load();
    return () => {
      cancelled = true;
    };
  }, [id]);

  if (error)
    return (
      <div className="error-box">
        <h2>⚠️ Error</h2>
        <p>{error}</p>
      </div>
    );
  if (loading) return <p className="loading">Loading product...</p>;
  if (!product) return null;

  return (
    <article className="detail">
      <img
        src={product.thumbnail}
        alt={product.title}
        loading="lazy"
        className="detail-img"
      />
      <div className="detail-info">
        <h1>{product.title}</h1>
        <p className="brand">Brand: {product.brand}</p>
        <p>{product.description}</p>
        <p className="price-lg">${product.price}</p>
        <p>⭐ {product.rating} | Stock: {product.stock}</p>
        <button
          className="btn btn-primary"
          onClick={() => dispatch(addToCart(product))}
        >
          Add to Cart
        </button>
      </div>
    </article>
  );
}
