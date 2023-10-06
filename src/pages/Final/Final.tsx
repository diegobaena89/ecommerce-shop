import { Heading, Text, Image } from "@chakra-ui/react";
import { FinishContainer } from "./styles";

function Final() {
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
    </FinishContainer>
  );
}

export default Final;
