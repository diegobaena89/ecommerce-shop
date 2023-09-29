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

function Header() {
  return (
    <HeaderComponent>
      <Box>
        <Text align={"center"} p={1} fontSize={"sm"}>
          20% Discount this week. Buy now!
        </Text>
      </Box>
      <Divider />
      <NavBar>
        <div className="logo">
          Logo
          <InputGroup width={"80%"}>
            <InputLeftElement pointerEvents="none">
              <MagnifyingGlass fontSize={25} color={"#c2c2c2"} />
            </InputLeftElement>
            <Input
              borderRadius={20}
              width={"90%"}
              type="tel"
              placeholder="Search product or brand here"
            />
          </InputGroup>
        </div>
        <div className="icons">
          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Done"
            fontSize={25}
            marginRight={3}
            icon={<Star />}
          />

          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Done"
            fontSize={25}
            marginRight={3}
            icon={<ShoppingCart />}
          />

          <IconButton
            isRound={true}
            variant="solid"
            colorScheme="gray"
            aria-label="Done"
            fontSize={25}
            marginRight={3}
            icon={<User />}
          />
        </div>
      </NavBar>
    </HeaderComponent>
  );
}

export default Header;
