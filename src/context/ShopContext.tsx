import React, { createContext, useMemo, useState } from "react";

export type Product = {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
};

type ShopContextType = {
  category: string;
  setCategory: (category: string) => void;
  listProducts: [];
  setListProducts: (listProducts: any) => void;
};

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

type ShopProviderProps = {
  children: React.ReactNode;
};

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [category, setCategory] = useState("");
  const [listProducts, setListProducts] = useState<any>();

  const contextValue = useMemo(
    () => ({ category, setCategory, listProducts, setListProducts }),
    [category, setCategory, listProducts, setListProducts]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
