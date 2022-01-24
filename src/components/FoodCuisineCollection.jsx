import { Badge, Box, GridItem, Image } from "@chakra-ui/react";

const FoodCuisineCollection = ({ cuisine }) => {
  return (
    <>
      <GridItem
        pos={"relative"}
        h={"100%"}
        mt={"2.5"}
        mb={"8"}
        cursor={"pointer"}
      >
        <Box
          pos={"relative"}
          h={"36"}
          mb={"3"}
          overflow={"hidden"}
          rounded={"md"}
          bgColor={"gray.100"}
        >
          <Image
            src={cuisine.image}
            alt={cuisine.title}
            boxSize={"100%"}
            transition={"all 0.5s ease"}
            objectFit={"cover"}
            align={"center"}
            fallbackSrc={"/images/placeholder.avif"}
            _hover={{
              transform: "scale(1.1)",
              transition: "all 0.5s ease",
              filter: "brightness(70%)",
            }}
          />
        </Box>
        <Box as={"p"} fontWeight={"bold"} textTransform={"capitalize"}>
          {cuisine.title}
        </Box>
      </GridItem>
    </>
  );
};

export default FoodCuisineCollection;
