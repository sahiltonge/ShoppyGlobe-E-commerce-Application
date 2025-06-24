# ShoppyGlobe - React E-commerce Application

## Overview

ShoppyGlobe is a basic yet fully functional e-commerce web application built with React.  
It allows users to browse products fetched from a public API, view detailed product information, add/remove items from the cart, and manage cart quantities. The app features a search functionality, Redux for state management, React Router for navigation, and optimized lazy loading for performance.

---

## Features

- Product listing fetched from [DummyJSON API](https://dummyjson.com/products)
- Product detail view using dynamic routes
- Add/remove products to/from cart with Redux state management
- Cart quantity adjustment and total price calculation
- Search bar to filter products by title
- Responsive UI for desktop and mobile devices
- Lazy loading of route components for performance optimization
- 404 Not Found page for invalid routes
- Footer with GitHub and LinkedIn links with icons

---

## Tech Stack

- React (Functional Components & Hooks)  
- Redux Toolkit (State Management)  
- React Router DOM (Routing)  
- React Icons (UI icons)  
- Fetch API (Data fetching)  
- Vite (Development build tool)  
- CSS for styling and responsive design  

## Folder Structure

ShoppyGlobe_E-commerce_Application/
├── public/
│   └── index.html             # Main HTML file
├── src/
│   ├── assets/                # Images, icons, fonts (if any)
│   ├── components/            # React components
│   │   ├── Cart.jsx
│   │   ├── CartItem.jsx
│   │   ├── Footer.jsx
│   │   ├── Header.jsx
│   │   ├── NotFound.jsx
│   │   ├── ProductDetail.jsx
│   │   ├── ProductItem.jsx
│   │   └── ProductList.jsx
│   ├── hooks/                 # Custom React hooks
│   │   └── useFetchProducts.js
│   ├── redux/                 # Redux related files
│   │   ├── cartSlice.js
│   │   └── store.js
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point (ReactDOM.render)
│   └── index.css              # Global CSS styles
├── .gitignore
├── package.json
├── README.md
└── vite.config.js             # Vite configuration

---

## Getting Started

### Prerequisites

- Node.js (v16 or newer recommended)  
- npm (comes with Node.js)

---

### Installation Steps

1. **Install all Dependencies**

    - npm install
    - npm install react
    - npm install react-dom
    - npm install react-router-dom
    - npm install react-redux
    - npm install @reduxjs/toolkit
    - npm install prop-types
    - npm install react-icons

2. **Run the Development Server**

    - npm run dev