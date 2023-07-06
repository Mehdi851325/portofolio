import React, { useEffect, useRef } from "react";
//image
import profile from "../img/pro1.webp";
//animation
import { gsap } from "gsap";
import { motion } from "framer-motion";
//chakra ui
import {
  Box,
  Flex,
  HStack,
  Image,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Link } from "react-router-dom";

const Landing = () => {
  const bgView = useColorModeValue("gray", "dark");
  let image = useRef(null);
  let linepro = useRef(null);
  let linepro1 = useRef(null);
  let buttonView = useRef(null);
  const hoverButtonHandler = () => {
    gsap.to(buttonView, {
      width: "160px",
      borderRadius: "20px",
      duration: 0.5,
      background: bgView,
      opacity: 1,
    });
  };
  // const hoverButtonLeave = () => {
  //   gsap.to(buttonView, {
  //     width: "45px",
  //     borderRadius: "50%",
  //     duration: 0.5,
  //     background: "gray",
  //     opacity: 0.3,
  //   });
  // };
  useEffect(() => {
    gsap.from(image, {
      y: 20,
      ease: "sine",
      delay: 2,
    });
    gsap.to(image, {
      duration: 1.5,
      y: 0,
      ease: "sine",
      delay: 2,
      repeat: -1,
      yoyo: true,
    });
    gsap.from(linepro, {
      height: "0px",
      delay: 2,
    });
    gsap.to(linepro, {
      height: "130%",
      delay: 2,
      duration: 2.6,
    });
    gsap.from(linepro1, {
      height: "0px",
      delay: 2,
    });
    gsap.to(linepro1, {
      height: "130%",
      delay: 2,
      duration: 2.6,
    });
  });
  return (
    <>
      <HStack
        w={"100%"}
        display={"flex"}
        flexDirection={{
          base: "column-reverse",
          sm: "column-reverse",
          xl: "row",
          md: "row",
        }}
        alignItems={"center"}
      >
        <VStack
          w={{ base: "90%", md: "50%" }}
          alignItems={"flex-start"}
          ml={{ base: "0", md: "5" }}
        >
          <Text
            fontWeight={"bold"}
            fontSize={{
              base: "2xl",
              lg: "5xl",
              md: "4xl",
              xl: "6xl",
              "2xl": "7xl",
              sm: "2xl",
            }}
          >
            Creative developer.
          </Text>
          <Text fontSize="lg"> Mehdi Khakbaz </Text>
          <Text fontSize="lg">web designer & front-end developer</Text>
          <Box
            onClick={hoverButtonHandler}
            // onMouseLeave={hoverButtonLeave}
            cursor={"pointer"}
            mt={{ base: "5", md: "50" }}
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
              <Link to={"./projects"}> PROJECTS</Link>
            </Text>
            <Box zIndex={3} as={motion.div} whileHover={{ scale: 1.3 }}>
              <ArrowForwardIcon w={10} boxSize={6} ml={5} />
            </Box>
          </Box>
          <Flex
            mt={{ sm: "", md: "220" }}
            alignSelf={{ base: "flex-end", md: "flex-start" }}
          >
            <Text cursor={"pointer"} as={"ins"}>
              instagram{" "}
            </Text>
            <Text> / </Text>
            <Text cursor={"pointer"} as={"ins"}>
              {" "}
              Github{" "}
            </Text>
          </Flex>
        </VStack>
        <Box
          display={"flex"}
          alignItems={"center"}
          w={{ base: "90%", sm: "90%", md: "40%", lg: "40%", xl: "40%" }}
          h={{ base: "60vh", sm: "60vh", md: "80vh", lg: "80vh", xl: "80vh" }}
          overflow={"hidden"}
          justifyContent={"center"}
          position={"relative"}
          bg={"transparent"}
        >
          <Box
            ref={(el) => (linepro = el)}
            as={motion.div}
            initial={{ rotate: 28 }}
            position={"absolute"}
            w={{ base: "40px", md: "60px", sm: "40px", lg: "90px" }}
            h={"130%"}
            bg={"gray"}
            opacity={0.5}
          ></Box>
          <Box
            ref={(el) => (linepro1 = el)}
            as={motion.div}
            initial={{ rotate: 332 }}
            position={"absolute"}
            w={{ base: "40px", md: "60px", sm: "40px", lg: "90px" }}
            h={"130%"}
            bg={"gray"}
            opacity={0.5}
          ></Box>
          <Image
            ref={(el) => (image = el)}
            src={profile}
            w={"auto"}
            height={{ base: "100%", md: "90%" }}
            objectFit={"cover"}
            borderBottomRadius={"50%"}
            position={"absolute"}
            pb={10}
          />
        </Box>
      </HStack>
    </>
  );
};

export default Landing;
