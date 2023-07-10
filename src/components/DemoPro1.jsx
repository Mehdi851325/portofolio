import React from "react";
//chakra ui
import { Box, Image, Stack, Text, VStack, useColorModeValue } from "@chakra-ui/react";
//animation
import { motion } from "framer-motion";
import {
  slideTop,
  slideCenter,
  slideLeft,
  slideRight,
  titleAnimation,
  lineAnimate,
  seeDemo,
} from "../animation";
//icon
import { AiFillHtml5 } from "react-icons/ai";
import { BiLogoCss3, BiLogoJavascript } from "react-icons/bi";
//component
import NavBar from "./NavBar";
//image
import modeling from "../img/modeling.webp";

const DemoPro1 = () => {
  const color = useColorModeValue( "2px dotted black","2px dotted white");
  return (
    <VStack position={"relative"}  >
      <Stack
        as={motion.div}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        h={"100vh"}
        bg={"black"}
        zIndex={1}
        alignItems={"flex-end"}
        justifyContent={"center"}
        variants={slideTop}
        initial="hidden"
        animate="show"
      >
        <Text
          className="text-jop"
          fontWeight={"semibold"}
          color={"white"}
          fontSize={"8xl"}
        >
          Modeling
        </Text>
      </Stack>
      <Stack
        as={motion.div}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        h={"100vh"}
        bg={"#363636"}
        zIndex={2}
        alignItems={"flex-end"}
        justifyContent={"center"}
        variants={slideCenter}
        initial="hidden"
        animate="show"
      >
        <Text
          className="text-jop"
          fontWeight={"semibold"}
          color={"gray.100"}
          fontSize={"8xl"}
        >
          01
        </Text>
      </Stack>
      <Stack
        as={motion.div}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        h={"100vh"}
        bg={"#3d3d3d"}
        display={"flex"}
        flexDirection={"column"}
        zIndex={3}
        alignItems={"flex-end"}
        justifyContent={"center"}
        variants={slideLeft}
        initial="hidden"
        animate="show"
        color={"gray.100"}
        fontSize={"45px"}
      >
        <AiFillHtml5 />
        <BiLogoCss3 />
        <BiLogoJavascript />
      </Stack>
      <Stack
        as={motion.div}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        h={"100vh"}
        bg={"#bbbbbb"}
        display={"flex"}
        flexDirection={"column"}
        zIndex={4}
        alignItems={"flex-end"}
        justifyContent={"center"}
        variants={slideRight}
        initial="hidden"
        animate="show"
        color={"gray.100"}
        fontSize={"45px"}
      ></Stack>
      <VStack w={'100%'} minH={"100vh"} >
        <NavBar />
        <Stack>
          <Image src={modeling} mt={{base:"100px" ,md:"10px"}} />
        </Stack>
        <VStack mt={"auto"}>
          <Stack overflow={"hidden"}>
            <Text
              as={motion.p}
              variants={titleAnimation}
              initial="hidden"
              animate="show"
              fontWeight={"medium"}
              mb={{base:"30px"}}
              fontSize={{ base: "2xl", md: "4xl", lg: "5xl", "2xl": "6xl" }}
            >
              Modeling website
            </Text>
          </Stack>
          <Stack>
            <Text as={motion.p}
              variants={seeDemo}
              initial="hidden"
              animate="show" mb={{base:"30px"}} cursor={"pointer"} fontWeight={"normal"} fontSize={"2xl"}>
              See demo
            </Text>
          </Stack>
          <Stack>
            <Box
              as={motion.div}
              variants={lineAnimate}
              initial="hidden"
              animate="show"
              w={"3px"}
              h={"70px"}
              bg={"gray"}
            ></Box>
          </Stack>
        </VStack>
      </VStack>
      <Box
        w={"900px"}
        h={"900px"}
        borderRadius={"50%"}
        bg={"transparent"}
        border={color}
        position={"fixed"}
        bottom={"-50%"}
        zIndex={-1}
        display={{ lg: "flex", base: "none" }}
      ></Box>
    </VStack>
  );
};

export default DemoPro1;
