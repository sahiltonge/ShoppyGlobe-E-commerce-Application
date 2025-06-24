import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { addItem } from '../redux/cartSlice';
import { FaCartPlus } from 'react-icons/fa';

export default function ProductDetail() {
  const { productId } = useParams();
  const [product, setProduct] = useState(null);
  const [error, setError] = useState(null);
  const dispatch = useDispatch();

  useEffect(() => {
    async function fetchProduct() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${productId}`);
        if (!res.ok) throw new Error(`Error: ${res.status}`);
        const data = await res.json();
        setProduct(data);
      } catch (err) {
        setError(err.message);
      }
    }

    fetchProduct();
  }, [productId]);

  if (error) return <p>{error}</p>;
  if (!product) return <p>Loading product...</p>;

  return (
    <div className="product-detail">
      <h2>{product.title}</h2>
      <img
        src={product.thumbnail}
        alt={product.title}
        className="product-image"
      />
      <p><strong>Price:</strong> ${product.price}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Description:</strong> {product.description}</p>
      <button onClick={() => dispatch(addItem(product))} className="btn-add">
        <FaCartPlus /> Add to Cart
      </button>
    </div>
  );
}
