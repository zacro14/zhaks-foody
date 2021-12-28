import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Input,
  Button,
  Heading,
  Center,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";

const CartDrawer = ({ isOpen, onClose, btnRef }) => {
  return (
    <>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        size={"md"}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>My Cart</DrawerHeader>

          <DrawerBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Heading as={"h5"} fontWeight={"light"}>
              Grab some foods now!
            </Heading>
            <Text as={"small"} color={"gray.400"}>
              Your orders will appeare here
            </Text>
            <Button boxShadow={"lg"} marginY={"4"}>
              <Link href={"/"}>Continue browsing</Link>
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
