// The head component dynamically manage the documents head section like meta, title etc.
import Head from "next/head";
import { ThemeProvider } from "styled-components";
import { SessionProvider } from "next-auth/react";

import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import Navbar from "../components/Navbar";

import "bootstrap/dist/css/bootstrap.min.css";
import "styles/globals.css";
import "styles/layout.css";
import "../components/Navbar.css";

const theme = {
  colors: {
    primary: "#355c7d",
  },
};

function MyApp({ Component, pageProps: { session, ...pageProps } }) {
  if (Component.getLayout) {
    return Component.getLayout(<Component {...pageProps} />);
  }
  return (
    <ThemeProvider theme={theme}>
      <SessionProvider>
        <Head>
          <title>Learning Next.js</title>
          <meta name="description" content="Learning Next.js" />
        </Head>
        <Header />
        <Navbar />
        <Component {...pageProps} />
        <Footer />
      </SessionProvider>
    </ThemeProvider>
  );
}

export default MyApp;
