import React, { useRef } from "react";
//compnents
import NavBar from "./NavBar";
//chakra ui
import {
  Box,
  Button,
  FormControl,
  FormErrorMessage,
  FormLabel,
  Input,
  Stack,
  Text,
  Textarea,
  useColorModeValue,
} from "@chakra-ui/react";
import { useForm } from "react-hook-form";
//motion
import { motion } from "framer-motion";
//icon
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { gsap } from "gsap";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
  const bgView = useColorModeValue("gray", "dark");
  let buttonView = useRef(null);
  const hoverButtonHandler = () => {
    gsap.to(buttonView, {
      width: "220px",
      borderRadius: "20px",
      duration: 0.5,
      background: bgView,
      opacity: 1,
    });
    console.log("enter");
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
    <Stack minH={"100vh"} w={"100%"}>
      <NavBar />
      <Stack w={"100%"} alignItems={"center"}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Stack w={"100%"} mt={"20px"}>
            <FormControl isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                w={{lg:"800px",md:"500px"}}
                type="email"
                {...register("mail", { required: "Email Address is required" })}
                aria-invalid={errors.mail ? "true" : "false"}
              ></Input>
              <FormErrorMessage>
                {errors.mail && <p role="alert">{errors.mail?.message}</p>}
              </FormErrorMessage>
            </FormControl>
          </Stack>
          <Stack mt={"20px"}>
            <FormControl isRequired>
              <FormLabel>Subject</FormLabel>
              <Input />
            </FormControl>
          </Stack>
          <Stack mt={"20px"}>
            <FormControl isRequired>
              <FormLabel>Massage</FormLabel>
              <Textarea h={"200px"} resize={"none"} p={"20px"} />
            </FormControl>
          </Stack>
          <Button
            mt={"50px"}
            type="submit"
            bg={"transparent"}
            as={motion.button}
            whileHover={{ background: "transparent" }}
            onMouseEnter={hoverButtonHandler}
            onMouseLeave={hoverButtonLeave}
            cursor={"pointer"}
            alignSelf={"end"}
            w={"200px"}
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
          </Button>
        </form>
      </Stack>
    </Stack>
  );
};

export default Contact;
