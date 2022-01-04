import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";

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
        {children}
        <Footer />
      </Box>
    </>
  );
};

export default Layout;
