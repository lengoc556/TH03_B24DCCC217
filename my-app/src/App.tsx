// src/App.tsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { ProductProvider } from './context/ProductContext';
import HomePage from './pages/HomePage';
import ProductDetailPage from './pages/ProductDetailPage';
import AddProductPage from './pages/AddProductPage';
import EditProductPage from './pages/EditProductPage';

const App: React.FC = () => {
  return (
    <ProductProvider>
      <Router>
        <nav className="p-4 bg-gray-200 mb-4 flex gap-4">
          <Link to="/">Trang chủ</Link>
          <Link to="/add">Thêm sản phẩm</Link>
        </nav>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products/:id" element={<ProductDetailPage />} />
          <Route path="/add" element={<AddProductPage />} />
          <Route path="/edit/:id" element={<EditProductPage />} />
        </Routes>
      </Router>
    </ProductProvider>
  );
};

export default App;
