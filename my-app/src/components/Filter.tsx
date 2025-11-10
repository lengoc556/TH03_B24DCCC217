import React from 'react';

interface Props {
  category: string;
  setCategory: (value: string) => void;
  minPrice: number;
  setMinPrice: (value: number) => void;
  maxPrice: number;
  setMaxPrice: (value: number) => void;
}

const Filter: React.FC<Props> = ({ category, setCategory, minPrice, setMinPrice, maxPrice, setMaxPrice }) => {
  return (
    <div className="flex gap-4 mb-4">
      <select value={category} onChange={(e) => setCategory(e.target.value)} className="border p-2 rounded">
        <option value="">Tất cả danh mục</option>
        <option value="Điện tử">Điện tử</option>
        <option value="Quần áo">Quần áo</option>
        <option value="Đồ ăn">Đồ ăn</option>
        <option value="Sách">Sách</option>
        <option value="Khác">Khác</option>
      </select>
      <input type="number" placeholder="Giá min" value={minPrice} onChange={(e) => setMinPrice(Number(e.target.value))} className="border p-2 rounded" />
      <input type="number" placeholder="Giá max" value={maxPrice} onChange={(e) => setMaxPrice(Number(e.target.value))} className="border p-2 rounded" />
    </div>
  );
};

export default Filter;
