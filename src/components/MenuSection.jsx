import MenuItem from "./MenuItem";
import { menu as cuisineMenu } from "../data/menu";
import { Box, Grid, Heading } from "@chakra-ui/react";

const MenuSection = ({ menu }) => {
  return (
    <>
      <Box
        as={"section"}
        height={"full"}
        w={"full"}
        px={{ base: "5", md: "10", lg: "10" }}
        py={{ base: "8", md: "10", lg: "20" }}
      >
        <Heading
          textTransform={"capitalize"}
          textAlign={"left"}
          fontSize={"2xl"}
          fontWeight={"bold"}
          mb={{ base: "5", md: "10", lg: "10" }}
        >
          {menu.name}
        </Heading>

        <Grid
          templateColumns={{
            base: "repeat(1, 1fr)",
            md: "repeat(1, 1fr)",
            lg: "repeat(3, 1fr)",
          }}
          gap={"3"}
          rounded={"sm"}
        >
          {menu.menuItem?.map((menu) => (
            <MenuItem key={menu.name} menu={menu} />
          ))}
        </Grid>
      </Box>
    </>
  );
};

export default MenuSection;
