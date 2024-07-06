import React, { useEffect } from "react";
import styles from "../styles";

import Footer from "./Footer";

import { aboutMeContent } from "../constants";

const AboutPage = () => {
  useEffect(() => {
    document.title = "gabsanti | About";
  }, []);

  return (
    <section id="aboutpage">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* About Me label */}
          <h3 className="font-poppins font-semibold ss:text-[50px] text-[50px] text-black ss:leading-[100px] leading-[75px] w-full">
            About Me
          </h3>

          {/* About me content */}
          {/* Planned layout: image-caption-text */}
          {aboutMeContent.map((content, index) => (
            <div
              key={content.id}
              id={index}
              className="flex flex-col items-center py-[6px] px-4 mb-2 mr-3"
            >
              {/*  <img
                className="mt-4 md:w-[60%] md:h-[60%] ss:w-full ss:h-full"
                src={content.image}
              />
              <p className="font-poppins italic mt-4">{content.imageCaption}</p> */}
              <p className="font-poppins mt-4">{content.text}</p>
            </div>
          ))}

          <Footer />
        </div>
      </div>
    </section>
  );
};

export default AboutPage;
