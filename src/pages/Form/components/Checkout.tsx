import {
  Card,
  CardBody,
  Heading,
  Box,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ShopContext } from "../../../context/ShopContext";

function Checkout() {
  const finalValue = localStorage.getItem("final_value");
  const finalValueNumber = Number(finalValue).toFixed(2);
  const navigate = useNavigate();
  const { setListProducts } = useContext(ShopContext)!;

  function handleCloseCart() {
    localStorage.clear();
    setListProducts([]);

    navigate("/final");
  }

  return (
    <Card width={"35%"} height={"160px"}>
      <CardBody>
        <Heading size="md" paddingBottom={1} paddingLeft={4}>
          Checkout
        </Heading>
        <Divider />
        <Box>
          <Text align={"end"} padding="10px 0">
            Total: U$ {finalValueNumber}
          </Text>
        </Box>
        <Button
          w="100%"
          marginTop={3}
          colorScheme="telegram"
          size={"md"}
          onClick={() => handleCloseCart()}
        >
          Finish
        </Button>
      </CardBody>
    </Card>
  );
}

export default Checkout;
