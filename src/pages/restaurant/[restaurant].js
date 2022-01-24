import Head from "next/head";
import Image from "next/image";
import MenuSection from "../../components/MenuSection";
import { menuTitle, macdought } from "../../data/menu";
import { StarIcon } from "@chakra-ui/icons";
import {
  Badge,
  Box,
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
import { collection, doc, getDoc, getDocs } from "firebase/firestore";
import { db } from "../../lib/firebase.config";

const Restaurant = ({ restaurant }) => {
  console.log(restaurant);
  return (
    <>
      <Head>
        <title>
          Zhacks Foody | Restaurant -{" "}
          {restaurant.name.charAt(0).toUpperCase() + restaurant.name.slice(1)}
        </title>
      </Head>
      <Box
        as={"main"}
        pb={"5"}
        bgColor={"#F7F7F7"}
        minH={{ base: "container.sm", md: "container.md", lg: "container.md" }}
      >
        <Box
          as={"section"}
          h={{ base: "48", md: "60", lg: "60" }}
          bgColor={"gray.200"}
          pos={"relative"}
        >
          <Image
            src={restaurant.heroimageURL}
            placeholder={"blur"}
            blurDataURL={restaurant.heroimageURL}
            priority
            quality={100}
            alt="hero-banner"
            layout={"fill"}
            objectFit={"cover"}
          />
        </Box>

        <Box as={"section"} pb={"5"} bgColor={"white"}>
          <Box px={{ base: "5", md: "10", lg: "10" }} pt={"3"}>
            <Heading textTransform={"capitalize"} isTruncated>
              {restaurant.name} - {restaurant.branch}
            </Heading>
          </Box>

          <VStack
            align={"flex-start"}
            px={{ base: "5", md: "10", lg: "10" }}
            pt={"2"}
            justifyContent={"center"}
          >
            <HStack h={"5"} spacing={"2"}>
              <Text
                as={"span"}
                textTransform={"capitalize"}
                fontWeight={"normal"}
                color={"gray.600"}
                isTruncated
              >
                {restaurant.tags.join(", ")}
              </Text>
              <Box color={"gray.500"}>&bull;</Box>
              <Box>
                <Badge
                  bgColor={"white"}
                  display={"flex"}
                  alignItems={"center"}
                  fontWeight={"normal"}
                  paddingInline={"unset"}
                >
                  <StarIcon
                    role={"rating"}
                    boxSize={"3"}
                    color={"yellow.400"}
                  />
                  <Text as={"span"} fontSize={"xs"} pl={"1"}>
                    <Text as={"strong"} fontWeight={"bold"}>
                      {restaurant.rating}
                    </Text>
                    /5
                  </Text>
                </Badge>
              </Box>
            </HStack>
          </VStack>
        </Box>

        <Box as={"section"} minH={"container.md"}>
          <Tabs align="center" id={"menu"}>
            <TabList
              borderBottom={"none"}
              shadow={"md"}
              bgColor={"white"}
              position={"sticky"}
              top={"20"}
              zIndex={"sticky"}
              overflowX={{ base: "auto", md: "auto", lg: "auto" }}
              overflowY={"hidden"}
            >
              {menuTitle.length > 0 &&
                menuTitle.map((menu) => (
                  <Tab
                    key={menu.id}
                    p={"5"}
                    color={"gray.700"}
                    _focus={{ outline: "none" }}
                    fontWeight={"normal"}
                    _hover={{ color: "red.500" }}
                    _selected={{
                      color: "red.500",
                      borderColor: "currentColor",
                      fontWeight: "semibold",
                    }}
                  >
                    {menu.menu}
                  </Tab>
                ))}
            </TabList>
            <TabPanels>
              {menuTitle.length > 0 &&
                menuTitle.map((menu) => (
                  <TabPanel key={menu.id} p={"unset"}>
                    <Box>
                      <VStack>
                        <MenuSection menu={menu} />
                      </VStack>
                    </Box>
                  </TabPanel>
                ))}
            </TabPanels>
          </Tabs>
        </Box>
      </Box>
    </>
  );
};

export const getStaticProps = async (context) => {
  const docRef = doc(db, "restaurants", context.params.restaurant);
  const docSnap = await getDoc(docRef);

  if (docSnap.exists()) {
    console.log("Document data:", docSnap.data());
    const restaurant = { ...docSnap.data() };
    return {
      props: { restaurant: restaurant },
    };
  } else {
    console.log("No such document!");
  }
};

export const getStaticPaths = async () => {
  const querysnapshot = await getDocs(collection(db, "restaurants"));

  const getRestaurantData = [];
  querysnapshot.forEach((doc) => {
    getRestaurantData.push({ _id: doc.id, ...doc.data() });
  });

  const paths = getRestaurantData.map((restaurant) => ({
    params: { restaurant: restaurant._id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Restaurant;
