// ProductList - shows the products from API, filtered by Redux search query.
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import useProducts from "../hooks/useProducts";
import ProductItem from "./ProductItem";
import { selectQuery, setQuery } from "../redux/searchSlice";

export default function ProductList() {
  const { products, loading, error } = useProducts();
  const query = useSelector(selectQuery);
  const dispatch = useDispatch();

  // Error UI (graceful failure handling)
  if (error) {
    return (
      <div className="error-box">
        <h2>⚠️ Failed to load products</h2>
        <p>{error}</p>
      </div>
    );
  }
  if (loading) return <p className="loading">Loading products...</p>;

  // Filter by title (case-insensitive) using Redux search state
  const filtered = products.filter((p) =>
    p.title.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <section>
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={query}
          onChange={(e) => dispatch(setQuery(e.target.value))}
        />
      </div>

      {filtered.length === 0 ? (
        <p>No products match "{query}"</p>
      ) : (
        <div className="grid">
          {filtered.map((p) => (
            // Unique key for each list item
            <ProductItem key={p.id} product={p} />
          ))}
        </div>
      )}
    </section>
  );
}
