import React, { useState } from 'react';
import { Product } from '../types';

interface Props {
  initialData?: Product;
  onSubmit: (product: Product) => void;
}

const ProductForm: React.FC<Props> = ({ initialData, onSubmit }) => {
  const [ten, setTen] = useState(initialData?.ten || '');
  const [danhMuc, setDanhMuc] = useState(initialData?.danhMuc || '');
  const [gia, setGia] = useState(initialData?.gia || 0);
  const [soLuong, setSoLuong] = useState(initialData?.soLuong || 0);
  const [moTa, setMoTa] = useState(initialData?.moTa || '');
  const [errors, setErrors] = useState<string[]>([]);

  const handleSubmit = () => {
    const newErrors = [];
    if (ten.length < 3) newErrors.push('Tên sản phẩm phải ít nhất 3 ký tự');
    if (gia <= 0) newErrors.push('Giá phải là số dương');
    if (soLuong <= 0 || !Number.isInteger(soLuong)) newErrors.push('Số lượng phải là số nguyên dương');
    if (!danhMuc) newErrors.push('Chọn danh mục sản phẩm');
    if (newErrors.length) return setErrors(newErrors);

    onSubmit({ id: initialData?.id || Date.now(), ten, danhMuc: danhMuc as any, gia, soLuong, moTa });
  };

  return (
    <div className="max-w-md mx-auto">
      {errors.length > 0 && <ul className="text-red-500 mb-2">{errors.map((e, i) => <li key={i}>{e}</li>)}</ul>}
      <input type="text" placeholder="Tên sản phẩm" value={ten} onChange={(e) => setTen(e.target.value)} className="border p-2 w-full mb-2 rounded" />
      <select value={danhMuc} onChange={(e) => setDanhMuc(e.target.value)} className="border p-2 w-full mb-2 rounded">
        <option value="">Chọn danh mục</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>
      <input type="number" placeholder="Giá" value={gia} onChange={(e) => setGia(Number(e.target.value))} className="border p-2 w-full mb-2 rounded" />
      <input type="number" placeholder="Số lượng" value={soLuong} onChange={(e) => setSoLuong(Number(e.target.value))} className="border p-2 w-full mb-2 rounded" />
      <textarea placeholder="Mô tả" value={moTa} onChange={(e) => setMoTa(e.target.value)} className="border p-2 w-full mb-2 rounded"></textarea>
      <button onClick={handleSubmit} className="bg-blue-500 text-white p-2 rounded w-full">Lưu</button>
    </div>
  );
};

export default ProductForm;
