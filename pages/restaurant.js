import Head from "next/head";
import Image from "next/image";
import NextLink from "next/link";
import { menuTitle } from "../data/menu";
import { StarIcon } from "@chakra-ui/icons";
import {
  Link,
  Badge,
  Box,
  Center,
  Container,
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
import MenuSection from "../components/MenuSection";

const Restaurant = () => {
  return (
    <>
      <Head>
        <title> Zhacks Foody | Restaurant</title>
      </Head>
      <Box
        as={"main"}
        pb={"5"}
        bgColor={"gray.100"}
        minH={{ base: "container.sm", md: "container.md", lg: "container.lg" }}
      >
        <Box as={"section"} h={"60"} bgColor={"gray.200"} pos={"relative"}>
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

        <Box as={"section"} pb={"5"} bgColor={"white"}>
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

        <Box as={"section"}>
          <Tabs align="center" id={"menu"} position={"sticky"} top={"20"}>
            <TabList borderBottom={"unset"} shadow={"md"} bgColor={"white"}>
              {menuTitle.length > 0 &&
                menuTitle.map((menu, index) => (
                  <Tab
                    p={"5"}
                    color={"gray.700"}
                    key={index}
                    _focus={{ outline: "none" }}
                    fontWeight={"semibold"}
                    _hover={{ color: "red.500" }}
                    _selected={{
                      color: "red.500",
                      borderColor: "currentColor",
                      fontWeight: "bold",
                    }}
                  >
                    <NextLink href={`#menu-category-${menu.id}`}>
                      <Link
                        textDecoration={"none"}
                        _hover={{ textDecoration: "none" }}
                        _focus={{ border: "none" }}
                      >
                        {menu.menu}
                      </Link>
                    </NextLink>
                  </Tab>
                ))}
            </TabList>
            <TabPanels></TabPanels>
          </Tabs>

          <Box>
            <VStack
              mt={"20"}
              alignItems={"flex-start"}
              justifyContent={"start"}
            >
              {menuTitle.length > 0 &&
                menuTitle.map((menu) => (
                  <MenuSection key={menu.id} menu={menu} />
                ))}
            </VStack>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Restaurant;
