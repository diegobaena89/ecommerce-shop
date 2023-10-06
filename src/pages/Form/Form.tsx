import { Box } from "@chakra-ui/react";
import { FormContainer } from "./styles";
import Infos from "./components/Infos";
import Checkout from "./components/Checkout";

function Form() {
  return (
    <FormContainer>
      <Box display={"flex"} justifyContent={"space-between"}>
        <Infos />
        <Checkout />
      </Box>
    </FormContainer>
  );
}

export default Form;
