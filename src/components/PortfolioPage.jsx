import React, { useEffect } from "react";
import styles from "../styles";

import Footer from "./Footer";

import { portfolio } from "../constants";

const PortfolioPage = () => {
  useEffect(() => {
    document.title = "gabsanti | Portfolio";
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <section id="portfoliopage">
      <div className={`bg-primary ${styles.paddingX} ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          {/* Portfolio Page label */}
          <h3 className="font-poppins font-semibold ss:text-[50px] text-[50px] text-black ss:leading-[100px] leading-[75px] w-full">
            Portfolio
          </h3>

          {/* TODO Portfolio content */}
          {portfolio.map((content, index) => (
            <a
              href={content.url}
              key={content.id}
              target="_blank"
              rel="noopener noreferrer"
            >
              <div
                key={content.id}
                id={index}
                //onClick={onClickUrl(content.url)}
                className="flex flex-col px-5 pt-5 hover:bg-stone-200"
              >
                <div id={index} className="flex flex-col sm:flex-row mb-5">
                  <div className="h-full w-[10%] flex justify-center align-middle mb-5 sm:mb-0">
                    <span className="font-azeretMono font-semibold text-lg text-center">
                      {("00" + (index + 1)).slice(-2)}
                    </span>
                  </div>
                  <img
                    src={content.image}
                    className="rounded-[20px] h-[100%] w-[100%] mb-5 sm:h-[15%] sm:w-[15%] sm:mb-0"
                  />

                  <div className="flex flex-col ml-5 w-[90%]">
                    <p className="font-poppins font-semibold text-lg">
                      {content.name}
                    </p>
                    <p className="font-poppins ">{content.description}</p>
                  </div>
                </div>

                <hr
                  className={
                    index == portfolio.length - 1 ? "hidden" : "visible"
                  }
                ></hr>
              </div>
            </a>
          ))}

          <Footer />
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;
