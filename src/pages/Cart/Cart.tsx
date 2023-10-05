import { useContext, useEffect, useState } from "react";
import { CartContainer } from "./styles";
import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Heading,
  Stack,
  Text,
  Image,
  Spinner,
  Divider,
  IconButton,
  Icon,
} from "@chakra-ui/react";
import { Product, ShopContext } from "../../context/ShopContext";
import { fetchProductById } from "../../api/api";
import { nameShortener } from "../../utils/nameShortener";
import { calculateTotal } from "../../utils/calculateTotal";
import { Trash } from "@phosphor-icons/react";

function CartPage() {
  const { listProducts } = useContext(ShopContext)!;
  const [cartProducts, setCartProducts] = useState<Product[]>([]);

  useEffect(() => {
    const fetchCartProducts = async () => {
      try {
        const productDetailsPromises = listProducts.map(async (productId) => {
          const productDetail = await fetchProductById(productId);
          return productDetail;
        });

        const cartProductDetails = await Promise.all(productDetailsPromises);

        setCartProducts(cartProductDetails);
      } catch (error) {
        console.error("Erro ao buscar detalhes dos produtos:", error);
      }
    };

    if (listProducts.length > 0) {
      fetchCartProducts();
    }
  }, [listProducts]);

  function setDeleteItem(id: number) {
    console.log("deletou o item", id);
    const newListProducts = listProducts.filter((item) => item !== id);
    localStorage.setItem("shopping_cart", JSON.stringify(newListProducts));
    window.location.reload();
  }

  return (
    <CartContainer>
      {cartProducts ? (
        <Box>
          <Box>
            <Card>
              <CardHeader>
                <Heading size="md">Your Cart</Heading>
              </CardHeader>

              <Box display={"flex"}>
                <CardBody flex="0 0 50%">
                  <Stack spacing="4">
                    {cartProducts.map((item: any) => (
                      <Card
                        key={item.id}
                        direction={{ base: "column", sm: "row" }}
                        overflow="hidden"
                        variant="outline"
                      >
                        <Image
                          objectFit="cover"
                          src={item.image}
                          maxW={"150px"}
                          maxH={"150px"}
                          alt={item.title}
                          padding="20px"
                        />

                        <Stack
                          display={"flex"}
                          flexDirection={"row"}
                          width={"100%"}
                        >
                          <CardBody>
                            <Heading size="md">{item.title}</Heading>
                            <Text fontSize={"smaller"}>{item.description}</Text>
                          </CardBody>

                          <CardFooter>
                            <Trash
                              fontSize={20}
                              color="red"
                              cursor={"pointer"}
                              onClick={() => setDeleteItem(item.id)}
                            />
                          </CardFooter>
                        </Stack>
                      </Card>
                    ))}
                  </Stack>
                </CardBody>
                <CardBody>
                  <Card overflow="hidden" variant="outline" padding="20px">
                    <Heading size={"md"}>Checkout</Heading>
                    <Box padding="15px 0">
                      {cartProducts.map((item: any) => (
                        <>
                          <Stack key={item.id} flexDirection={"column"}>
                            <Text>{nameShortener(item.title, 35)}</Text>
                            <Text align={"end"}>U$ {item.price}</Text>
                          </Stack>
                          <Divider padding="10px 0" />
                        </>
                      ))}
                    </Box>
                    <Text align={"end"} padding="10px 0">
                      Total: {calculateTotal(cartProducts)}
                    </Text>
                    <Button marginTop={3} colorScheme="green" size={"md"}>
                      Finish
                    </Button>
                  </Card>
                </CardBody>
              </Box>
            </Card>
          </Box>
        </Box>
      ) : (
        <Spinner size={"xl"} />
      )}
    </CartContainer>
  );
}

export default CartPage;
