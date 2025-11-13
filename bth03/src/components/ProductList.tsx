// src/components/ProductList.tsx
import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';
import Pagination from './Pagination';

interface ProductListProps {
  filteredProducts: Product[];
  currentPage: number;
  setCurrentPage: React.Dispatch<React.SetStateAction<number>>;
  itemsPerPage: number;
}

const ProductList: React.FC<ProductListProps> = ({
  filteredProducts,
  currentPage,
  setCurrentPage,
  itemsPerPage,
}) => {
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredProducts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <div>
      <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        {currentItems.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <Pagination
        currentPage={currentPage}
        totalItems={filteredProducts.length}
        itemsPerPage={itemsPerPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default ProductList;