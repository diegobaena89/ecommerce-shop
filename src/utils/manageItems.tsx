import { Product } from "../context/ShopContext";

export const productQuantity = (id: number, cartProducts: Product[]) => {
  const quantity = cartProducts.filter((item) => item.id === id);
  return quantity.length;
};
