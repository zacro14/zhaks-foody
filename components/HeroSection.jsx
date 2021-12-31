import { Box, Button, Flex, Heading, Input } from "@chakra-ui/react";

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
          bottom={{ base: "5%", sm: "15%", md: "20%" }}
          display={"grid"}
          px={{ base: "2", sm: "5", md: "10", lg: "20" }}
          width={"full"}
        >
          <Heading
            color={"white"}
            fontSize={{ base: "24px", md: "40px", lg: "45px" }}
            fontWeight={{ base: "normal", sm: "light", md: "normal" }}
          >
            Explore the best foods in the Philippines
          </Heading>
          <Flex
            w={{
              base: "full",
              md: "full",
              lg: "full",
              xl: "full",
            }}
            mt={"10"}
            bgColor={"white"}
            rounded={"md"}
            p={"5"}
            boxShadow={"xl"}
            flexDirection={{
              base: "column",
              sm: "row",
              md: "row",
              lg: "row",
            }}
          >
            <Input
              _focus={{ borderColor: "red.500" }}
              placeholder={"Enter your street and house number"}
              mb={{ base: "2", sm: null, md: null }}
              h={"12"}
            ></Input>
            <Button
              mx={{ base: null, sm: "2" }}
              px={"10"}
              h={"12"}
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
