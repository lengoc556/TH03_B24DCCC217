// src/pages/EditProduct.tsx
import React from 'react';
import { useParams } from 'react-router-dom';
import ProductForm from '../components/ProductForm';
import { useProductContext } from '../contexts/ProductContext';
import { Product } from '../types';

const EditProduct: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useProductContext();
  const product = state.products.find((p) => p.id === Number(id));

  const handleSubmit = (updatedProduct: Product) => {
    dispatch({ type: 'UPDATE_PRODUCT', payload: updatedProduct });
  };

  if (!product) return <div>Sản phẩm không tồn tại</div>;

  return (
    <div>
      <h1>Chỉnh sửa sản phẩm</h1>
      <ProductForm onSubmit={handleSubmit} initialData={product} />
    </div>
  );
};

export default EditProduct;