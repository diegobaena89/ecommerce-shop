import {
  Box,
  Breadcrumb,
  BreadcrumbItem,
  Divider,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Link,
  Text,
  BreadcrumbLink,
} from "@chakra-ui/react";
import { HeaderComponent, NavBar } from "./styles";
import {
  House,
  MagnifyingGlass,
  ShoppingCart,
  User,
} from "@phosphor-icons/react";
import React, { useContext } from "react";
import { ShopContext } from "../../context/ShopContext";
import { ChevronRightIcon } from "@chakra-ui/icons";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";

function Header() {
  const logo = "Shopify".toUpperCase();
  const { listProducts } = useContext(ShopContext)!;
  const { setCategory } = useContext(ShopContext)!;

  return (
    <HeaderComponent>
      <Box backgroundColor={"#121213"}>
        <Text align={"center"} p={1} fontSize={"sm"} color={"#fff"}>
          20% Discount this week. Buy now!
        </Text>
      </Box>
      <Divider />
      <NavBar>
        <div className="logo">
          <p>{logo}</p>
          <InputGroup width={"80%"}>
            <InputLeftElement pointerEvents="none">
              <MagnifyingGlass fontSize={25} color={"#c2c2c2"} />
            </InputLeftElement>
            <Input
              borderRadius={20}
              width={"90%"}
              type="tel"
              placeholder="Search by category here"
              onChange={(event) => setCategory(event.target.value)}
            />
          </InputGroup>
        </div>

        <div className="icons">
          <Link href="/">
            <IconButton
              isRound={true}
              variant="outline"
              color={"#b5b5b5"}
              aria-label="Done"
              fontSize={22}
              marginRight={3}
              icon={<House />}
            />
          </Link>

          <Link href="/cart">
            <div style={{ position: "relative" }}>
              <IconButton
                isRound={true}
                variant="outline"
                color={"#c2c2c2"}
                aria-label="Done"
                fontSize={22}
                marginRight={3}
                icon={<ShoppingCart />}
              />
              {listProducts?.length > 0 && (
                <div
                  style={{
                    position: "absolute",
                    bottom: "-2px",
                    right: "6px",
                    backgroundColor: "red",
                    borderRadius: "50%",
                    width: "18px",
                    height: "18px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    color: "white",
                  }}
                >
                  {listProducts?.length}
                </div>
              )}
            </div>
          </Link>

          <IconButton
            isRound={true}
            variant="outline"
            color={"#c2c2c2"}
            aria-label="Done"
            fontSize={22}
            marginRight={3}
            icon={<User />}
          />
        </div>
      </NavBar>

      <BreadcrumbComponent />
    </HeaderComponent>
  );
}

export default Header;
