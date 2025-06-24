import React from 'react';
import PropTypes from 'prop-types';
import { useDispatch } from 'react-redux';
import { removeItem, updateQuantity } from '../redux/cartSlice';
import { FaTrashAlt } from 'react-icons/fa';

export default function CartItem({ item }) {
  const dispatch = useDispatch();
  const { product, quantity } = item;

  const handleRemove = () => {
    dispatch(removeItem(product.id));
  };

  const handleQuantityChange = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value > 0) {
      dispatch(updateQuantity({ id: product.id, quantity: value }));
    }
  };

  return (
    <div className="cart-item">
      <img src={product.thumbnail} alt={product.title} className="cart-image" />
      <div className="cart-details">
        <h4>{product.title}</h4>
        <p>Price: ${product.price}</p>
        <input
          type="number"
          min="1"
          value={quantity}
          onChange={handleQuantityChange}
        />
      </div>
      <button className="btn-remove" onClick={handleRemove}>
        <FaTrashAlt />
      </button>
    </div>
  );
}

CartItem.propTypes = {
  item: PropTypes.shape({
    product: PropTypes.object.isRequired,
    quantity: PropTypes.number.isRequired,
  }).isRequired,
};
