
//chakra ui
import {
  Box,
  Image,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
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
  demoPage,
} from "../animation";
//icon
import { FaReact, FaSass } from "react-icons/fa";
import { FiFramer } from "react-icons/fi";
//component
import NavBar from "./NavBar";
//image
import mouris from "../img/mouris.webp";

const DemoPro2 = () => {
  const color = useColorModeValue("2px dotted black", "2px dotted white");
  return (
    <VStack position={"relative"}>
      <Stack
        as={motion.div}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        h={"100vh"}
        bg={"#00502c"}
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
          Mouris
        </Text>
      </Stack>
      <Stack
        as={motion.div}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        h={"100vh"}
        bg={"#372e1d"}
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
          02
        </Text>
      </Stack>
      <Stack
        as={motion.div}
        position={"fixed"}
        top={"0"}
        w={"100%"}
        h={"100vh"}
        bg={"#cc9d67"}
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
        <FaSass />
        <FaReact />
        <FiFramer />
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
      <VStack
        as={motion.div}
        w={"100%"}
        minH={"100vh"}
        variants={demoPage}
        initial="hidden"
        animate="show"
      >
        <NavBar />
        <Stack>
          <Image src={mouris} mt={{ base: "100px", md: "10px" }} />
        </Stack>
        <VStack mt={"auto"}>
          <Stack overflow={"hidden"}>
            <Text
              as={motion.p}
              variants={titleAnimation}
              initial="hidden"
              animate="show"
              fontWeight={"medium"}
              mb={{ base: "40px", md: "15px" }}
              fontSize={{ base: "2xl", md: "4xl", lg: "5xl", "2xl": "6xl" }}
            >
              Mouris e-commerce website
            </Text>
          </Stack>
          <Stack>
            <Text
              as={motion.p}
              variants={seeDemo}
              initial="hidden"
              animate="show"
              mb={{ base: "30px", md: "10px" }}
              cursor={"pointer"}
              fontWeight={"normal"}
              fontSize={"2xl"}
            >
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
    </VStack>
  );
};

export default DemoPro2;
