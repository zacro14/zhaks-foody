import Head from "next/head";

import { collection, getDocs } from "firebase/firestore";
import { db } from "../lib/firebase.config";

import FoodCategory from "../components/FoodCategory";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import NavbarHome from "../components/NavbarHome";
import { Box } from "@chakra-ui/react";

export default function Home({ cuisines }) {
  return (
    <>
      <Head>
        <title>Zhacks Foody</title>
        <meta
          name="description"
          content="Choose food that you  like , here in Zhack's foody"
        />
      </Head>

      <HeroSection />
      <Box id="food cuisine" pos={"relative"} h={"auto"}>
        <FoodCategory data={cuisines} />
      </Box>
    </>
  );
}

Home.getLayout = (page) => {
  return (
    <Layout>
      <NavbarHome />
      {page}
    </Layout>
  );
};

export const getStaticProps = async () => {
  const querysnapshot = await getDocs(collection(db, "cuisines"));

  const cuisinesData = [];
  querysnapshot.forEach((doc) => {
    cuisinesData.push({ ...doc.data() });
  });
  return {
    props: { cuisines: cuisinesData },
  };
};
