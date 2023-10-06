export function setDeleteItem(id: number, listProducts: []) {
  const newListProducts = listProducts.filter((item) => item !== id);
  localStorage.setItem("shopping_cart", JSON.stringify(newListProducts));
  window.location.reload();
}
