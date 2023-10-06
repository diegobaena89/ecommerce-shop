import { useContext, useEffect, useState } from "react";
import { CartContainer, EmptyCart } from "./styles";
import { Box, Button, Card, CardHeader, Heading, Text } from "@chakra-ui/react";
import { Product, ShopContext } from "../../context/ShopContext";
import { fetchProductById } from "../../api/api";
import ListedItem from "./components/ListedItems";
import ValueContainer from "./components/Valuecontainer";
import { useNavigate } from "react-router-dom";

function CartPage() {
  const { listProducts } = useContext(ShopContext)!;
  const [cartProducts, setCartProducts] = useState<Product[]>([]);
  const emptyText = "You didn't shop anything yet! :)";
  const navigate = useNavigate();
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
        console.error("Error:", error);
      }
    };

    if (listProducts.length > 0) {
      fetchCartProducts();
    }
  }, [listProducts]);

  return (
    <CartContainer>
      {cartProducts.length !== 0 ? (
        <Box>
          <Box>
            <Card>
              <CardHeader>
                <Heading size="md">Your Cart</Heading>
              </CardHeader>

              <Box display={"flex"}>
                <ListedItem
                  listProducts={listProducts}
                  cartProducts={cartProducts}
                />
                <ValueContainer cartProducts={cartProducts} />
              </Box>
            </Card>
          </Box>
        </Box>
      ) : (
        <EmptyCart>
          <Heading paddingBottom={2}>{emptyText}</Heading>
          <Text>Go back to home page and choose your product!</Text>
          <Button
            marginTop={4}
            colorScheme="blue"
            size="sm"
            onClick={() => navigate("/")}
          >
            Go to Home Page
          </Button>
        </EmptyCart>
      )}
    </CartContainer>
  );
}

export default CartPage;
