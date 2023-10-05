export function setDeleteItem(id: number, listProducts: []) {
  console.log("deletou o item", id);
  const newListProducts = listProducts.filter((item) => item !== id);
  localStorage.setItem("shopping_cart", JSON.stringify(newListProducts));
  window.location.reload();
}
