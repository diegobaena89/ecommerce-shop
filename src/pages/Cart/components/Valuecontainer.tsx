import {
  CardBody,
  Card,
  Heading,
  Box,
  Text,
  Button,
  Divider,
} from "@chakra-ui/react";
import { nameShortener } from "../../../utils/nameShortener";
import { calculateTotal } from "../../../utils/calculateTotal";
import { Product, ShopContext } from "../../../context/ShopContext";
import { productQuantity } from "../../../utils/manageItems";
import { filterRepeatedProducts } from "../../../utils/filterRepeatedProducts";
import { useNavigate } from "react-router-dom";
import { useContext, useEffect } from "react";

function ValueContainer({ cartProducts }: { cartProducts: Product[] }) {
  const navigate = useNavigate();
  const { setCartProducts } = useContext(ShopContext)!;

  function handleNavigate() {
    navigate("/form");
  }

  useEffect(() => {
    setCartProducts(cartProducts);
    window.localStorage.setItem(
      "final_value",
      JSON.stringify(calculateTotal(cartProducts))
    );
  }, [cartProducts, setCartProducts]);

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
        <Button
          marginTop={3}
          colorScheme="telegram"
          size={"md"}
          onClick={() => handleNavigate()}
        >
          Finish
        </Button>
      </Card>
    </CardBody>
  );
}

export default ValueContainer;
