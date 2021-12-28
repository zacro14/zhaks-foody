import {
  Box,
  Button,
  Flex,
  Heading,
  IconButton,
  Spacer,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Link from "next/link";
import { useRef } from "react";
import { AiOutlineShopping } from "react-icons/ai";
import CartDrawer from "./CartDrawer";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnCart = useRef();
  return (
    <>
      <Flex
        as={"nav"}
        px={"20"}
        py={"10"}
        bgColor={"transparent"}
        position={"absolute"}
        w={"100%"}
        zIndex={1}
      >
        <Link href={"/"} passHref={true}>
          <Box
            as={"a"}
            p={"2"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
          >
            <Heading color={"white"}>Zhack&apos;s</Heading>
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
          />
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
