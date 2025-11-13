// src/components/PriceFilter.tsx
import React from 'react';

const PriceFilter: React.FC<{
  minPrice: number;
  maxPrice: number;
  setMinPrice: (price: number) => void;
  setMaxPrice: (price: number) => void;
}> = ({ minPrice, maxPrice, setMinPrice, setMaxPrice }) => {
  return (
    <div style={{ margin: '10px' }}>
      <input
        type="number"
        placeholder="Giá min"
        value={minPrice || ''}
        onChange={(e) => setMinPrice(Number(e.target.value))}
        style={{ padding: '5px', marginRight: '5px' }}
      />
      <input
        type="number"
        placeholder="Giá max"
        value={maxPrice || ''}
        onChange={(e) => setMaxPrice(Number(e.target.value))}
        style={{ padding: '5px' }}
      />
    </div>
  );
};

export default PriceFilter;