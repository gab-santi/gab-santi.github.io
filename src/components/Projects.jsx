import React from "react";
import { projects } from "../constants";
import styles, { layout } from "../styles";
import Button from "./Button";

const ProjectCard = ({ icon, title, content, index }) => (
  <div
    className={`flex flex-row p-6 rounded-[20px] ${
      index !== projects.length - 1 ? "mb-6" : "mb-0"
    }`}
  >
    {/* <div
      className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}
    >
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div> */}
    <div className="flex1 flex flex-col ml-3">
      <h4 className="font-poppins font-semibold text-black text-[18px] leading -[23.4px] mb-1">
        {title}
      </h4>
      <p className="font-poppins font-normal text-neutral-600 text-[16px] leading-[24px]">
        {content}
      </p>
    </div>
  </div>
);

const Projects = () => {
  return (
    <section id="projects" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          I can make <br />
          anything you need.
        </h2>

        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          From data pipelines, websites, desktop apps, APIs, chatbots, machine
          learning models, and more.
        </p>

        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {projects.map((project, index) => (
          <ProjectCard key={project.id} {...project} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
