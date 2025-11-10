import React, { createContext, useReducer, ReactNode, useContext } from 'react';
import { Product, ProductAction } from '../types';
import { initialProducts } from '../data/initialProducts';

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: initialProducts,
};

const ProductContext = createContext<{
  state: ProductState;
  dispatch: React.Dispatch<ProductAction>;
}>({ state: initialState, dispatch: () => null });

const productReducer = (state: ProductState, action: ProductAction): ProductState => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { products: [...state.products, action.payload] };
    case 'UPDATE_PRODUCT':
      return {
        products: state.products.map((p) => (p.id === action.payload.id ? action.payload : p)),
      };
    case 'DELETE_PRODUCT':
      return { products: state.products.filter((p) => p.id !== action.payload) };
    default:
      return state;
  }
};

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return <ProductContext.Provider value={{ state, dispatch }}>{children}</ProductContext.Provider>;
};

export const useProductContext = () => useContext(ProductContext);
