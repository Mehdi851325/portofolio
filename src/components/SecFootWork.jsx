import React from "react";
//Chakra Ui
import { Box, Image, Text, VStack } from "@chakra-ui/react";
//image
import portofolio from "../img/portfolio.webp";

const SecFootWork = () => {
  return (
    <>
      <VStack mt={20}>
        <Box>
          <Box w={1} h={"100px"} bg={"gray"}></Box>
        </Box>
        <Box>
          <Text fontSize={"4xl"}>Portofolio</Text>
        </Box>
        <Box>
          <Text color={"gray"} fontSize={"xl"}>
            Chakra Ui / React / GSAP / Swiper{" "}
          </Text>
        </Box>
        <Box>
          <Image
            src={portofolio}
            w={"auto"}
            h={{sm:'220px',md:'335px',lg:'400px'}}
            boxShadow="dark-lg"
            mb={10}
          />
        </Box>
      </VStack>
    </>
  );
};

export default SecFootWork;
