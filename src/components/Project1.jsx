import React from "react";
//chakra ui
import {
  Box,
  HStack,
  Image,
  Progress,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
//icon
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
//image
import modeling from "../img/modeling.webp";

const Project1 = () => {
  const color = useColorModeValue("light", "dark");

  return (
    <VStack h={"95vh"} position={{lg:"relative"}}>
      <HStack
        w={"100%"}
        color={color}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        alignItems={{ base: "flex-start" }}
        justifyContent={"center"}
      >
        <HStack
          w={{ base: "100%", lg: "40%" }}
          mt={{ base: "80px", lg: "0" }}
          h={{ base: "10vh", lg: "100vh" }}
        >
          <HStack ml={{ base: "0", lg: "80px" }}>
            <Box w={"100px"} h={"2px"} bg={"gray"}></Box>
            <Text>01</Text>
          </HStack>
          <VStack ml={"40px"}>
            <Text fontSize={{ base: "4xl", lg: "8xl", md: "5xl" }}>Modeling</Text>
            <Box w={"100%"} h={"2px"} bg={"gray"}></Box>
            <HStack fontSize={"4xl"} color={"gray"} opacity={0.8}>
              <AiFillHtml5 />
              <BiLogoCss3 />
              <BiLogoJavascript />
            </HStack>
          </VStack>
        </HStack>
        <Stack
          ml={{ base: "0", lg: "50px" }}
          w={{ base: "100%", lg: "50%" }}
          h={{ base: "30vh", lg: "100vh" }}
          alignItems={"center"}
          justifyContent={"center"}
          mt={{base:"80px"}}
        >
          <Image
            ml={{ lg: "100px" }}
            zIndex={2}
            boxShadow="dark-lg"
            src={modeling}
            w={"auto"}
            height={{ base: "220px", md: "325px", lg: "400px" }}
          />
          <Box
            opacity={0.3}
            w={"87%"}
            height={{ base: "20px",sm:"220px", md: "325px", lg: "400px" }}
            bg={"gray"}
            mb={{sm:"80px"}}
          ></Box>
        </Stack>
      </HStack>
      <Progress
        borderRadius={"5px"}
        position={"absolute"}
        w={{ base: "220px", md: "500px" }}
        h={"5px"}
        colorScheme="gray"
        bottom={{ base: "145px", md: "200px" }}
        value={25}
      ></Progress>
    </VStack>
  );
};

export default Project1;
