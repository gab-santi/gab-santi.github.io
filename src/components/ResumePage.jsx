import React from "react";
import styles from "../styles";

import Footer from "./Footer";

const ResumePage = () => {
  return (
    <section id="portfoliopage">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Portfolio Page label */}
          <h3 className="font-poppins font-semibold ss:text-[50px] text-[50px] text-black ss:leading-[100px] leading-[75px] w-full">
            Resume
          </h3>

          <a
            href="https://drive.google.com/file/d/1NCjDlCO1bRWvq351tWV9BDMe1R-zwgDx/view?usp=sharing"
            target="_blank"
            className="font-poppins underline"
          >
            ⬇️ Download
          </a>

          {/* Resume embedded from GDrive */}
          <div className="flex flex-col items-center">
            <iframe
              src="https://drive.google.com/file/d/1NCjDlCO1bRWvq351tWV9BDMe1R-zwgDx/preview"
              height="480"
              className="mt-5 sm:w-[100%]"
              allow="autoplay"
            ></iframe>
          </div>
          <Footer />
        </div>
      </div>
    </section>
  );
};

export default ResumePage;
