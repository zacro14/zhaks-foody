import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import React from "react";
import Layout from "../components/Layout";
import Navbar from "../components/NavBar";

const Custom404 = () => {
  return (
    <>
      <Container as={"main"} h={"auto"} py={"10"}>
        <Flex flexDirection={"column"} alignItems={"center"}>
          <Box display={"flex"} flexDir={"column"} alignItems={"center"}>
            <Text
              fontSize={"4xl"}
              textTransform={"capitalize"}
              fontWeight={"bold"}
            >
              oops...
            </Text>
            <Text>The page your looking for doesn&apos;t exist</Text>
            <Button mt={"5"} rightIcon={<ArrowForwardIcon />}>
              Go back
            </Button>
          </Box>
          <Image
            src={"/images/illustrations/404 Error.svg"}
            alt={"no data"}
            h={"sm"}
          />
        </Flex>
      </Container>
    </>
  );
};

Custom404.getLayout = (page) => {
  return (
    <Layout>
      <Navbar />
      {page}
    </Layout>
  );
};

export default Custom404;
