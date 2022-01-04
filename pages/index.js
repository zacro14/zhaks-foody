import { Box } from "@chakra-ui/react";
import Head from "next/head";
import FoodCategory from "../components/FoodCategory";
import HeroSection from "../components/HeroSection";
import Layout from "../components/Layout";
import NavbarHome from "../components/NavbarHome";
//import { cuisines } from "../data/cuisines";
import { collection, doc, getDocs, getFirestore } from "firebase/firestore";
import { db } from "../lib/firebase.config";

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
    cuisinesData.push({ _id: doc.id, ...doc.data() });
  });
  return {
    props: { cuisines: cuisinesData },
  };
};
