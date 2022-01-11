import { Box, Heading } from "@chakra-ui/react";

const MenuSection = ({ menu }) => {
  return (
    <>
      <Box
        id={`menu-category-${menu.id}`}
        key={menu.id}
        as={"section"}
        height={"xs"}
        bgColor={"white"}
        w={"full"}
        px={"10"}
        py={"5"}
      >
        <Heading fontSize={"2xl"} fontWeight={"semibold"}>
          {menu.menu}
        </Heading>
      </Box>
    </>
  );
};

export default MenuSection;
