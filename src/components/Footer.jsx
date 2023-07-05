import React, { useRef } from "react";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
//chakra ui
import { ArrowForwardIcon } from "@chakra-ui/icons";
import {
  Box,
  HStack,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
//animation
import { motion } from "framer-motion";
import { gsap } from "gsap";

const Footer = () => {
  const bg = useColorModeValue(
    "linear-gradient(to right, #000000, #434343);",
    "linear-gradient(to right, #1a202c, #292e49);"
  );
  const bgView = useColorModeValue("gray", "dark");
  let buttonView = useRef(null);
  const hoverButtonHandler = () => {
    gsap.to(buttonView, {
      width: "200px",
      borderRadius: "20px",
      duration: 0.5,
      background: bgView,
      opacity: 1,
    });
  };
  const hoverButtonLeave = () => {
    gsap.to(buttonView, {
      width: "45px",
      borderRadius: "50%",
      duration: 0.5,
      background: "gray",
      opacity: 0.3,
    });
  };
  return (
    <VStack bg={bg} pt={20} w={"100%"} minH={'40vh'} color={"white"}>
      <VStack mb={20}>
        <Text fontSize={"4xl"}>Let's work together.</Text>
        <Text fontSize={"xl"}>send massage for freelance work.</Text>
      </VStack>
      <Stack mb={"90px"}>
        <Box
          onMouseEnter={hoverButtonHandler}
          onMouseLeave={hoverButtonLeave}
          cursor={"pointer"}
          w={"100%"}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
        >
          <Box
            ref={(el) => (buttonView = el)}
            opacity={0.3}
            left={"-5"}
            zIndex={1}
            w={"45px"}
            h={"45px"}
            borderRadius={"50%"}
            bg={"gray"}
            position={"absolute"}
          ></Box>
          <Text zIndex={2} fontWeight={"bold"} fontSize={"lg"}>
            SEND MASSAGE
          </Text>
          <Box zIndex={3} as={motion.div} whileHover={{ scale: 1.3 }}>
            <ArrowForwardIcon w={10} boxSize={6} ml={5} />
          </Box>
        </Box>
      </Stack>
      <HStack mt={50}>
        <Text fontSize={"sm"}>Mehdi Khakbaz | </Text>
        <Text cursor={"pointer"}>
          <FaTelegram />
        </Text>
        <Text cursor={"pointer"}>
          <AiFillInstagram />
        </Text>
        <Text cursor={"pointer"}>
          <AiFillGithub />
        </Text>
      </HStack>
    </VStack>
  );
};

export default Footer;
