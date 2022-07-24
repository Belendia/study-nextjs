import styles from "../styles/about.module.css";
import Footer from "../components/footer";

function About() {
  return <div className={styles.highlight}>About Page</div>;
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
