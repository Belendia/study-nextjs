// The head component dynamically manage the documents head section like meta, title etc.
import Head from "next/head";

import styles from "../styles/about.module.css";
import Footer from "../components/footer";

// even if we define Head component in the _app.js file, the Head section defined
// in the about section will be merged with the Head definition in the _app.js and override any conflicting element like title.
function About() {
  return (
    <>
      <Head>
        <title>About</title>
        <meta name="description" content="About page" />
      </Head>
      <div className={styles.highlight}>About Page</div>
    </>
  );
}

export default About;

About.getLayout = (page) => {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
