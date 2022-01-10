import { Box, Container, Heading } from "@chakra-ui/react";

const MenuSection = ({ menu }) => {
  return (
    <>
      <Box
        id={`menu-category-${menu.id}`}
        key={menu.id}
        as={"section"}
        height={"xs"}
      >
        <Heading mt={"24"}>{menu.menu}</Heading>
      </Box>
    </>
  );
};

export default MenuSection;
