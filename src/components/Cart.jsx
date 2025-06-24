import React from 'react';
import { useSelector } from 'react-redux';
import { selectCartItems, selectCartTotal } from '../redux/cartSlice';
import CartItem from './CartItem';
import { Link } from 'react-router-dom';

export default function Cart() {
  const items = useSelector(selectCartItems);
  const total = useSelector(selectCartTotal);

  if (items.length === 0) {
    return (
      <div className="cart">
        <h2>Your cart is empty</h2>
        <Link to="/">Continue Shopping</Link>
      </div>
    );
  }

  return (
    <div className="cart">
      <h2>Your Cart</h2>
      {items.map((item) => (
        <CartItem key={item.product.id} item={item} />
      ))}
      <h3>Total: ${total.toFixed(2)}</h3>
      <Link to="/checkout" className="btn-checkout">
        Proceed to Checkout
      </Link>
    </div>
  );
}
