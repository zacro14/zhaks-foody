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
          w={"100%"}
          h={"36"}
          mb={"3"}
          overflow={"hidden"}
          rounded={"md"}
          bgColor={"gray.100"}
        >
          <Image
            src={cuisine.image}
            alt={cuisine.title}
            fallback={" "}
            boxSize={"100%"}
            transition={"all 0.5s ease"}
            objectFit={"cover"}
            align={"center"}
            _hover={{
              transform: "scale(1.1)",
              transition: "all 0.5s ease",
              filter: "brightness(70%)",
            }}
          />
        </Box>
        {cuisine.hasBadge ? (
          <Box>
            <Badge
              borderRadius={"unset"}
              roundedRight={"sm"}
              colorScheme={"red"}
              variant={"solid"}
              textTransform={"capitalize"}
              p={"1"}
              pos={"absolute"}
              left={"-2"}
              top={"3"}
              boxShadow={"xl"}
            >
              {cuisine.tag}
            </Badge>
            <Box
              pos={"absolute"}
              borderTop={"8px solid #C53030"}
              borderLeft={"8px solid transparent"}
              top={"38px"}
              left={"-8px"}
              rounded={"unset"}
            />
          </Box>
        ) : null}
        <Box as={"p"} fontWeight={"bold"} textTransform={"capitalize"}>
          {cuisine.title}
        </Box>
      </GridItem>
    </>
  );
};

export default FoodCuisineCollection;
