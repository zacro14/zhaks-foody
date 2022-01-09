import { ChakraProvider } from "@chakra-ui/react";
import MainLayout from "../components/MainLayout";
import theme from "../components/Theme";

/*
 where I get this getLayout for chakra provider
https://stackoverflow.com/questions/69078144/next-js-context-provider-wrapping-app-component-with-page-specific-layout-compon
*/

function ZhacksFoody({ Component, pageProps }) {
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <ChakraProvider theme={theme}>
      {getLayout(
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      )}
    </ChakraProvider>
  );
}

export default ZhacksFoody;
