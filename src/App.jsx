import React, { useState, Suspense, lazy } from 'react';
import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

const ProductList = lazy(() => import('./components/ProductList'));
const ProductDetail = lazy(() => import('./components/ProductDetail'));
const Cart = lazy(() => import('./components/Cart'));
const Checkout = lazy(() => import('./components/Checkout'));
const NotFound = lazy(() => import('./components/NotFound'));

export default function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <>
      <Header searchTerm={searchTerm} onSearch={setSearchTerm} />
      <main className="main-content">
        <Suspense fallback={<p>Loading...</p>}>
          <Routes>
            <Route path="/" element={<ProductList searchTerm={searchTerm} />} />
            <Route path="/product/:productId" element={<ProductDetail />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Suspense>
      </main>
      <Footer />
    </>
  );
}
