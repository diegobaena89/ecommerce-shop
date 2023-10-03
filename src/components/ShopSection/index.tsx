import { Box, Text } from "@chakra-ui/react";
import { Container } from "./styles";
import CardComponent from "./components/Card";
import { useEffect, useState } from "react";

function ShopSection() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts(json));
  }, []);

  console.log(products);

  return (
    <Container>
      <Box w="100%" paddingY={4}>
        <Text fontWeight={"bold"} fontSize={24}>
          Todays for you!
        </Text>
      </Box>
      <Box
        w="100%"
        display={"flex"}
        flexWrap={"wrap"}
        justifyContent={"space-around"}
      >
        {products.map((product: any) => (
          <CardComponent
            key={product.id}
            id={product.id}
            product={product.title}
            rate={product.rating.rate}
            price={product.price}
            image={product.image}
            description={product.description}
          />
        ))}
      </Box>
    </Container>
  );
}

export default ShopSection;
