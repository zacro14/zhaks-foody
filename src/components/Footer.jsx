import FooterLinks from "./FooterLinks";
import { cuisines, aboutCompany, forYou } from "../data/footerlinks";
import { MdOutlineFacebook } from "react-icons/md";
import { AiFillTwitterCircle, AiOutlineWechat } from "react-icons/ai";
import {
  Box,
  Center,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
} from "@chakra-ui/react";

const Footer = () => {
  const year = new Date().getFullYear();

  return (
    <>
      <Box
        bgColor={"gray.100"}
        as="footer"
        h={"auto"}
        px={{ base: "2", sm: "5", md: "10", lg: "10" }}
      >
        <Box display={"flex"} alignItems={"center"}>
          <Box
            display={"flex"}
            color={"gray.600"}
            py={{ base: "4", sm: "10", md: "10" }}
            fontWeight={"bold"}
            fontSize={"2xl"}
          >
            <Box> Zhack&rsquo;s</Box>
            <Text as={"span"} color={"red.500"} fontWeight={"normal"} pr={"2"}>
              Foody
            </Text>
          </Box>
        </Box>
        <Divider borderColor={"gray.300"} />
        <Grid
          templateColumns={{
            base: "repeat(2, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(4, 1fr)",
          }}
          gap={{ base: "none", md: "5" }}
          rowGap={"5"}
          mt={"5"}
        >
          <GridItem color={"gray.700"}>
            <Box
              fontSize={"md"}
              fontWeight={"semibold"}
              textTransform={"uppercase"}
              letterSpacing={"widest"}
            >
              Popular Cuisines
            </Box>
            <Box mt={{ base: "2", sm: "2", md: "5" }}>
              {cuisines.map((cuisine, index) => (
                <FooterLinks props={cuisine} key={index} />
              ))}
            </Box>
          </GridItem>
          <GridItem color={"gray.700"} fontSize={"16px"} fontWeight={"normal"}>
            <Box>
              <Box
                display={"flex"}
                fontWeight={"semibold"}
                letterSpacing={{ base: "normal", md: "widest" }}
                textTransform={"uppercase"}
              >
                About
                <Box
                  textTransform={"none"}
                  ml={"3"}
                  fontSize={"md"}
                  fontWeight={"normal"}
                >
                  Zhack&rsquo;s
                </Box>
                <Text
                  as={"span"}
                  color={"red.500"}
                  fontWeight={"normal"}
                  pr={"2"}
                  textTransform={"none"}
                >
                  Foody
                </Text>
              </Box>
            </Box>
            <Box mt={{ base: "2", sm: "2", md: "5" }}>
              {aboutCompany.map((link, index) => (
                <FooterLinks props={link} key={index} />
              ))}
            </Box>
          </GridItem>
          <GridItem>
            <Box
              textTransform={"uppercase"}
              letterSpacing={"widest"}
              fontWeight={"semibold"}
            >
              For you
            </Box>
            <Box mt={{ base: "2", sm: "2", md: "5" }}>
              {forYou.map((foryou, index) => (
                <FooterLinks props={foryou} key={index} />
              ))}
            </Box>
          </GridItem>
          <GridItem>
            <Box
              textTransform={"uppercase"}
              letterSpacing={"widest"}
              fontWeight={"semibold"}
            >
              Social Link
              <Flex alignItems={"center"} mt={{ base: "2", sm: "2", md: "5" }}>
                <Box
                  pr={"4"}
                  color={"facebook.500"}
                  _hover={{ cursor: "pointer" }}
                >
                  <Icon as={MdOutlineFacebook} boxSize={"7"} />
                </Box>
                <Box
                  pr={"4"}
                  color={"twitter.500"}
                  _hover={{ cursor: "pointer" }}
                >
                  <Icon as={AiFillTwitterCircle} boxSize={"7"} />
                </Box>
                <Box
                  pr={"4"}
                  color={"whatsapp.500"}
                  _hover={{ cursor: "pointer" }}
                >
                  <Icon as={AiOutlineWechat} boxSize={"7"} />
                </Box>
              </Flex>
            </Box>
          </GridItem>
        </Grid>
        <Center py={"5"}>
          <Box
            textTransform={"none"}
            ml={"3"}
            fontSize={"md"}
            fontWeight={"normal"}
          >
            &copy; Zhack&rsquo;s
          </Box>
          <Text
            as={"span"}
            color={"red.500"}
            fontWeight={"normal"}
            pr={"2"}
            textTransform={"none"}
          >
            Foody
          </Text>
          {year}
        </Center>
      </Box>
    </>
  );
};

export default Footer;
