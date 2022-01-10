import Image from "next/image";
import { StarIcon } from "@chakra-ui/icons";
import { Badge, Box, Flex, Heading, Spacer, Text } from "@chakra-ui/react";

const Cuisine = ({ data }) => {
  return (
    <>
      <Box my={{ base: null, md: "5", lg: "5" }} _hover={{ cursor: "pointer" }}>
        <Flex flexDirection={"column"}>
          <Box
            bgColor={"gray.100"}
            w={"full"}
            h={{ base: "44", lg: "56" }}
            mb={"2"}
            overflow={"hidden"}
            pos={"relative"}
          >
            <Image
              src={data.image}
              alt={data.key}
              layout={"fill"}
              objectFit={"cover"}
              placeholder={"blur"}
              blurDataURL={data.image}
              quality={100}
            />
          </Box>
          <Box display={"flex"}>
            <Heading
              textTransform={"capitalize"}
              isTruncated
              fontSize={16}
              w={"max-content"}
              _hover={{ textDecoration: "underline" }}
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
              textTransform={"capitalize"}
              fontWeight={"normal"}
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
