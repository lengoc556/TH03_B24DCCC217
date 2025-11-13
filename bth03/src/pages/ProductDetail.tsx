// src/pages/ProductDetail.tsx
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useProductContext } from '../contexts/ProductContext';

const ProductDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const { state, dispatch } = useProductContext();
  const product = state.products.find((p) => p.id === Number(id));
  const navigate = useNavigate();

  if (!product) return <div>Sản phẩm không tồn tại</div>;

  const handleDelete = () => {
    if (window.confirm('Bạn có chắc muốn xóa?')) {
      dispatch({ type: 'DELETE_PRODUCT', payload: product.id });
      navigate('/');
    }
  };

  return (
    <div>
      <h1>{product.ten}</h1>
      <p>Danh mục: {product.danhMuc}</p>
      <p>Giá: {product.gia.toLocaleString()} VND</p>
      <p>Số lượng: {product.soLuong}</p>
      <p>Mô tả: {product.moTa}</p>
      <button onClick={() => navigate(`/edit/${product.id}`)}>Chỉnh sửa</button>
      <button onClick={handleDelete}>Xóa</button>
      <button onClick={() => navigate('/')}>Quay lại</button>
    </div>
  );
};

export default ProductDetail;