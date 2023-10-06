import React, { createContext, useEffect, useMemo, useState } from "react";

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
  itemQuantity: number;
  setItemQuantity: (id: number) => void;
  cartProducts: Product[];
  setCartProducts: (cartProducts: Product[]) => void;
};

export const ShopContext = createContext<ShopContextType | undefined>(
  undefined
);

type ShopProviderProps = {
  children: React.ReactNode;
};

export const ShopProvider: React.FC<ShopProviderProps> = ({ children }) => {
  const [category, setCategory] = useState("");
  const [itemQuantity, setItemQuantity] = useState<number>(0);
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const [listProducts, setListProducts] = useState<any>(() => {
    const saveCart = localStorage.getItem("shopping_cart");
    return saveCart ? JSON.parse(saveCart) : [];
  });

  useEffect(() => {
    localStorage.setItem("shopping_cart", JSON.stringify(listProducts));
  }, [listProducts]);

  const contextValue = useMemo(
    () => ({
      category,
      setCategory,
      listProducts,
      setListProducts,
      itemQuantity,
      setItemQuantity,
      cartProducts,
      setCartProducts,
    }),
    [
      category,
      setCategory,
      listProducts,
      setListProducts,
      itemQuantity,
      setItemQuantity,
      cartProducts,
      setCartProducts,
    ]
  );

  return (
    <ShopContext.Provider value={contextValue}>{children}</ShopContext.Provider>
  );
};
