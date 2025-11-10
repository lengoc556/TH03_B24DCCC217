// src/pages/HomePage.tsx
import React, { useState, useMemo } from 'react';
import { useProductContext } from '../context/ProductContext';
import ProductList from '../components/ProductList';
import SearchBar from '../components/SearchBar';
import Filter from '../components/Filter';
import Pagination from '../components/Pagination';

const PRODUCTS_PER_PAGE = 6;

const HomePage: React.FC = () => {
  const { state } = useProductContext();
  const [search, setSearch] = useState('');
  const [category, setCategory] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);

  // Lọc sản phẩm theo search, category, giá
  const filteredProducts = useMemo(() => {
    return state.products.filter((p) => {
      const matchName = p.ten.toLowerCase().includes(search.toLowerCase());
      const matchCategory = category ? p.danhMuc === category : true;
      const matchMin = minPrice ? p.gia >= minPrice : true;
      const matchMax = maxPrice ? p.gia <= maxPrice : true;
      return matchName && matchCategory && matchMin && matchMax;
    });
  }, [state.products, search, category, minPrice, maxPrice]);

  // Phân trang
  const totalPages = Math.ceil(filteredProducts.length / PRODUCTS_PER_PAGE);
  const paginatedProducts = filteredProducts.slice(
    (currentPage - 1) * PRODUCTS_PER_PAGE,
    currentPage * PRODUCTS_PER_PAGE
  );

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Danh sách sản phẩm</h1>
      <SearchBar search={search} setSearch={setSearch} />
      <Filter
        category={category}
        setCategory={setCategory}
        minPrice={minPrice}
        setMinPrice={setMinPrice}
        maxPrice={maxPrice}
        setMaxPrice={setMaxPrice}
      />
      <ProductList products={paginatedProducts} />
      <Pagination currentPage={currentPage} totalPages={totalPages} setCurrentPage={setCurrentPage} />
      <p className="mt-2">Tổng số sản phẩm: {filteredProducts.length}</p>
    </div>
  );
};

export default HomePage;
