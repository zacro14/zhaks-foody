import Head from "next/head";
import Image from "next/image";
import { menuTitle } from "../data/menu";
import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
  Center,
  Divider,
  Heading,
  HStack,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  VStack,
} from "@chakra-ui/react";

const Restaurant = () => {
  return (
    <>
      <Head>
        <title> Zhacks Foody | Restaurant</title>
      </Head>
      <Box
        as={"main"}
        pb={"5"}
        bgColor={"white"}
        h={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      >
        <Box as={"section"} h={"xs"} bgColor={"gray.200"} pos={"relative"}>
          <Image
            src={"/images/restaurant.jpg"}
            placeholder={"blur"}
            blurDataURL={"/images/restaurant.jpg"}
            priority
            alt="hero-banner"
            layout={"fill"}
            objectFit={"cover"}
          />
        </Box>

        <Box as={"section"} pb={"5"}>
          <Box px={"10"} pt={"3"}>
            <Heading>Jollibee - Monuz</Heading>
          </Box>

          <VStack align={"flex-start"} px={"10"} pt={"2"}>
            <HStack h={"5"}>
              <Text
                as={"span"}
                textTransform={"capitalize"}
                fontWeight={"normal"}
                fontSize={"small"}
                color={"gray.600"}
                isTruncated
              >
                burger, american
              </Text>
              <Divider orientation="vertical" />
              <Center>
                <Badge
                  bgColor={"white"}
                  display={"flex"}
                  alignItems={"center"}
                  fontWeight={"normal"}
                  p={"1"}
                >
                  <StarIcon
                    role={"rating"}
                    boxSize={"3"}
                    color={"yellow.500"}
                  />
                  <Text as={"span"} fontSize={"xs"} pl={"1"}>
                    <Text as={"strong"} fontWeight={"bold"}>
                      4.6
                    </Text>
                    /5
                  </Text>
                </Badge>
              </Center>
            </HStack>
          </VStack>
        </Box>

        <Box as={"section"} pt={"2"}>
          <Tabs align="center" id={"menu"}>
            <TabList borderBottom={"unset"} shadow={"md"}>
              {menuTitle.length > 0 &&
                menuTitle.map((menu, index) => (
                  <Tab
                    key={index}
                    _focus={{ outline: "none" }}
                    fontWeight={"bold"}
                    _hover={{ color: "red.500" }}
                    _selected={{
                      color: "red.500",
                      borderColor: "currentColor",
                    }}
                  >
                    {menu.menu}
                  </Tab>
                ))}
            </TabList>
            <TabPanels>
              <TabPanel>ok</TabPanel>
            </TabPanels>
            <TabPanels>
              <TabPanel>ok</TabPanel>
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export default Restaurant;
