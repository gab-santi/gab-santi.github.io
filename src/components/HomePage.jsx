import React, { useEffect } from "react";

import styles from "../styles";

import ScrollToHashElement from "@cascadia-code/scroll-to-hash-element";

import {
  Hero,
  Stats,
  Projects,
  Portfolio,
  ContactPage,
  Footer,
} from "../components";

const HomePage = () => {
  useEffect(() => {
    document.title = "gabsanti";
  }, []);

  return (
    <section id="homepage">
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>

      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <ScrollToHashElement
            behavior="smooth"
            inline="center"
            block="center"
          />
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
