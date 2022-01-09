import Head from "next/head";
import NavbarHome from "./NavbarHome";
import { Box } from "@chakra-ui/react";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/apple-touch-icon.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/favicon-32x32.png"
        />
        <link
          rel="icon"
          type="image/png"
          sizes="16x16"
          href="/favicon-16x16.png"
        />
      </Head>
      <Box pos={"relative"}>
        <NavbarHome />
        {children}
      </Box>
    </>
  );
};

export default Layout;
