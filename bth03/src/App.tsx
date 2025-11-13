// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ProductProvider } from './contexts/ProductContext';
import Home from './pages/Home';
import ProductDetail from './pages/ProductDetail';
import AddProduct from './pages/AddProduct';
import EditProduct from './pages/EditProduct';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/edit/:id" element={<EditProduct />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;