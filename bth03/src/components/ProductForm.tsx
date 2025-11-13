// src/components/ProductForm.tsx
import React, { useState, useEffect } from 'react';
import { Product } from '../types';
import { useNavigate } from 'react-router-dom';

interface ProductFormProps {
  onSubmit: (product: Product) => void;
  initialData?: Product;
}

const ProductForm: React.FC<ProductFormProps> = ({ onSubmit, initialData }) => {
  const [ten, setTen] = useState(initialData?.ten || '');
  const [danhMuc, setDanhMuc] = useState<Product['danhMuc']>(initialData?.danhMuc || 'Điện tử');
  const [gia, setGia] = useState(initialData?.gia || 0);
  const [soLuong, setSoLuong] = useState(initialData?.soLuong || 0);
  const [moTa, setMoTa] = useState(initialData?.moTa || '');
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const navigate = useNavigate();

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!ten || ten.length < 3) newErrors.ten = 'Tên sản phẩm bắt buộc, tối thiểu 3 ký tự';
    if (!gia || gia <= 0) newErrors.gia = 'Giá bắt buộc, phải là số dương';
    if (!soLuong || soLuong <= 0 || !Number.isInteger(soLuong)) newErrors.soLuong = 'Số lượng bắt buộc, phải là số nguyên dương';
    if (!danhMuc) newErrors.danhMuc = 'Danh mục bắt buộc chọn';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      const product: Product = {
        id: initialData?.id || Date.now(),
        ten,
        danhMuc,
        gia,
        soLuong,
        moTa,
      };
      onSubmit(product);
      navigate('/');
    }
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: '400px', margin: 'auto' }}>
      <div>
        <label>Tên sản phẩm:</label>
        <input value={ten} onChange={(e) => setTen(e.target.value)} />
        {errors.ten && <p style={{ color: 'red' }}>{errors.ten}</p>}
      </div>
      <div>
        <label>Danh mục:</label>
        <select value={danhMuc} onChange={(e) => setDanhMuc(e.target.value as Product['danhMuc'])}>
          <option value="Điện tử">Điện tử</option>
          <option value="Quần áo">Quần áo</option>
          <option value="Đồ ăn">Đồ ăn</option>
          <option value="Sách">Sách</option>
          <option value="Khác">Khác</option>
        </select>
        {errors.danhMuc && <p style={{ color: 'red' }}>{errors.danhMuc}</p>}
      </div>
      <div>
        <label>Giá:</label>
        <input type="number" value={gia} onChange={(e) => setGia(Number(e.target.value))} />
        {errors.gia && <p style={{ color: 'red' }}>{errors.gia}</p>}
      </div>
      <div>
        <label>Số lượng:</label>
        <input type="number" value={soLuong} onChange={(e) => setSoLuong(Number(e.target.value))} />
        {errors.soLuong && <p style={{ color: 'red' }}>{errors.soLuong}</p>}
      </div>
      <div>
        <label>Mô tả:</label>
        <textarea value={moTa} onChange={(e) => setMoTa(e.target.value)} />
      </div>
      <button type="submit">Lưu</button>
    </form>
  );
};

export default ProductForm;