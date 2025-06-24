import React from 'react';
import PropTypes from 'prop-types';
import useFetchProducts from '../hooks/useFetchProducts';
import ProductItem from './ProductItem';

export default function ProductList({ searchTerm }) {
  const { products, loading, error } = useFetchProducts();

  const filtered = searchTerm
    ? products.filter(product =>
        product.title.toLowerCase().includes(searchTerm.toLowerCase())
      )
    : products;

  if (loading) return <p>Loading products...</p>;
  if (error) return <p>Error loading products: {error}</p>;

  return (
    <div className="product-list">
      {filtered.map(product => (
        <ProductItem key={product.id} product={product} />
      ))}
    </div>
  );
}

ProductList.propTypes = {
  searchTerm: PropTypes.string.isRequired,
};
