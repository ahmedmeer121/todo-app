import { Container, Flex, Text, HStack, Button, useColorMode } from '@chakra-ui/react'
import React from 'react'
import { Link } from 'react-router-dom';
import { IoMoon, IoSunny } from "react-icons/io5";
import { PlusSquareIcon } from "@chakra-ui/icons";
// import { IoMoonIcon, IoSunnyIcon } from "react-icons/io5";


const Navbar = () => {
const {colorMode, toggleColorMode} = useColorMode();
// const { product } = useProductStore()


  return (
    <Container maxW={"1140px"} px={"4"} >
      <Flex
        h={"16"}
        alignItems={"center"}
        justifyContent={"space-between"}
        flexDir={{
          base: "column",
          sm: "row"
        }}
      >

        <Text
        fontSize={{ base: "22", sm: "28"}}
        fontWeight={"bold"}
        textTransform={"uppercase"}
        textAlign={"center"}
        bgGradient={"linear(to-r, cyan.400, blue.500)"}
        bgClip={"text"}
        >
          <Link to={"/"}>Home</Link>
        </Text>

        {/* <Link to={"/products"}>Products</Link> */}

        <HStack  spacing={2} alignItems={"center"}>
          <Link to={"/create"}>
          <Button>
            <PlusSquareIcon fontSize={"20px"} />
          </Button>
          </Link>
          <Button onClick={toggleColorMode}>
            {colorMode === "light" ? <IoMoon /> : <IoSunny size={"20px"} />}
          </Button>
        </HStack>
      </Flex>
    </Container>
  );
};

export default Navbar

