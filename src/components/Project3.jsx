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
import { BiLogoRedux, BiLogoJavascript } from "react-icons/bi";
//image
import timovito from "../img/timovito.webp";

const Project3 = () => {
  const color = useColorModeValue("light", "dark");

  return (
    <VStack h={"95vh"} position={{ lg: "relative" }}>
      <HStack
        w={"100%"}
        color={color}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        alignItems={{ base: "flex-start" }}
        justifyContent={"center"}
      >
        <HStack
          w={{ base: "100%", lg: "40%" }}
          mt={{ base: "60px", lg: "0" }}
          h={{ base: "10vh", lg: "100vh" }}
        >
          <HStack ml={{ base: "0", lg: "80px" }}>
            <Box w={"100px"} h={"2px"} bg={"gray"}></Box>
            <Text>03</Text>
          </HStack>
          <VStack ml={"40px"}>
            <Text fontSize={{ base: "4xl", lg: "8xl", md: "5xl" }}>
              TimovieTo
            </Text>
            <Box w={"100%"} h={"2px"} bg={"gray"}></Box>
            <HStack fontSize={"4xl"} color={"gray"} opacity={0.8}>
              <FaSass />
              <FaReact />
              <BiLogoRedux />
            </HStack>
          </VStack>
        </HStack>
        <Stack
          ml={{ base: "0", lg: "50px" }}
          w={{ base: "100%", lg: "50%" }}
          h={{ base: "30vh", lg: "100vh" }}
          alignItems={"center"}
          justifyContent={"center"}
          mt={{ base: "80px" }}
        >
          <Image
            ml={{ lg: "100px" }}
            boxShadow="dark-lg"
            zIndex={2}
            w={"auto"}
            height={{ base: "220px", md: "325px", lg: "400px" }}
            src={timovito}
          />
          <Box
            opacity={0.5}
            w={"87%"}
            height={{ base: "20px",sm:"220px", md: "325px", lg: "400px" }}
            mb={{sm:"80px"}}
            bg={"lightblue"}
          ></Box>
        </Stack>
      </HStack>
      <Progress
        borderRadius={"5px"}
        position={"absolute"}
        w={{ base: "220px", md: "500px" }}
        h={"5px"}
        colorScheme="gray"
        bottom={{ base: "135px", md: "200px" }}
        value={75}
      ></Progress>
    </VStack>
  );
};

export default Project3;
