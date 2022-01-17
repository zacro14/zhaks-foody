import { Box, Grid, Heading, Link, Text } from "@chakra-ui/react";
import FoodCuisineCollection from "./FoodCuisineCollection";
import Nextlink from "next/link";

const FoodCategory = ({ data }) => {
  return (
    <>
      <Box px={{ base: "2", sm: "5", md: "10", lg: "10" }}>
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
          {data.map((cuisine) => (
            <Nextlink
              href={{
                pathname: `/cuisines/${cuisine.slug}`,
                query: { cuisinename: cuisine.slug },
              }}
              key={cuisine.slug}
              passHref
              as={`/cuisines/${cuisine.slug}`}
            >
              <Link _focus={{ border: "none" }}>
                <FoodCuisineCollection cuisine={cuisine} />
              </Link>
            </Nextlink>
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default FoodCategory;
