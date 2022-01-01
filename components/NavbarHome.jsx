import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import CartDrawer from "./CartDrawer";
import {
  Badge,
  Box,
  Button,
  Center,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";

const Navbar = () => {
  const [navabar, setNavbar] = useState(false);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnCart = useRef();

  const scrollBehavior = () => {
    if (window.scrollY > 0) {
      setNavbar(true);
    } else {
      setNavbar(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", scrollBehavior);
  }, []);

  return (
    <>
      <Flex
        as={"nav"}
        px={{ base: "2", sm: "5", md: "10", lg: "20" }}
        py={"5"}
        background={navabar ? "white" : "transparent"}
        position={navabar ? "fixed" : "absolute"}
        top={0}
        w={"full"}
        zIndex={1}
        boxShadow={navabar ? "md" : null}
        transition={"all 0.2s "}
        animation={navabar ? "0.3s ease 0s 1 normal forwards  running" : "none"}
      >
        <Link href={"/"} passHref={true}>
          <Box as={"a"} display={"flex"} alignItems={"center"}>
            {/* <Image src={"/logo/logo-1.svg"} alt="logo" w={"auto"} h={"20"} /> */}
            <Heading color={navabar ? "black" : "white"}>Zhack&apos;s</Heading>
            <Text as={"span"} color={"red.400"} fontSize={"2xl"}>
              Foody
            </Text>
          </Box>
        </Link>
        <Spacer />
        <Box
          display={"flex"}
          p={"1"}
          justifyContent={"center"}
          alignItems={"center"}
          pos={"relative"}
        >
          <IconButton
            variant={"outline"}
            colorScheme={"gray"}
            fontSize={"larger"}
            color={"gray.600"}
            icon={<AiOutlineShopping />}
            ref={btnCart}
            onClick={onOpen}
            bgColor={"white"}
          ></IconButton>
          <Badge
            pos={"absolute"}
            top={"0"}
            right={"0"}
            bgColor={"red.500"}
            color={"white"}
            variant={"solid"}
            fontSize={"sm"}
            w={"5"}
            rounded={"lg"}
          >
            <Center>2</Center>
          </Badge>
        </Box>
        <Box display={"flex"} p={"1"} alignItems={"center"}>
          <Button variant={"outline"} bgColor={"white"}>
            Login
          </Button>
        </Box>
      </Flex>
      <CartDrawer isOpen={isOpen} onClose={onClose} btnCart={btnCart} />
    </>
  );
};

export default Navbar;
