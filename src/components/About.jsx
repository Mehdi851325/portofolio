import React from "react";
import NavBar from "./NavBar";
import {
  Box,
  HStack,
  Image,
  Stack,
  Text,
  VStack,
  useColorModeValue,
} from "@chakra-ui/react";
import about from "../img/about.webp";
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { Link } from "react-router-dom";

const About = () => {
  const bg = useColorModeValue(
    "linear-gradient(to right, #000000, #434343);",
    "linear-gradient(to right, #1a202c, #292e49);"
  );
  return (
    <>
      <NavBar />
      <Stack>
        <Stack display={"flex"} flexDirection={"row"} alignItems={"center"}>
          <Stack mt={"100px"} ml={{ base: "20px", md: "80px" }}>
            <Text
              fontWeight={"medium"}
              fontSize={{ "2xl": "8xl", lg: "7xl", md: "5xl", base: "2xl" }}
            >
              Mehdi khakbaz
            </Text>
            <Text
              fontWeight={"medium"}
              fontSize={{ "2xl": "8xl", lg: "7xl", md: "5xl", base: "2xl" }}
            >
              Front-end developer
            </Text>
          </Stack>
          <Stack ml={"auto"} mt={"100px"} mr={{ base: "20px", md: "80px" }}>
            <Text
              className="text-jop"
              fontWeight={"bold"}
              fontSize={{ "2xl": "7xl", lg: "6xl", md: "4xl", base: "xl" }}
            >
              開 発 者 忍 者
            </Text>
          </Stack>
        </Stack>
      </Stack>
      <Stack w={"50%"} mt={{ md: "100px", base: "0px" }}>
        <Image
          borderBottomRadius={"50%"}
          src={about}
          w={"auto"}
          h={{lg:"500px",base:"300px",md:"400px"}}
          objectFit={"contain"}
        />
      </Stack>
      <Stack
        w={"100%"}
        display={"flex"}
        flexDirection={"row"}
        justifyContent={"flex-start"}
      >
        <Stack w={"50%"} justifyContent={"flex-start"} alignItems={"center"}>
          <Text
            ml={{ base: "20px", md: "80px" }}
            fontSize={{ "2xl": "7xl", lg: "6xl", md: "4xl", base: "2xl" }}
            fontWeight={"medium"}
            mt={{ md: "100px", base: "0px" }}
            lineHeight={"tall"}
          >
            My Skills.
          </Text>
        </Stack>
        <Stack
          w={"50%"}
          alignItems={"flex-start"}
          mt={{ md: "200px", base: "50px" }}
        >
          <Stack>
            <Text
              mb={"10px"}
              fontWeight={"medium"}
              fontSize={{ "2xl": "5xl", lg: "4xl", md: "3xl", base: "xl" }}
            >
              Web development
            </Text>
          </Stack>
          <Stack mb={"80px"}>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>HTML 5</Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>CSS 3</Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>
              JavaScript
            </Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>
              TypeScript
            </Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>
              React JS
            </Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>Redux</Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>Github</Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>
              Rest API
            </Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>
              Chakra UI
            </Text>
            <Text fontSize={{ "2xl": "3xl", lg: "2xl", md: "xl" }}>GSAP</Text>
          </Stack>
        </Stack>
      </Stack>
      <VStack bg={bg} pt={20} w={"100%"} minH={"40vh"} color={"white"}>
        <Stack
          w={"100%"}
          display={"flex"}
          flexDirection={{ md: "row", base: "column" }}
        >
          <VStack mb={20} w={{ md: "50%", base: "100%" }}>
            <Text fontSize={{ "2xl": "4xl", lg: "3xl", md: "xl" }}>
              Let's work together.
            </Text>
            <Text fontSize={{ lg: "lx", md: "medium" }}>
              send massage for freelance work.
            </Text>
          </VStack>
          <VStack
            mb={"50px"}
            w={{ md: "50%", base: "100%" }}
            alignItems={{ md: "flex-start", base: "center" }}
            ml={"auto"}
            flexDirection={{base:"column-reverse",md:"column"}}
          >
            <HStack mt={{base:"20px",md:"0px"}}>
              <Text cursor={"pointer"} as="ins" color={"gray.200"}>
                <Link
                  to={
                    "https://instagram.com/mehdi_kb95?igshid=OGQ5ZDc2ODk2ZA=="
                  }
                >
                  Instagram
                </Link>
              </Text>
              <Text color={"gray"}>/</Text>
              <Text cursor={"pointer"} as="ins" color={"gray.200"}>
                Telegram
              </Text>
              <Text color={"gray"}>/</Text>
              <Text cursor={"pointer"} as="ins" color={"gray.200"}>
                Linkdin
              </Text>
              <Text color={"gray"}>/</Text>
              <Text cursor={"pointer"} as="ins" color={"gray.200"}>
                Github
              </Text>
            </HStack>
            <HStack mt={"20px"}>
              <Text color={"gray.200"} fontSize={{ lg: "lx", md: "medium" }}>
                Mehdikhakbaz1995@gmail.com
              </Text>
            </HStack>
            <HStack mt={{base:"0px",md:"20px"}}>
              <Text color={"gray.200"} fontSize={{ lg: "lx", md: "medium" }}>
                +98 912 847 47 69
              </Text>
            </HStack>
          </VStack>
        </Stack>
        <HStack mt={"auto"}>
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
    </>
  );
};

export default About;
