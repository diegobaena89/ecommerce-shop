import {
  CardBody,
  Card,
  Heading,
  Box,
  Stack,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { nameShortener } from "../../../utils/nameShortener";
import { calculateTotal } from "../../../utils/calculateTotal";
import { Product } from "../../../context/ShopContext";
import { productQuantity } from "../../../utils/manageItems";

function ValueContainer({ cartProducts }: { cartProducts: Product[] }) {
  console.log("cartProducts", cartProducts);

  function filterRepeatedProducts(cartProducts: Product[]) {
    const filteredProducts = cartProducts.filter((product, index, array) => {
      return array.findIndex((item) => item.id === product.id) === index;
    });
    return filteredProducts;
  }

  console.log(filterRepeatedProducts(cartProducts));

  return (
    <CardBody>
      <Card overflow="hidden" variant="outline" padding="20px">
        <Heading size={"md"}>Checkout</Heading>
        <Box padding="15px 0">
          {filterRepeatedProducts(cartProducts).map((item: any) => (
            <>
              <Box display={"flex"} justifyContent={"space-between"}>
                <Text>{nameShortener(item.title, 35)}</Text>
                <Text fontSize={"sm"}>
                  {productQuantity(item.id, cartProducts)}x
                </Text>
              </Box>
              <Text align={"end"} marginTop={1}>
                U$ {item.price * productQuantity(item.id, cartProducts)}
              </Text>
              <Divider padding="10px 0" />
            </>
          ))}
        </Box>
        <Text align={"end"} padding="10px 0" fontWeight={"bold"}>
          Total: {calculateTotal(cartProducts).toFixed(2)}
        </Text>
        <Button marginTop={3} colorScheme="green" size={"md"}>
          Finish
        </Button>
      </Card>
    </CardBody>
  );
}

export default ValueContainer;
