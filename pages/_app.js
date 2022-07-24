// The head component dynamically manage the documents head section like meta, title etc.
import Head from "next/head";
import { ThemeProvider } from "styled-components";

import Header from "../components/Header";
import Footer from "../components/Footer";

import "bootstrap/dist/css/bootstrap.min.css";
import "../styles/globals.css";
import "../styles/layout.css";

const theme = {
  colors: {
    primary: "#355c7d",
  },
};

function MyApp({ Component, pageProps }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <ThemeProvider theme={theme}>
      <Head>
        <title>Learning Next.js</title>
        <meta name="description" content="Learning Next.js" />
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </ThemeProvider>
  );
}

export default MyApp;
