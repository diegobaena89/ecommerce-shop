import { Box, Spinner, Text } from "@chakra-ui/react";
import { Container } from "./styles";
import CardComponent from "./components/Card";

interface ProductsProps {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: {
    rate: number;
    count: number;
  };
}

interface ShopSectionProps {
  products: ProductsProps[];
}

function ShopSection({ products }: ShopSectionProps) {
  const renderCards = (
    <Box
      w="100%"
      display={"flex"}
      flexWrap={"wrap"}
      justifyContent={"flex-start"}
    >
      {products.map(({ id, title, rating, price, image, description }) => (
        <CardComponent
          key={id}
          id={id}
          product={title}
          rate={rating.rate}
          price={price}
          image={image}
          description={description}
        />
      ))}
    </Box>
  );

  const renderSpinner = (
    <Box w="100%" display={"flex"} flexWrap={"wrap"} justifyContent={"center"}>
      <Spinner size={"xl"} />
    </Box>
  );

  return (
    <Container>
      <Box w="100%" paddingY={4}>
        <Text fontWeight={"bold"} fontSize={24}>
          Todays for you!
        </Text>
      </Box>
      {products.length > 0 ? renderCards : renderSpinner}
    </Container>
  );
}

export default ShopSection;
