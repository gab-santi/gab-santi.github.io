import React from "react";

import styles from "../styles";

import {
  Hero,
  Stats,
  Projects,
  Portfolio,
  ContactPage,
  Footer,
} from "../components";

const HomePage = () => {
  return (
    <section id="homepage">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Projects />
          <Portfolio />
          <ContactPage />
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default HomePage;
