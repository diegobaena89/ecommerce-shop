import { Box, Text } from "@chakra-ui/react";
import { Container } from "./styles";
import CardComponent from "./components/Card";

function ShopSection() {
  const cardLength = 12;
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
        {Array.from(Array(cardLength).keys()).map((_, index) => (
          <CardComponent
            key={index}
            product="Green double couch with wooden legs"
            rate={4.5}
            price={150}
          />
        ))}
      </Box>
    </Container>
  );
}

export default ShopSection;
