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
  id: number;
  product: string;
  rate: number;
  price: number;
  image: string;
  description: string;
}

function CardComponent({
  id,
  product,
  rate,
  price,
  image,
}: CardProps): React.JSX.Element {
  return (
    <Card
      maxWidth="280px"
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
        <Box
          width={"100%"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          minHeight={"55%"}
        >
          <Image
            src={image}
            alt={product}
            borderRadius="md"
            style={{
              width: "50%",
              height: "50%",
            }}
          />
        </Box>
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
