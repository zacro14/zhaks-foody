import { Box, Button, Container, Flex, Heading, Input } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <>
      <Box as={"section"} w={"full"} h={"sm"} pos={"relative"}>
        <Box
          filter={"brightness(50%)"}
          bgColor={"gray.800"}
          bgImage={"url('/images/hero-bg.jpg')"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          objectFit={"contain"}
          bgPos={"center"}
          zIndex={"-1"}
          w={"inherit"}
          h={"inherit"}
        />
        <Box
          position={"absolute"}
          bottom={"20%"}
          display={"grid"}
          alignItems={"center"}
          justifyContent={"center"}
          width={"100%"}
        >
          <Heading color={"white"} fontWeight={"normal"}>
            Explore the best foods in the Philippines
          </Heading>
          <Flex
            w={"container.md"}
            mt={"10"}
            bgColor={"white"}
            p={"5"}
            boxShadow={"xl"}
          >
            <Input
              _focus={{ borderColor: "red.500" }}
              placeholder={"Enter your street and house number"}
            ></Input>
            <Button
              mx={"2"}
              px={"10"}
              bgColor={"red.500"}
              color={"white"}
              _hover={{ opacity: ".9" }}
            >
              Find Restaurant
            </Button>
          </Flex>
        </Box>
      </Box>
    </>
  );
};

export default HeroSection;
