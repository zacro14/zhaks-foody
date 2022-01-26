import Head from "next/head";
import NextLink from "next/link";
import { useRouter } from "next/router";

import { db } from "../../lib/firebase.config";
import RestaurantCuisine from "../../components/Cuisine";
import { collection, getDocs, query, where } from "firebase/firestore";

import NotFoundRestaurant from "../../components/NotFoundRestaurant";
import { Box, Grid, GridItem, Heading, Link, Text } from "@chakra-ui/react";

const Cuisine = ({ restaurant }) => {
  const router = useRouter();

  if (Array.isArray(restaurant) && !restaurant.length) {
    return <NotFoundRestaurant />;
  } else {
    return (
      <>
        <Head>
          <title>
            Zhacks Foody |
            {router.query.cuisinename[0].toUpperCase() +
              router.query.cuisinename.substring(1)}
          </title>
        </Head>
        <Box
          as={"main"}
          pos={"relative"}
          zIndex={0}
          px={{ base: "2", md: "10", lg: "10" }}
          py={"10"}
        >
          <Heading>
            Choose the best{" "}
            <Text as={"span"} color={"red.500"} textTransform={"capitalize"}>
              {router.query.cuisinename}
            </Text>{" "}
            Foods
          </Heading>
          <Grid
            templateColumns={{
              base: "repeat(1, 1fr)",
              md: "repeat(3, 1fr)",
              lg: "repeat(4, 1fr)",
            }}
            gap={{ base: null, md: "5", lg: "6" }}
          >
            {restaurant?.map((restaurant) => (
              <NextLink
                href={{
                  pathname: `/restaurant/${restaurant.name}`,
                }}
                as={`/restaurant/${restaurant._id}`}
                key={restaurant._id}
                passHref
              >
                <Link
                  _hover={{ textTransform: "none" }}
                  _focus={{ border: "none" }}
                >
                  <GridItem
                    _hover={{
                      shadow: "2xl",
                      rounded: "md",
                    }}
                    p={"2"}
                    transition={"all 0.5s ease-out"}
                  >
                    <RestaurantCuisine data={restaurant} />
                  </GridItem>
                </Link>
              </NextLink>
            ))}
          </Grid>
        </Box>
      </>
    );
  }
};

export const getStaticProps = async (context) => {
  let q = query(
    collection(db, "restaurants"),
    where("tags", "array-contains", context.params.cuisinename)
  );
  const querysnapshot = await getDocs(q);

  const restaurant = [];
  querysnapshot.forEach((doc) => {
    restaurant.push({ _id: doc.id, ...doc.data() });
  });

  if (!restaurant) {
    return {
      notFound: true,
    };
  }

  return {
    props: { restaurant: restaurant },
  };
};

export const getStaticPaths = async () => {
  const querysnapshot = await getDocs(collection(db, "cuisines"));

  const cuisinedata = [];
  querysnapshot.forEach((doc) => {
    cuisinedata.push({ ...doc.data() });
  });

  const paths = cuisinedata.map((item) => ({
    params: { cuisinename: item.slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Cuisine;
