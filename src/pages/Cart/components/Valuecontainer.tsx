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

function ValueContainer({ cartProducts }: { cartProducts: Product[] }) {
  return (
    <CardBody>
      <Card overflow="hidden" variant="outline" padding="20px">
        <Heading size={"md"}>Checkout</Heading>
        <Box padding="15px 0">
          {cartProducts.map((item: any) => (
            <>
              <Stack key={item.id} flexDirection={"column"}>
                <Text>{nameShortener(item.title, 35)}</Text>
                <Text align={"end"}>U$ {item.price}</Text>
              </Stack>
              <Divider padding="10px 0" />
            </>
          ))}
        </Box>
        <Text align={"end"} padding="10px 0">
          Total: {calculateTotal(cartProducts)}
        </Text>
        <Button marginTop={3} colorScheme="green" size={"md"}>
          Finish
        </Button>
      </Card>
    </CardBody>
  );
}

export default ValueContainer;
