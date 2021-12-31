import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  Button,
  Heading,
  Text,
  Container,
  Image,
} from "@chakra-ui/react";

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
          <DrawerCloseButton
            left={"xl"}
            right={"unset"}
            mx={"3"}
            size={"lg"}
            _focus={{ borderColor: "none" }}
            _hover={{ background: "none" }}
          />

          <DrawerBody
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            flexDirection={"column"}
          >
            <Container w={"xs"}>
              <Image src="/images/Shopping cart.svg" alt="cart" />
            </Container>
            <Heading as={"h5"} fontWeight={"light"}>
              Grab some foods now!
            </Heading>
            <Text as={"small"} color={"gray.400"}>
              Your orders will appeare here
            </Text>
            <Button boxShadow={"lg"} marginY={"4"} onClick={onClose}>
              Continue browsing
            </Button>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default CartDrawer;
