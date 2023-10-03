import {
  CardBody,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Box,
} from "@chakra-ui/react";
import { Heart, Star } from "@phosphor-icons/react";

interface CardProps {
  key: number;
  product: string;
  rate: number;
  price: number;
}

function CardComponent({ key, product, rate, price }: CardProps): JSX.Element {
  return (
    <Card
      maxW="280px"
      borderRadius={12}
      boxShadow="5px 5px 5px rgba(0, 0, 0, 0.1)"
      marginBottom={10}
      cursor={"pointer"}
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <CardBody padding={0}>
        <Image
          src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
          alt="Green double couch with wooden legs"
          borderRadius="md"
        />
        <Stack mt="6" spacing="3">
          <Box padding="10px 15px 20px">
            <Heading fontWeight={"semibold"} fontSize={18} padding="0 0 10px">
              {product}
            </Heading>
            <Box display={"flex"} alignItems={"center"}>
              <Star fontSize={20} weight="fill" color="#edc12f" />
              <Text fontSize="sm" fontWeight={"bold"} marginLeft={2}>
                {rate}
              </Text>
            </Box>
            <Box
              display={"flex"}
              justifyContent={"space-between"}
              alignItems={"center"}
            >
              <Text marginTop={2} fontSize={20} fontWeight={"medium"}>
                U$ {price}
              </Text>
              <Heart cursor={"pointer"} fontSize={25} />
            </Box>
          </Box>
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardComponent;
