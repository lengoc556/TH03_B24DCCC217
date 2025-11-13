import React, { useState } from 'react';
import { useProductContext } from '../contexts/ProductContext';
import SearchBar from '../components/SearchBar';
import CategoryFilter from '../components/CategoryFilter';  // Đúng
import PriceFilter from '../components/PriceFilter';
import ProductList from '../components/ProductList';        // Đúng
import { useNavigate } from 'react-router-dom';
import { Product } from '../types';

const Home: React.FC = () => {
  const { state } = useProductContext();
  const { products } = state;

  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.ten.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory ? product.danhMuc === selectedCategory : true;
    const matchesPrice =
      (minPrice ? product.gia >= minPrice : true) && 
      (maxPrice ? product.gia <= maxPrice : true);
    return matchesSearch && matchesCategory && matchesPrice;
  });

  const navigate = useNavigate();

  return (
    <div>
      <h1>Danh sách sản phẩm</h1>
      <button onClick={() => navigate('/add')}>Thêm sản phẩm</button>

      {/* 1. Tìm kiếm */}
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />

      {/* 2. Lọc danh mục – ĐÚNG PROPS */}
      <CategoryFilter
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
      />

      {/* 3. Lọc giá */}
      <PriceFilter
        minPrice={minPrice}
        maxPrice={maxPrice}
        setMinPrice={setMinPrice}
        setMaxPrice={setMaxPrice}
      />

      {/* 4. Danh sách + phân trang – ĐÚNG PROPS */}
      <ProductList
        filteredProducts={filteredProducts}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        itemsPerPage={itemsPerPage}
      />
    </div>
  );
};

export default Home;