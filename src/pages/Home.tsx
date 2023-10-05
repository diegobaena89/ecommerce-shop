import { useContext, useEffect, useState } from "react";
import IconCategories from "../components/IconCategories";
import ShopSection from "../components/ShopSection";
import SwipeBanner from "../components/SwipeBanner";
import { ShopContext } from "../context/ShopContext";
import { fetchProducts, fetchProductsByCategory } from "../api/api";

function Home() {
  const [products, setProducts] = useState([]);
  const { category } = useContext(ShopContext)!;
  useEffect(() => {
    if (category) {
      fetchProductsByCategory(category).then((data) => setProducts(data));
    } else {
      fetchProducts().then((data) => setProducts(data));
    }
  }, [category]);

  return (
    <>
      <SwipeBanner />
      <IconCategories />
      <ShopSection products={products} />
    </>
  );
}

export default Home;
