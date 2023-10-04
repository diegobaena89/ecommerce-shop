import { useContext, useEffect, useState } from "react";
import IconCategories from "../components/IconCategories";
import ShopSection from "../components/ShopSection";
import SwipeBanner from "../components/SwipeBanner";
import { ShopContext } from "../context/ShopContext";

function Home() {
  const [products, setProducts] = useState([]);
  const { category } = useContext(ShopContext)!;
  useEffect(() => {
    if (category) {
      fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    } else {
      fetch(`https://fakestoreapi.com/products/`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
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
