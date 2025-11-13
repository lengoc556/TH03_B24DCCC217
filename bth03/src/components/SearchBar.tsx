// src/components/SearchBar.tsx
import React from 'react';

const SearchBar: React.FC<{ searchTerm: string; setSearchTerm: (term: string) => void }> = ({
  searchTerm,
  setSearchTerm,
}) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm theo tên sản phẩm"
      value={searchTerm}
      onChange={(e) => setSearchTerm(e.target.value)}
      style={{ margin: '10px', padding: '5px' }}
    />
  );
};

export default SearchBar;