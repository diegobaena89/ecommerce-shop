import { IconButton, Link } from "@chakra-ui/react";
import { House, ShoppingCart, User } from "@phosphor-icons/react";
import { ShopContext } from "../../../../context/ShopContext";
import { useContext } from "react";
import { IconContainer } from "./styles";

function IconHeader() {
  const { listProducts } = useContext(ShopContext)!;
  return (
    <IconContainer>
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
    </IconContainer>
  );
}

export default IconHeader;
