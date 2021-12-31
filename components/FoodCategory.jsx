import { Box, Grid, Heading, Text } from "@chakra-ui/react";
import FoodCuisineCollection from "./FoodCuisineCollection";
import { cuisines } from "../data/cuisines";

const FoodCategory = () => {
  return (
    <>
      <Box px={"20"} h={"lg"}>
        <Heading mt={"7"} textTransform={"capitalize"}>
          many choices just for{" "}
          <Text as={"span"} color={"red.500"}>
            you
          </Text>
          !
        </Heading>

        <Grid
          templateColumns="repeat(4, 1fr)"
          rowGap={"1"}
          columnGap={"5"}
          h={"36"}
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
