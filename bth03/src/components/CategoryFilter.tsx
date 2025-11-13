import React from 'react';

const categories = ['Điện tử', 'Quần áo', 'Đồ ăn', 'Sách', 'Khác'] as const;

interface CategoryFilterProps {
  selectedCategory: string;
  setSelectedCategory: (category: string) => void;
}

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  selectedCategory,
  setSelectedCategory,
}) => {
  return (
    <select
      value={selectedCategory}
      onChange={(e) => setSelectedCategory(e.target.value)}
      style={{ margin: '10px', padding: '5px' }}
    >
      <option value="">Tất cả danh mục</option>
      {categories.map((cat) => (
        <option key={cat} value={cat}>
          {cat}
        </option>
      ))}
    </select>
  );
};

export default CategoryFilter;