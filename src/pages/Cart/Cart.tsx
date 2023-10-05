import { useContext, useEffect, useState } from "react";
import { CartContainer } from "./styles";
import { Box, Card, CardHeader, Heading, Spinner } from "@chakra-ui/react";
import { Product, ShopContext } from "../../context/ShopContext";
import { fetchProductById } from "../../api/api";
import ListedItem from "./components/ListedItems";
import ValueContainer from "./components/Valuecontainer";

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
        <Spinner size={"xl"} />
      )}
    </CartContainer>
  );
}

export default CartPage;
