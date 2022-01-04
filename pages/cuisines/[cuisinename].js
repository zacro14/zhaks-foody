import Head from "next/head";
import CuisineType from "../../components/Cuisine";
import Layout from "../../components/Layout";
import NavBar from "../../components/NavBar";
import { Box, Grid, GridItem, Heading, Text } from "@chakra-ui/react";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../lib/firebase.config";
import { useRouter } from "next/router";

const Cuisine = ({ restaurant }) => {
  const router = useRouter();
  return (
    <>
      <Head>
        <title> Zhacks Foody | {router.query.cuisinename} </title>
      </Head>
      <Box
        as={"main"}
        pos={"relative"}
        zIndex={0}
        px={{ base: "2", md: "10", lg: "20" }}
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
          {restaurant.map((burger) => (
            <GridItem
              _hover={{ shadow: "2xl", rounded: "md" }}
              p={"2"}
              key={burger._id}
            >
              <CuisineType data={burger} />
            </GridItem>
          ))}
        </Grid>
      </Box>
    </>
  );
};

Cuisine.getLayout = (page) => {
  return (
    <Layout>
      <NavBar />
      {page}
    </Layout>
  );
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
