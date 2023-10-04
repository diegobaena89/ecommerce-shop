import {
  Box,
  Divider,
  IconButton,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from "@chakra-ui/react";
import { HeaderComponent, NavBar } from "./styles";
import {
  MagnifyingGlass,
  ShoppingCart,
  Star,
  User,
} from "@phosphor-icons/react";
import React, { useContext, useEffect } from "react";
import { ShopContext } from "../../context/ShopContext";

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
          <IconButton
            isRound={true}
            variant="outline"
            color={"#b5b5b5"}
            aria-label="Done"
            fontSize={22}
            marginRight={3}
            icon={<Star />}
          />

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
    </HeaderComponent>
  );
}

export default Header;
