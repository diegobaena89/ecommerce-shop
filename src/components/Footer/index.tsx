import { Box, Text } from "@chakra-ui/react";
import { FooterComponent } from "./styles";
import { InstagramLogo, TwitterLogo, YoutubeLogo } from "@phosphor-icons/react";

function Footer() {
  return (
    <FooterComponent>
      <Box className="layer">
        <Box className="image">
          <Text fontSize={32} className="text">
            "Let's Shop Beyond Boundaries"
          </Text>
        </Box>
      </Box>
      <Box display={"flex"} flexDirection={"column"} className="license">
        <Box
          display={"flex"}
          flexDirection={"row"}
          justifyContent={"space-around"}
          w={"7%"}
          p={2}
        >
          <YoutubeLogo cursor={"pointer"} fontSize={20} />
          <InstagramLogo cursor={"pointer"} fontSize={20} />
          <TwitterLogo cursor={"pointer"} fontSize={20} />
        </Box>
        <Text fontSize={14} p={1}>
          @2023 - All rights reserved.
        </Text>
      </Box>
    </FooterComponent>
  );
}

export default Footer;
