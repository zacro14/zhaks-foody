import { Box } from "@chakra-ui/react";
import Head from "next/head";

const Restaurant = () => {
  return (
    <>
      <Head>
        <title> Zhacks Foody | Restaurant</title>
      </Head>
      <Box
        as={"main"}
        px={"10"}
        bgColor={"gray.100"}
        h={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      >
        k
      </Box>
    </>
  );
};

export default Restaurant;
