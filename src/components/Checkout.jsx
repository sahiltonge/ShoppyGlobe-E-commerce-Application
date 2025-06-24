import React from 'react';
import { Link } from 'react-router-dom';

export default function Checkout() {
  return (
    <div className="checkout">
      <h2>Checkout</h2>
      <p>
        We can implement the payment gatways, for checking out the products.
      </p>
      <Link to="/" className="btn-back">
        ← Back to Home
      </Link>
    </div>
  );
}
