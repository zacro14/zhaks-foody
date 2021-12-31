import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import FoodCuisineCollection from "./FoodCuisineCollection";
import { cuisines } from "../data/cuisines";

const FoodCategory = () => {
  return (
    <>
      <Box
        // h={{
        //   base: "auto",
        //   sm: "auto",
        //   md: "auto",
        //   lg: "auto",
        // }}
        px={{ base: "2", sm: "5", md: "10", lg: "20" }}
      >
        <Heading mt={"7"} textTransform={"capitalize"}>
          many choices just for{" "}
          <Text as={"span"} color={"red.500"}>
            you
          </Text>
          !
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          }}
          rowGap={"1"}
          columnGap={"5"}
        >
          {" "}
          {cuisines.map((cuisine) => (
            <FoodCuisineCollection cuisine={cuisine} key={cuisine._id} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FoodCategory;
