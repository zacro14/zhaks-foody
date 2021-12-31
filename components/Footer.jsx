import {
  Box,
  Container,
  Divider,
  Flex,
  Grid,
  GridItem,
  Icon,
  Text,
} from "@chakra-ui/react";
import {
  AiFillTwitterCircle,
  AiOutlineTwitter,
  AiOutlineWechat,
  AiOutlineWhatsApp,
} from "react-icons/ai";
import { MdOutlineFacebook } from "react-icons/md";
import FooterLinks from "./FooterLinks";

const Footer = () => {
  return (
    <>
      <Box
        alignItems={"center"}
        justifyContent={"center"}
        bgColor={"gray.100"}
        height={"auto"}
        as="footer"
      >
        <Box marginX={"20"} display={"flex"} alignItems={"center"}>
          <Box
            display={"flex"}
            color={"gray.600"}
            py={"10"}
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
        <Grid templateColumns={"repeat(4, 1fr)"} pt={"10"} px={"20"} h={"xs"}>
          <GridItem color={"gray.700"}>
            <Box
              fontSize={"md"}
              fontWeight={"semibold"}
              textTransform={"uppercase"}
              letterSpacing={"widest"}
            >
              Popular Cuisines
            </Box>
            <Box mt={"5"}>
              <FooterLinks props={"Chinese Food"} params={"Cuisine/Chinese"} />
              <FooterLinks props={"Filipino Food"} />
              <FooterLinks props={"Japanese Food"} />
              <FooterLinks props={"Korean Food"} />
              <FooterLinks props={"Indian Food"} />
            </Box>
          </GridItem>
          <GridItem color={"gray.700"} fontSize={"16px"} fontWeight={"normal"}>
            <Box>
              <Box
                display={"flex"}
                fontWeight={"semibold"}
                letterSpacing={"widest"}
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
            <Box mt={"5"}>
              <FooterLinks props={"Who We Are"} />
              <FooterLinks props={"Careers"} />
              <FooterLinks props={"Blog"} />
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
            <Box mt={"5"}>
              <FooterLinks props={"FAQ"} />
              <FooterLinks props={"Privacy"} />
              <FooterLinks props={"Terms"} />
            </Box>
          </GridItem>
          <GridItem>
            <Box
              textTransform={"uppercase"}
              letterSpacing={"widest"}
              fontWeight={"semibold"}
            >
              Social Link
              <Flex alignItems={"center"} mt={"5"}>
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
      </Box>
    </>
  );
};

export default Footer;
