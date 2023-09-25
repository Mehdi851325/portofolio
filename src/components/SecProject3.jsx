import  { useRef } from "react";
//Chakra Ui
import { Box, HStack, Image, Text, useColorModeValue } from "@chakra-ui/react";
//animation
import { motion } from "framer-motion";
import { ArrowForwardIcon } from "@chakra-ui/icons";
//gsao
import { gsap } from "gsap";
//image
import timovito from "../img/timovito.webp";
import { Link } from "react-router-dom";

const Secproject3 = () => {
  const bgView = useColorModeValue("white", "dark");

  let miniLine = useRef(null);
  let textName = useRef(null);
  let number = useRef(null);
  let view = useRef(null);
  let img = useRef(null);
  let bgImg = useRef(null);
  const hoverHandler = () => {
    ///line gsap
    gsap.to(miniLine, {
      width: "{base:'60px',md:'130px',lg:'300px'}",
      ease: "power1.inOut",
      duration: 0.5,
    });
    ///text gsap
    gsap.to(textName, {
      fontSize: "1.875rem",
      fontWeight: "semibold",
    });
    ///number gsap
    gsap.to(number, {
      display: "flex",
      opacity: 0.5,
      ease: "power1.inOut",
      duration: 0.5,
    });
    ///view button gsap
    gsap.to(view, {
      width: "190px",
      borderRadius: "20px",
      duration: 0.5,
      background: bgView,
      opacity: 1,
    });
    ///image view
    gsap.to(img, {
      display: "flex",
      right: "0",
      duration: 0.5,
    });
    ///image view
    gsap.to(bgImg, {
      display: "flex",
      right: "0",
      marginRight: "50px",
      duration: 0.5,
    });
  };
  const leaveHandle = () => {
    ///line gsap
    gsap.to(miniLine, {
      width: "{base:'50px',md:'70px',lg:'200px'}",
      ease: "power2.out",
      duration: 0.5,
    });
    ///text gsap
    gsap.to(textName, {
      fontSize: "1.5rem",
      fontWeight: "normal",
    });
    ///number gsap
    gsap.to(number, {
      display: "none",
      opacity: 0,
      ease: "power2.out",
      duration: 0.5,
    });
    ///view button gsap
    gsap.to(view, {
      width: "45px",
      borderRadius: "50%",
      duration: 0.5,
      background: "gray",
      opacity: 0.3,
    });
    ///image view
    gsap.to(img, {
      display: "{base:'flex',md:'none'}",
      right: "-120%",
      duration: 0.5,
    });
    ///image view
    gsap.to(bgImg, {
      display: "none",
      right: "-100%",
      marginRight: "0px",
      duration: 0.5,
    });
  };
  return (
    <HStack
      onMouseEnter={hoverHandler}
      onMouseLeave={leaveHandle}
      mt={10}
      mb={10}
      cursor={"pointer"}
      w={"100%"}
      flexWrap={{ base: "wrap", lg: "nowrap" }}
    >
      <HStack w={"100%"} mb={50} mt={50}>
        <Box display={"flex"} alignItems={"center"}>
          <Box
            ref={(el) => (miniLine = el)}
            w={{ base: "50px", md: "90px", lg: "200px" }}
            h={0.5}
            bg={"gray.400"}
          ></Box>
          <Text ml={5} color={"gray.400"}>
            03
          </Text>
        </Box>
        <Box
          ml={{ base: "5px", md: "20px", lg: "50px" }}
          display={"flex"}
          flexDirection={"column"}
          position={"relative"}
        >
          <Text
            ref={(el) => (number = el)}
            scale={"0.9"}
            position={"absolute"}
            display={"none"}
            left={"20px"}
            top={"-90px"}
            color={"gray.300"}
            fontSize={"9xl"}
          >
            03
          </Text>
          <Text
            ref={(el) => (textName = el)}
            fontSize={{ base: "xl", md: "2xl" }}
          >
            TiMovieTo
          </Text>
          <Text color={"gray.400"} fontSize={"sm"}>
            Sass / React / Redux / RestAPI
          </Text>
        </Box>
      </HStack>
      <HStack
        position={"relative"}
        w={{ base: "100%", lg: "50%" }}
        flexWrap={{ base: "wrap", lg: "nowrap" }}
        justifyContent={{ base: "center", lg: "flex-end" }}
      >
        <Link to={'/project3'}>
        <Box
          zIndex={4}
          w={{ base: "150px", md: "160px", xl: "200px" }}
          position={"relative"}
          display={"flex"}
          alignItems={"center"}
          mb={{ base: "20px", lg: "0" }}
        >
          <Box
            ref={(el) => (view = el)}
            opacity={0.3}
            left={"-5"}
            zIndex={1}
            w={"45px"}
            h={"45px"}
            borderRadius={"50%"}
            bg={"gray"}
            position={"absolute"}
          ></Box>
          <Text
            zIndex={2}
            fontWeight={"bold"}
            fontSize={{ base: "small", md: "md" }}
          >
            VIEW PROJECT
          </Text>
          <Box zIndex={3} as={motion.div} whileHover={{ scale: 1.3 }}>
            <ArrowForwardIcon cursor={"pointer"} w={10} boxSize={6} ml={5} />
          </Box>
        </Box>
        </Link>
        <Image
          ref={(el) => (img = el)}
          right={"-100%"}
          display={{ base: "flex", lg: "none" }}
          boxShadow="-20px 20px lightblue"
          zIndex={2}
          position={{ lg: "absolute" }}
          src={timovito}
          w={"auto"}
          height={{ base: "200px",md:'300px',lg:"200px",'2xl':"300px" }}
          mb={10}
        />
      </HStack>
    </HStack>
  );
};

export default Secproject3;
