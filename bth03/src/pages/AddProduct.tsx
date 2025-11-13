// src/pages/AddProduct.tsx
import React from 'react';
import ProductForm from '../components/ProductForm';
import { useProductContext } from '../contexts/ProductContext';
import { Product } from '../types';

const AddProduct: React.FC = () => {
  const { dispatch } = useProductContext();

  const handleSubmit = (product: Product) => {
    dispatch({ type: 'ADD_PRODUCT', payload: product });
  };

  return (
    <div>
      <h1>Thêm sản phẩm mới</h1>
      <ProductForm onSubmit={handleSubmit} />
    </div>
  );
};

export default AddProduct;