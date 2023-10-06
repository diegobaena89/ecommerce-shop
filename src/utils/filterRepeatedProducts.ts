import { Product } from "../context/ShopContext";

export function filterRepeatedProducts(cartProducts: Product[]) {
  const filteredProducts = cartProducts.filter((product, index, array) => {
    return array.findIndex((item) => item.id === product.id) === index;
  });
  return filteredProducts;
}
