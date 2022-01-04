import { StarIcon } from "@chakra-ui/icons";

import {
  Badge,
  Box,
  Flex,
  Heading,
  Image,
  Spacer,
  Text,
} from "@chakra-ui/react";

const Cuisine = ({ data }) => {
  return (
    <>
      <Box my={"5"} _hover={{ cursor: "pointer" }}>
        <Flex flexDirection={"column"}>
          <Box
            bgColor={"gray.100"}
            h={"auto"}
            rounded={"md"}
            mb={"2"}
            overflow={"hidden"}
          >
            <Image
              rounded={"md"}
              src={data.image}
              alt={data.key}
              height={"full"}
              width={"full"}
              fit={"cover"}
              fallbackSrc={"/images/placeholder.avif"}
            />
          </Box>
          <Box display={"flex"}>
            <Heading
              textTransform={"capitalize"}
              isTruncated
              fontSize={16}
              w={"max-content"}
            >
              {data.name + " "}-{" " + data.branch}
            </Heading>
            <Spacer />
            <Badge
              display={"flex"}
              alignItems={"center"}
              rounded={"lg"}
              fontWeight={"normal"}
            >
              <StarIcon role={"rating"} boxSize={"3"} color={"yellow.500"} />
              <Text as={"span"} fontSize={"xs"} pl={"1"}>
                <Text as={"strong"} fontWeight={"bold"}>
                  {data.rating}
                </Text>
                /5
              </Text>
            </Badge>
          </Box>
          <Box>
            <Text
              as={"span"}
              pt={"5"}
              textTransform={"lowercase"}
              fontWeight={"light"}
              fontSize={"small"}
              color={"gray.600"}
              isTruncated
            >
              {data.tags.join(", ")}
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Cuisine;
