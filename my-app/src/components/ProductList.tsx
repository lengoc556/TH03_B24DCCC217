import React from 'react';
import { Product } from '../types';
import ProductCard from './ProductCard';

interface Props {
  products: Product[];
}

const ProductList: React.FC<Props> = ({ products }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {products.map((p) => (
        <ProductCard key={p.id} product={p} />
      ))}
    </div>
  );
};

export default ProductList;
