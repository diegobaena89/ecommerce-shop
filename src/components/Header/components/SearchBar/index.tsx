import { Input, InputGroup, InputLeftElement } from "@chakra-ui/react";
import { MagnifyingGlass } from "@phosphor-icons/react";
import { useContext } from "react";
import { ShopContext } from "../../../../context/ShopContext";

function SearchBar() {
  const { setCategory } = useContext(ShopContext)!;

  return (
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
  );
}

export default SearchBar;
