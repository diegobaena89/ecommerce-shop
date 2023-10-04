import {
  CardBody,
  Card,
  Image,
  Stack,
  Heading,
  Text,
  Box,
  Divider,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Star } from "@phosphor-icons/react";
import { nameShortener } from "../../../utils/nameShortener";
import { useContext, useState } from "react";
import { ShopContext } from "../../../context/ShopContext";

interface CardProps {
  id: number;
  product: string;
  rate: number;
  price: number;
  image: string;
  description: string;
}

function CardImage({ image, product }: { image: string; product: string }) {
  return (
    <Box
      width="100%"
      display="flex"
      alignItems="center"
      justifyContent="center"
      minHeight="58%"
    >
      <Image
        src={image}
        alt={product}
        borderRadius="md"
        width="50%"
        height="50%"
      />
    </Box>
  );
}

function CardContent({
  product,
  rate,
  price,
  id,
}: {
  product: string;
  rate: number;
  price: number;
  id: number;
}) {
  const { setListProducts } = useContext(ShopContext)!;
  const toast = useToast();

  const [lastAddedProduct, setLastAddedProduct] = useState<number>(0);

  function addProductToCart(id: number) {
    setListProducts((listProducts: any) => {
      if (Array.isArray(listProducts)) {
        if (id !== lastAddedProduct) {
          toast({
            title: "Product added in cart.",
            status: "success",
            isClosable: true,
            position: "top-right",
          });
          setLastAddedProduct(id);
        }
        return [...listProducts, id];
      }
      return [id];
    });
  }

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      alignItems="flex-start"
      minHeight="142px"
    >
      <Heading fontWeight="semibold" fontSize={14} padding="0 0 10px">
        {nameShortener(product, 50)}
      </Heading>
      <Box display="flex" alignItems="center">
        <Star fontSize={20} weight="fill" color="#edc12f" />
        <Text fontSize="sm" fontWeight="bold" marginLeft={2}>
          {rate}
        </Text>
      </Box>
      <Box
        marginTop="auto"
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        width="100%"
      >
        <Text marginTop={2} fontSize={20} fontWeight="medium">
          U$ {price}
        </Text>
        <Button
          size={"sm"}
          colorScheme="red"
          onClick={() => addProductToCart(id)}
        >
          Add to cart
        </Button>
      </Box>
    </Box>
  );
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
      height="420px"
      borderRadius={12}
      boxShadow="5px 5px 5px rgba(0, 0, 0, 0.1)"
      marginBottom={10}
      marginRight={12}
      cursor="pointer"
      _hover={{
        transform: "scale(1.02)",
        transition: "transform 0.3s ease-in-out",
      }}
    >
      <CardBody padding={4}>
        <CardImage image={image} product={product} />
        <Divider />
        <Stack mt="6" spacing="3">
          <CardContent product={product} rate={rate} price={price} id={id} />
        </Stack>
      </CardBody>
    </Card>
  );
}

export default CardComponent;
