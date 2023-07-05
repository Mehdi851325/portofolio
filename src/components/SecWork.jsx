import React, { useRef } from 'react'
//Chakra Ui
import { Box, HStack, Image, Stack, Text, VStack } from '@chakra-ui/react'
//animation
import { motion } from 'framer-motion';
import { ArrowForwardIcon } from '@chakra-ui/icons';
//gsao
import { gsap } from 'gsap';
//components
import Secproject1 from './Secproject1';
import Secproject2 from './Secproject2';
import Secproject3 from './SecProject3';

const SecWork = () => {
    let miniLine = useRef(null)
    let textName = useRef(null)
    let number = useRef(null)
    let view = useRef(null)
    let img = useRef(null)
    let bgImg = useRef(null)
    const hoverHandler =()=>{
        ///line gsap
        gsap.to(miniLine,{
            width:'300px',
            ease: "power1.inOut",
            duration:1
        })
        ///text gsap
        gsap.to(textName,{
            fontSize: "1.875rem",
            color: 'black',
            fontWeight: 'semibold'
        })
        ///number gsap
        gsap.to(number,{
            display:'flex',
            opacity:0.5,
            ease: "power1.inOut",
            duration:1,
        })
        ///view button gsap
        gsap.to(view,{
            width:'100%',
            borderRadius: '20px',
            duration:1,
            background:'white',
            opacity:1
        })
        ///image view
        gsap.to(img,{
            display: 'flex',
            right:"0",
            duration:1,
        })
        ///image view
        gsap.to(bgImg,{
            display: 'flex',
            right:"0",
            marginRight: '50px',
            duration:1,
        })
    }
    const leaveHandle = ()=>{
        ///line gsap
        gsap.to(miniLine,{
            width:'200px',
            ease: "power2.out",
            duration:1
        })
        ///text gsap
        gsap.to(textName,{
            fontSize: "1.5rem",
            color: 'gray.400',
            fontWeight:'normal'
        })
        ///number gsap
        gsap.to(number,{
            display:'none',
            opacity:0,
            ease: "power2.out",
            duration:1,
        })
        ///view button gsap
        gsap.to(view,{
            width:'45px',
            borderRadius: '50%',
            duration:1,
            background:'gray',
            opacity:0.3
        })
        ///image view
        gsap.to(img,{
            display: 'none',
            right:"-100%",
            duration:1,
        })
        ///image view
        gsap.to(bgImg,{
            display: 'none',
            right:"-100%",
            marginRight: '0px',
            duration:1,
        })
    }   
  return (
    <VStack w={'100%'} >
        <Secproject1 />
        <Secproject2 />
        <Secproject3 />
    </VStack>
  )
}

export default SecWork