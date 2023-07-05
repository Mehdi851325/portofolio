import React from "react";
//chakra ui
import { Box, Flex, Text } from "@chakra-ui/react";

const SecHeaderWork = () => {
  return (
    <>
      <Flex
        bg={"bg"}
        ml={50}
        pb={50}
        pt={50}
        w={"95%"}
        flexDirection={"column"}
        justifyContent={"flex-start"}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Text fontSize={{base:"2xl",sm:'3xl',md:'5xl',lg:'6xl'}}>Crafted with love.</Text>
          <Box mt={5} ml={10} w={100} h={{sm:'2px',md:'2.5px',xl:'3.5px'}} bg={"gray.500"}></Box>
        </Box>
        <Box>
          <Text fontSize={{base:"md",lg:"2xl"}}>Recent projects.</Text>
        </Box>
      </Flex>
    </>
  );
};

export default SecHeaderWork;
