
//component
import NavBar from "./NavBar";
import Project1 from "./Project1";
import Project2 from "./Project2";
import Project3 from "./Project3";
import Project4 from "./Project4";
//swiper
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
//chakra ui
import {
  Stack,
  useColorModeValue,
  HStack,
  Text,
  Button,
} from "@chakra-ui/react";
//icon
import { FaTelegram } from "react-icons/fa";
import { AiFillInstagram, AiFillGithub } from "react-icons/ai";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Project5 from "./Project5";

const Projects = () => {
  const bg = useColorModeValue(
    "light",
    "linear-gradient(90deg, rgba(26,32,44,1) 74%, rgba(41,46,73,1) 95%)"
    // 'linear-gradient(90deg, rgba(0,0,0,1) 74%, rgba(65,64,64,1) 95%)'
  );
  const color = useColorModeValue("light", "dark");
  return (
    <Stack bg={bg} h={"95vh"} w={"100%"}>
      <Stack maxH={"5vh"} bg={"transparent"} color={color}>
        <NavBar />
      </Stack>
      <Swiper
        effect={""}
        speed={"800"}
        loop={false}
        navigation={{
          nextEl: ".btn-list-next",
          prevEl: ".btn-list-prv",
          clickable: true,
        }}
        modules={[Navigation]}
      >
        <SwiperSlide>
          <Project5 />
        </SwiperSlide>
        <SwiperSlide>
          <Project1 />
        </SwiperSlide>
        <SwiperSlide>
          <Project2 />
        </SwiperSlide>
        <SwiperSlide>
          <Project3 />
        </SwiperSlide>
        <SwiperSlide>
          <Project4 />
        </SwiperSlide>
      </Swiper>
      <HStack
        w={"100%"}
        mt={50}
        color={color}
        bottom={0}
        position={"fixed"}
        justifyContent={"center"}
      >
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
      <HStack
        ml={{ base: "10px", lg: "80px" }}
        mb={{base:"50px"}}
        justifyContent={"flex-start"}
        zIndex={10}
      >
        <Button
          className="btn-list-prv"
          w={{ lg: "60px", base: "45px", md: "55px",'2xl':"60px" }}
          h={{ lg: "60px", base: "45px", md: "55px",'2xl':"60px" }}
          fontSize={{ lg: "50px", base: "35px", md: "45px" }}
          borderRadius={"50%"}
          cursor={"pointer"}
          p={"8px"}
        >
          <IoIosArrowBack />
        </Button>
        <Button
          className="btn-list-next"
          w={{ lg: "60px", base: "45px", md: "55px",'2xl':"60px" }}
          h={{ lg: "60px", base: "45px", md: "55px",'2xl':"60px" }}
          fontSize={{ lg: "50px", base: "35px", md: "45px" }}
          p={"8px"}
          borderRadius={"50%"}
          cursor={"pointer"}
        >
          <IoIosArrowForward />
        </Button>
      </HStack>
    </Stack>
  );
};

export default Projects;
