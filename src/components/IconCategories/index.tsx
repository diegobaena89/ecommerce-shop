import {
  TShirt,
  Pants,
  Bag,
  Sneaker,
  Watch,
  BaseballCap,
  Icon,
  List,
} from "@phosphor-icons/react";
import { IconCategoriesComponent, IconRounded } from "./styles";
import React from "react";
import { Text } from "@chakra-ui/react";

function IconCategories() {
  const iconsPhosphor: { [key: string]: Icon } = {
    TShirt: TShirt,
    Jeans: Pants,
    Bag: Bag,
    Shoes: Sneaker,
    Watches: Watch,
    Cap: BaseballCap,
    List: List,
  };

  const iconSize = 24;

  return (
    <IconCategoriesComponent>
      {Object.keys(iconsPhosphor).map((icon: string, index: number) => (
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
          key={index}
        >
          <IconRounded key={index}>
            {React.createElement(iconsPhosphor[icon], {
              fontSize: iconSize,
            })}
          </IconRounded>
          <Text fontWeight={"semibold"} fontSize={"sm"}>
            {icon}
          </Text>
        </div>
      ))}
    </IconCategoriesComponent>
  );
}

export default IconCategories;
