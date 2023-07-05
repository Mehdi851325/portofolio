import React, { useRef } from "react";
//router dom
import { Link } from "react-router-dom";
//chakra ui
import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerOverlay,
  Flex,
  HStack,
  IconButton,
  Stack,
  Text,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { useColorMode } from "@chakra-ui/react";
//icons
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { HamburgerIcon, MoonIcon, SunIcon } from "@chakra-ui/icons";

const NavBar = () => {
  const hamBtn = useRef();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { colorMode, toggleColorMode } = useColorMode();
  const bg = useColorModeValue(
    "linear-gradient(to right, #000000, #434343);",
    "linear-gradient(to right, #1a202c, #292e49);"
  );
  return (
    <>
      <Flex
        display={{ base: "none", md: "flex" }}
        flexDirection={"row"}
        w={"95%"}
        alignItems={"center"}
        justifyContent={"flex-end"}
        pr={50}
        mb={{ base: "2", md: "50" }}
      >
        <Text fontSize="xl" m={3} cursor={"pointer"}>
          <Link to="/">Home</Link>
        </Text>
        <Text fontSize="xl" m={3} cursor={"pointer"}>
          <Link>About</Link>
        </Text>
        <Text fontSize="xl" m={3} cursor={"pointer"}>
          <Link to="/projects">Projects</Link>
        </Text>
        <Text fontSize="xl" m={3} cursor={"pointer"}>
          <Link to={"/contact"}>Contact</Link>
        </Text>
        <Button bg={"transparent"} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
      </Flex>
      <Stack
        w={"90%"}
        display={{ base: "flex", md: "none" }}
        flexDirection={"row"}
        justifyContent={"flex-end"}
      >
        <Button bg={"transparent"} onClick={toggleColorMode}>
          {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
        </Button>
        <Button
          fontSize={"xl"}
          ref={hamBtn}
          onClick={onOpen}
          bg={"transparent"}
          as={IconButton}
          icon={<HamburgerIcon />}
        />
        <Drawer
          size={"full"}
          isOpen={isOpen}
          placement="top"
          onClose={onClose}
          finalFocusRef={hamBtn}
        >
          <DrawerOverlay />
          <DrawerContent
            bg={bg}
            color={"white"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <DrawerCloseButton fontSize={"xl"} />
            <DrawerBody >
              <Stack alignItems={'center'} h={'full'} justifyContent={'center'}>
                <Text
                  fontWeight={"bold"}
                  fontSize="4xl"
                  m={3}
                  cursor={"pointer"}
                >
                  <Link to="/">Home</Link>
                </Text>
                <Text
                  fontWeight={"bold"}
                  fontSize="4xl"
                  m={3}
                  cursor={"pointer"}
                >
                  <Link>About</Link>
                </Text>
                <Text
                  fontWeight={"bold"}
                  fontSize="4xl"
                  m={3}
                  cursor={"pointer"}
                >
                  <Link to="/projects">Projects</Link>
                </Text>
                <Text
                  fontWeight={"bold"}
                  fontSize="4xl"
                  m={3}
                  cursor={"pointer"}
                >
                  <Link to={"/contact"}>Contact</Link>
                </Text>
              </Stack>
            </DrawerBody>
            <DrawerFooter>
              <HStack>
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
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      </Stack>
    </>
  );
};

export default NavBar;
