import { Product } from "../context/ShopContext";

export function calculateTotal(cartProducts: Product[]) {
  let total = 0;
  cartProducts.forEach((item: Product) => {
    total += item.price;
  });
  return total;
}
