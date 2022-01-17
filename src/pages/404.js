import Link from "next/link";
import { ArrowForwardIcon } from "@chakra-ui/icons";
import { Box, Button, Container, Flex, Image, Text } from "@chakra-ui/react";
import Head from "next/head";

const Custom404 = () => {
  return (
    <>
      <Head>
        <title> Zhacks Foody | Page Not Found</title>
      </Head>
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
            <Link href={"/"} passHref>
              <Button
                mt={"5"}
                rightIcon={<ArrowForwardIcon />}
                boxShadow={"lg"}
                _focus={{ border: "none" }}
                _hover={{ textDecoration: "underline" }}
              >
                Go back
              </Button>
            </Link>
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

export default Custom404;
