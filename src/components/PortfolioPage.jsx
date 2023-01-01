import React from "react";
import styles from "../styles";

import Footer from "./Footer";

const PortfolioPage = () => {
  return (
    <section id="portfoliopage">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Portfolio Page label */}
          <h3 className="font-poppins font-semibold ss:text-[50px] text-[50px] text-black ss:leading-[100px] leading-[75px] w-full">
            Portfolio
          </h3>

          <Footer />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
