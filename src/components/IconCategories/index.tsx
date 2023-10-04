import {
  TShirt,
  Watch,
  Icon,
  TextColumns,
  Desktop,
  Dress,
} from "@phosphor-icons/react";
import { IconCategoriesComponent, IconRounded } from "./styles";
import React, { useContext } from "react";
import { Box, Text } from "@chakra-ui/react";
import { ShopContext } from "../../context/ShopContext";

function IconCategories() {
  const iconsPhosphor: { [key: string]: Icon } = {
    "men's clothing": TShirt,
    "women's clothing": Dress,
    jewelery: Watch,
    electronics: Desktop,
    All: TextColumns,
  };

  const iconSize = 24;
  const { setCategory } = useContext(ShopContext)!;

  return (
    <IconCategoriesComponent>
      {Object.keys(iconsPhosphor).map((icon: string, index: number) => (
        <Box
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          key={index}
          onClick={() => (icon === "All" ? setCategory("") : setCategory(icon))}
        >
          <IconRounded key={index}>
            {React.createElement(iconsPhosphor[icon], {
              fontSize: iconSize,
            })}
          </IconRounded>
          <Text fontWeight={"semibold"} fontSize={"sm"}>
            {icon}
          </Text>
        </Box>
      ))}
    </IconCategoriesComponent>
  );
}

export default IconCategories;
