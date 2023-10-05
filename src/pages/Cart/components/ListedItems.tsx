import {
  CardBody,
  Stack,
  Card,
  Image,
  Heading,
  Text,
  CardFooter,
} from "@chakra-ui/react";
import { Trash } from "@phosphor-icons/react";
import { setDeleteItem } from "../../../utils/deleteCartItem";
import { Product } from "../../../context/ShopContext";

function ListedItem({
  listProducts,
  cartProducts,
}: {
  listProducts: [];
  cartProducts: Product[];
}) {
  return (
    <CardBody flex="0 0 50%">
      <Stack spacing="4">
        {cartProducts.map((item: Product) => (
          <Card
            key={item.id}
            direction={{ base: "column", sm: "row" }}
            overflow="hidden"
            variant="outline"
          >
            <Image
              objectFit="contain"
              src={item.image}
              maxW={"150px"}
              maxH={"150px"}
              alt={item.title}
              padding="20px"
            />

            <Stack display={"flex"} flexDirection={"row"} width={"100%"}>
              <CardBody>
                <Heading size="md">{item.title}</Heading>
                <Text fontSize={"smaller"}>{item.description}</Text>
              </CardBody>

              <CardFooter>
                <Trash
                  fontSize={20}
                  color="red"
                  cursor={"pointer"}
                  onClick={() => setDeleteItem(item.id, listProducts)}
                />
              </CardFooter>
            </Stack>
          </Card>
        ))}
      </Stack>
    </CardBody>
  );
}

export default ListedItem;
