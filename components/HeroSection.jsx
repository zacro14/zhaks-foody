import { Box, Button, Flex, Heading, Input, Text } from "@chakra-ui/react";

const HeroSection = () => {
  return (
    <>
      <Box as={"section"} w={"full"} h={"md"} pos={"relative"}>
        <Box
          filter={"brightness(50%)"}
          bgColor={"gray.800"}
          bgImage={"url('/images/home-1.jpg')"}
          bgRepeat={"no-repeat"}
          bgSize={"cover"}
          objectFit={"contain"}
          bgPos={"center"}
          zIndex={"-1"}
          h={"inherit"}
          w={"inherit"}
        />

        <Box
          pos={"absolute"}
          display={"flex"}
          px={{ base: "2", sm: "5", md: "10", lg: "20" }}
          bottom={"10%"}
          flexDirection={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          width={"full"}
        >
          <Heading
            color={"white"}
            fontSize={{ base: "24px", md: "40px", lg: "45px" }}
            fontWeight={{ base: "normal", md: "normal", lg: "semibold" }}
            textAlign={"center"}
          >
            Explore the best foods in the{" "}
            <Text
              as={"span"}
              fontWeight={"bold"}
              bgGradient="linear(to-l, yellow.300, red.300)"
              bgClip="text"
            >
              Philippines
            </Text>
          </Heading>
          <Flex
            w={{ base: "full", md: "90%", lg: "60%" }}
            mt={"5"}
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
            />
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
