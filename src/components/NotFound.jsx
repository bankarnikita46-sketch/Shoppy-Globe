// NotFound - friendly 404 page for unknown routes.
import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div className="notfound">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you are looking for does not exist or has been moved.</p>
      <Link to="/" className="btn btn-primary">Go back to Home</Link>
    </div>
  );
}
