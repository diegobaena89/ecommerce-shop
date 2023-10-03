import { useEffect, useState } from "react";
import IconCategories from "../components/IconCategories";
import ShopSection from "../components/ShopSection";
import SwipeBanner from "../components/SwipeBanner";

function Home() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  return (
    <>
      <SwipeBanner />
      <IconCategories />
      <ShopSection products={products} />
    </>
  );
}

export default Home;
