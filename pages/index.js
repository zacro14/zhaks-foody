import { Box } from "@chakra-ui/react";
import Head from "next/head";
import FoodCategory from "../components/FoodCategory";
import HeroSection from "../components/HeroSection";

export default function Home() {
  return (
    <>
      <Head>
        <title>Zhacks Foody</title>

        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>

      <HeroSection />
      <Box id="food cuisine" pos={"relative"} h={"auto"}>
        <FoodCategory />
      </Box>
    </>
  );
}
