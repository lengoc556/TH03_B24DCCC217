// src/components/ProductCard.tsx
import React from 'react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

const ProductCard: React.FC<{ product: Product }> = ({ product }) => {
  const navigate = useNavigate();
  return (
    <div style={{ border: '1px solid #ccc', padding: '10px', margin: '10px', width: '200px' }}>
      <h3>{product.ten}</h3>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()} VND</p>
      <p>Số lượng: {product.soLuong}</p>
      <button onClick={() => navigate(`/products/${product.id}`)}>Chi tiết</button>
      <button onClick={() => navigate(`/edit/${product.id}`)}>Chỉnh sửa</button>
    </div>
  );
};

export default ProductCard;