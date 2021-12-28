import { Container, Flex } from "@chakra-ui/react";

const Footer = () => {
  return (
    <>
      <Flex
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"gray.600"}
        height={"36"}
        as="footer"
      >
        <Container
          marginX={"24"}
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          color={"white"}
        >
          &copy; Zhack&rsquo;s Foody 2021
        </Container>
      </Flex>
    </>
  );
};

export default Footer;
