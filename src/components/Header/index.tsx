import { Box, Divider, Text } from "@chakra-ui/react";
import { HeaderComponent, NavBar } from "./styles";
import BreadcrumbComponent from "../Breadcrumb/Breadcrumb";
import IconHeader from "./components/IconHeader";
import SearchBar from "./components/SearchBar";

function Header() {
  const logo = "Shopify".toUpperCase();

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
          <SearchBar />
        </div>
        <IconHeader />
      </NavBar>
      <BreadcrumbComponent />
    </HeaderComponent>
  );
}

export default Header;
