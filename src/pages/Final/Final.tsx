import { Heading, Text, Image, Button } from "@chakra-ui/react";
import { FinishContainer } from "./styles";
import { useNavigate } from "react-router-dom";

function Final() {
  const navigate = useNavigate();
  return (
    <FinishContainer>
      <Heading fontSize={20}>You've finish to buy your products!</Heading>
      <Image
        src="https://cdn-icons-png.flaticon.com/512/126/126783.png"
        alt="Finish"
        width={"10%"}
        marginY={5}
      />
      <Text>Thanks for buy with us!</Text>
      <Button
        marginTop={4}
        colorScheme="blue"
        size="sm"
        onClick={() => navigate("/")}
      >
        Go to Home Page
      </Button>
    </FinishContainer>
  );
}

export default Final;
