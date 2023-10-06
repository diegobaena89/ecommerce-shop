import {
  Card,
  Heading,
  CardBody,
  FormControl,
  FormLabel,
  Input,
  Box,
} from "@chakra-ui/react";
import PaymentCard from "./Payments";

function Infos() {
  return (
    <Card width={"60%"} paddingBottom="26px">
      <Heading size="md" paddingBottom={1} paddingLeft={4}>
        Personal infos
      </Heading>
      <CardBody>
        <FormControl paddingBottom={4}>
          <FormLabel margin={0} fontSize={16}>
            Name
          </FormLabel>
          <Input type="text" />
        </FormControl>

        <FormControl paddingBottom={4}>
          <FormLabel margin={0} fontSize={16}>
            Email address
          </FormLabel>
          <Input type="email" />
        </FormControl>

        <FormControl paddingBottom={4}>
          <FormLabel margin={0} fontSize={16}>
            Address
          </FormLabel>
          <Input type="text" />
        </FormControl>

        <Box display={"flex"} paddingBottom={4}>
          <FormControl marginRight={4}>
            <FormLabel margin={0} fontSize={16}>
              CEP
            </FormLabel>
            <Input type="number" />
          </FormControl>

          <FormControl>
            <FormLabel margin={0} fontSize={16}>
              City
            </FormLabel>
            <Input type="text" />
          </FormControl>
        </Box>
        <Heading size="md" paddingTop={6} paddingBottom={6}>
          Payment method
        </Heading>

        <Box display={"flex"} width={"85%"} justifyContent={"space-between"}>
          <PaymentCard icon="Pix" paymentMethod="Pix" />
          <PaymentCard icon="Card" paymentMethod="Credit card" />
          <PaymentCard icon="Transference" paymentMethod="Transference" />
        </Box>
      </CardBody>
    </Card>
  );
}

export default Infos;
