// src/components/Pagination.tsx
import React from 'react';

const Pagination: React.FC<{
  currentPage: number;
  totalItems: number;
  itemsPerPage: number;
  onPageChange: (page: number) => void;
}> = ({ currentPage, totalItems, itemsPerPage, onPageChange }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <div style={{ margin: '20px 0' }}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        style={{ marginRight: '10px' }}
      >
        Previous
      </button>
      <span>
        Trang {currentPage} / {totalPages} (Tổng: {totalItems} sản phẩm)
      </span>
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        style={{ marginLeft: '10px' }}
      >
        Next
      </button>
    </div>
  );
};

export default Pagination;