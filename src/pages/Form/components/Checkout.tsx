import {
  Card,
  CardBody,
  Heading,
  Box,
  Button,
  Divider,
  Text,
} from "@chakra-ui/react";

function Checkout() {
  const finalValue = localStorage.getItem("final_value");
  const finalValueNumber = Number(finalValue).toFixed(2);
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
          onClick={() => console.log("finish")}
        >
          Finish
        </Button>
      </CardBody>
    </Card>
  );
}

export default Checkout;
