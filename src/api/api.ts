export const fetchProducts = async () => {
  const response = await fetch("https://fakestoreapi.com/products");
  const products = await response.json();
  return products;
};

export const fetchProductsByCategory = async (category: string) => {
  const response = await fetch(
    `https://fakestoreapi.com/products/category/${category}`
  );
  const products = await response.json();
  return products;
};

export const fetchProductById = async (id: number[]) => {
  const response = await fetch(`https://fakestoreapi.com/products/${id}`);
  const product = await response.json();
  return product;
};
