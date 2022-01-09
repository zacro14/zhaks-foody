import Link from "next/link";
import { Button, Container, Flex, Image, Text, VStack } from "@chakra-ui/react";

const NotFoundRestaurant = () => {
  return (
    <>
      <Container as={"main"} h={"container.sm"}>
        <Flex flexDirection={"column"}>
          <Image
            src={"/images/illustrations/No-data.svg"}
            alt={"no data"}
            h={"sm"}
          />
          <VStack>
            <Text as="strong">Whoops!</Text>
            <Text>something is missing</Text>
            <Link href={"/"} passHref>
              <Button>Go back</Button>
            </Link>
          </VStack>
        </Flex>
      </Container>
    </>
  );
};

export default NotFoundRestaurant;
