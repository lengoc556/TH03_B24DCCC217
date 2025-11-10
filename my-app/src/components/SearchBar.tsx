import React from 'react';

interface Props {
  search: string;
  setSearch: (value: string) => void;
}

const SearchBar: React.FC<Props> = ({ search, setSearch }) => {
  return (
    <input
      type="text"
      placeholder="Tìm kiếm sản phẩm..."
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      className="border p-2 rounded w-full mb-4"
    />
  );
};

export default SearchBar;
