import { AddIcon } from "@chakra-ui/icons";
import {
  Box,
  Center,
  Flex,
  GridItem,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

const MenuItem = ({ menu }) => {
  return (
    <>
      <GridItem
        rounded={"md"}
        _hover={{ boxShadow: "lg", cursor: "pointer" }}
        bgColor={"white"}
        transition={"0.3s ease-in-out 0s"}
      >
        <Flex p={"3"}>
          <Box pos={"relative"} mr={"5"}>
            <Image
              src={menu.imageUrl}
              alt={menu.name}
              objectFit={"cover"}
              borderRadius={"md"}
              width={"48"}
              height={"32"}
              fallbackSrc={"/images/placeholder.avif"}
            />
          </Box>
          <Box
            display={"flex"}
            flexDir={"column"}
            textAlign={"left"}
            width={"full"}
          >
            <Box>
              <Heading fontSize={"medium"} wordBreak={"break-word"}>
                {menu.name}
              </Heading>
              <Text
                mt={"2"}
                wordBreak={"break-word"}
                color={"gray.500"}
                fontSize={{ base: "small", md: "initial", lg: "initial" }}
              >
                {menu.desc}
              </Text>
            </Box>
            <Spacer />
            <Flex alignItems={"flex-end"}>
              <Spacer />
              <Center boxSize={"6"} bgColor={"red.500"} rounded={"sm"}>
                <AddIcon color={"white"} boxSize={"3"} />
              </Center>
            </Flex>
          </Box>
        </Flex>
      </GridItem>
    </>
  );
};

export default MenuItem;
