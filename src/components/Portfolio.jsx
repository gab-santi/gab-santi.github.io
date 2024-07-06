import React from "react";
import styles, { layout } from "../styles";
import { portfolio } from "../constants";

{
  /* Create portfolio card */
}
const PorfolioCard = ({ image, name, description, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== portfolio.length - 1 ? "mr-6" : "mr-0"
    }`}
  >
    <div className="flex flex-col ml-3">
      <img src={image} className="rounded-[20px] mb-6" />
      <h4 className="font-poppins font-semibold text-black text-[18px] leading -[23.4px] mb-1">
        {name}
      </h4>
      <p className="font-poppins font-normal text-neutral-600 text-[16px] leading-[24px]">
        {description}
      </p>
    </div>
  </div>
);

const Portfolio = () => (
  <section id="portfolio" className={layout.sectionIrreg}>
    <div className="flex md:flex-row flex-col">
      <h2 className={styles.heading2}>Latest Projects</h2>
      <a
        href="/portfolio"
        className="underline decoration-1 w-full md:text-right text-left mt-6"
      >
        View All
      </a>
    </div>

    <div className={layout.section}>
      {portfolio.slice(0, 3).map((entry, index) => (
        <PorfolioCard key={entry.id} {...entry} index={index} />
      ))}
    </div>
  </section>
);

export default Portfolio;
