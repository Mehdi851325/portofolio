import React, { useEffect, useRef } from "react";
//Chakra UI is available
import { Box, Stack, Text, VStack } from "@chakra-ui/react";
//import gsap
import { gsap } from "gsap";
//component
import Main from "./Main";
import NavBar from "./NavBar";
import Footer from "./Footer";


const Home = () => {
  let screen = useRef(null);
  let scrreenBottom = useRef(null);
  let line = useRef(null);
  let textName = useRef(null);
  let allScreen = useRef(null);
  useEffect(() => {
    // var tl = gsap.timeline();
    gsap.from(line, {
      width: "5px",
    });
    gsap.to(line, {
      width: "100%",
      duration: 1,
      delay: 0.9,
    });
    gsap.from(screen, {
      width: "100%",
      top: "0%",
      ease: "power3.inOut",
      duration: 1.5,
    });
    gsap.to(screen, {
      duration: 1.6,
      top: "-100%",
      ease: "power3.inOut",
      display: "none",
      delay: 2.5,
    });
    gsap.set(screen, { top: "-100%" });
    gsap.from(scrreenBottom, {
      width: "100%",
      bottom: "0",
      ease: "power3.inOut",
      duration: 1.5,
    });
    gsap.to(scrreenBottom, {
      duration: 1.6,
      bottom: "-100%",
      ease: "power3.inOut",
      display: "none",
      delay: 2.5,
    });
    gsap.from(textName, {
      letterSpacing: "5px",
      scale: 1,
      opacity: 0,
    });
    gsap.to(textName, {
      letterSpacing: "4.5px",
      scale: 0.9,
      opacity: 1,
      duration: 0.6,
      delay: 0.9,
    });
    gsap.to(allScreen, {
      overflowY: "auto",
      delay: 3.5,
      duration: 3,
    });
  });
  return (
    <>
      <VStack
      position={'relative'}
        boxSizing="border-box"
        h="100vh"
        overflow={"hidden"}
        overflowX={"hidden"}
        ref={(el) => (allScreen = el)}
      >
          <Stack
            ref={(el) => (screen = el)}
            display="flex"
            alignItems="center"
            justifyContent="end"
            mb={0}
            h="50vh"
            position="absolute"
            w="100%"
            bg="black"
            color="white"
            zIndex={5}
            top={0}
          >
            <Text color="white" fontSize="2xl" ref={(el) => (textName = el)}>
              Mehdi Khakbaz
            </Text>
          </Stack>
          <Stack
            ref={(el) => (scrreenBottom = el)}
            h="50vh"
            bg="black"
            display="flex"
            alignItems="center"
            position="absolute"
            w="100%"
            color="white"
            zIndex={5}
          >
            <Box
              ref={(el) => (line = el)}
              w="300px"
              height={1.4}
              bg="white"
              mt={5}
            ></Box>
          </Stack>
        <VStack w={"100%"}>
          <NavBar />
          <Main />
          <Footer />
        </VStack>
      </VStack>
    </>
  );
};

export default Home;
