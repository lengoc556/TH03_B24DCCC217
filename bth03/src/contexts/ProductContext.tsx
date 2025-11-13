// src/contexts/ProductContext.tsx
import React, { createContext, useReducer, useContext, ReactNode } from 'react';
import { Product } from '../types';

type Action =
  | { type: 'ADD_PRODUCT'; payload: Product }
  | { type: 'UPDATE_PRODUCT'; payload: Product }
  | { type: 'DELETE_PRODUCT'; payload: number };

interface ProductState {
  products: Product[];
}

const initialState: ProductState = {
  products: [
    { id: 1, ten: 'iPhone 15 Pro', danhMuc: 'Điện tử', gia: 25000000, soLuong: 10, moTa: 'Smartphone cao cấp từ Apple' },
    { id: 2, ten: 'Áo Thun Nam', danhMuc: 'Quần áo', gia: 150000, soLuong: 50, moTa: 'Áo thun cotton thoải mái' },
    { id: 3, ten: 'Bánh Mì Kẹp Thịt', danhMuc: 'Đồ ăn', gia: 30000, soLuong: 100, moTa: 'Bánh mì Việt Nam ngon miệng' },
    { id: 4, ten: 'Sách Harry Potter', danhMuc: 'Sách', gia: 200000, soLuong: 20, moTa: 'Bộ sách phép thuật nổi tiếng' },
    { id: 5, ten: 'Tai Nghe Bluetooth', danhMuc: 'Điện tử', gia: 500000, soLuong: 30, moTa: 'Tai nghe không dây chất lượng cao' },
    { id: 6, ten: 'Quần Jeans Nữ', danhMuc: 'Quần áo', gia: 400000, soLuong: 40, moTa: 'Quần jeans thời trang' },
    { id: 7, ten: 'Trà Sữa Trân Châu', danhMuc: 'Đồ ăn', gia: 50000, soLuong: 200, moTa: 'Đồ uống phổ biến' },
    { id: 8, ten: 'Sách Lập Trình React', danhMuc: 'Sách', gia: 300000, soLuong: 15, moTa: 'Hướng dẫn lập trình React' },
    { id: 9, ten: 'Máy Tính Xách Tay', danhMuc: 'Điện tử', gia: 15000000, soLuong: 5, moTa: 'Laptop hiệu suất cao' },
    { id: 10, ten: 'Giày Thể Thao', danhMuc: 'Quần áo', gia: 800000, soLuong: 25, moTa: 'Giày chạy bộ thoải mái' },
    { id: 11, ten: 'Bánh Kẹo Tết', danhMuc: 'Đồ ăn', gia: 100000, soLuong: 60, moTa: 'Bánh kẹo truyền thống' },
    { id: 12, ten: 'Bút Chì Màu', danhMuc: 'Khác', gia: 50000, soLuong: 100, moTa: 'Bộ bút chì màu cho vẽ' },
  ],
};

const productReducer = (state: ProductState, action: Action): ProductState => {
  switch (action.type) {
    case 'ADD_PRODUCT':
      return { ...state, products: [...state.products, action.payload] };
    case 'UPDATE_PRODUCT':
      return {
        ...state,
        products: state.products.map((p) => (p.id === action.payload.id ? action.payload : p)),
      };
    case 'DELETE_PRODUCT':
      return { ...state, products: state.products.filter((p) => p.id !== action.payload) };
    default:
      return state;
  }
};

interface ProductContextType {
  state: ProductState;
  dispatch: React.Dispatch<Action>;
}

const ProductContext = createContext<ProductContextType | undefined>(undefined);

export const ProductProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(productReducer, initialState);
  return (
    <ProductContext.Provider value={{ state, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
};

export const useProductContext = () => {
  const context = useContext(ProductContext);
  if (!context) {
    throw new Error('useProductContext must be used within a ProductProvider');
  }
  return context;
};