import React from "react";
//chakra ui
import {
  Box,
  HStack,
  Stack,
  Image,
  Progress,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
//icon
import { FaReact, FaSass } from "react-icons/fa";
import { SiChakraui } from "react-icons/si";
//image
import portofolio from "../img/portfolio.webp";

const Project4 = () => {
  const color = useColorModeValue("light", "dark");

  return (
    <VStack h={"95vh"} position={{ lg: "relative" }}>
      <HStack
        w={"100%"}
        color={color}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        alignItems={{ base: "flex-start" }}
      >
        <HStack
          w={{ base: "100%", lg: "40%" }}
          mt={{ base: "60px", lg: "0" }}
          h={{ base: "10vh", lg: "100vh" }}
          pb={{lg:"50px",'2xl':"0px"}}
        >
          <HStack ml={{ base: "0", lg: "50px", "2xl": "80px" }}>
            <Box w={"100px"} h={"2px"} bg={"gray"}></Box>
            <Text>04</Text>
          </HStack>
          <VStack ml={{lg:"20px",'2xl':"40px"}}>
            <Text fontSize={{ base: "4xl", lg: "6xl", md: "5xl", "2xl": "8xl" }}>Mehdi</Text>
            <Box w={"100%"} h={"2px"} bg={"gray"}></Box>
            <HStack fontSize={"4xl"} color={"gray"} opacity={0.8}>
              <SiChakraui />
              <FaReact />
            </HStack>
          </VStack>
        </HStack>
        <Stack
          ml={{ base: "0", '2xl': "50px",lg:"30px" }}
          w={{ base: "100%", lg: "50%" }}
          h={{ base: "30vh", lg: "100vh" }}
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ base: "80px", lg: "0" }}
          pb={{lg:"50px",'2xl':"0px"}}
        >
          <Image
            ml={{ lg: "100px" }}
            zIndex={2}
            boxShadow="-10px 10px 10px gray"
            w={"auto"}
            height={{ base: "180px", md: "325px", lg: "300px", "2xl": "400px" }}
            mt={{ md: "100px", lg: "0" }}
            src={portofolio}
          />
        </Stack>
      </HStack>
      <Progress
        borderRadius={"5px"}
        position={"fixed"}
        w={{ base: "220px", md: "500px" }}
        h={"5px"}
        colorScheme="gray"
        bottom={{ base: "135px",sm:"50px", md: "50px",lg:"0px" }}
        value={100}
      ></Progress>
    </VStack>
  );
};

export default Project4;
