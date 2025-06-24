import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { NavLink, useNavigate } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import { useSelector } from 'react-redux';
import { selectCartCount } from '../redux/cartSlice';

export default function Header({ searchTerm, onSearch }) {
  const [input, setInput] = useState(searchTerm);
  const cartCount = useSelector(selectCartCount);
  const navigate = useNavigate();

  const handleSearch = () => {
    onSearch(input);
    navigate('/');
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearch();
    }
  };

  const handleHomeClick = () => {
    onSearch(''); // Clear search
    setInput('');
    navigate('/');
  };

  return (
    <header className="header">
      <div className="logo">
        <NavLink to="/" onClick={handleHomeClick}>ShoppyGlobe</NavLink>
      </div>

      <nav>
        <NavLink to="/" onClick={handleHomeClick}>Home</NavLink>
        <NavLink to="/cart">
          <FaShoppingCart />
          Cart
          {cartCount > 0 && <span className="cart-count">{cartCount}</span>}
        </NavLink>
      </nav>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search products..."
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
        />
        <button onClick={handleSearch}>Search</button>
      </div>
    </header>
  );
}

Header.propTypes = {
  searchTerm: PropTypes.string.isRequired,
  onSearch: PropTypes.func.isRequired,
};
