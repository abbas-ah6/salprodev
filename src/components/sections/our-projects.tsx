"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { IOurProjects, IProject } from "@/types";
import Button from "../elements/button";
import CustomLink from "../elements/CustomLink";

const ProjectCard: React.FC<{
  project: IProject;
  isSelected: boolean;
  onClick: () => void;
}> = ({ project, isSelected, onClick }) => (
  <div
    className={`px-[24px] py-[12px] border border-solid ${
      isSelected ? "border-brand-purple" : "border-brand-light-purple"
    } cursor-pointer transition-all duration-300 ease-in-out`}
    onClick={onClick}
  >
    <span
      className={`m-0 text-lB font-normal ${
        isSelected ? "text-brand-purple" : "text-brand-black"
      }  w-full max-w-full`}
    >
      {project.name || ""}
    </span>
  </div>
);

const MobileProjectCard: React.FC<{
  project: IProject;
  isActive: boolean;
  onClick: () => void;
}> = ({ project, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`px-[8px] py-[12px] border border-solid cursor-pointer transition-all duration-300 ease-in-out ${
      isActive ? "border-brand-purple" : "border-transparent"
    }`}
  >
    <div className="flex w-full pb-[12px]">
      <span
        className={`m-0 lg:text-lB text-b16 text-brand-black font-normal w-full max-w-full ${
          isActive ? "text-brand-purple" : "text-brand-black"
        }`}
      >
        {project?.name || ""}
      </span>
    </div>
    <div
      className={`duration-500 ease-in-out flex flex-col ${
        isActive ? "max-h-fit opacity-100" : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      <Image
        loading="lazy"
        src={project.image?.src || ""}
        alt={project.image?.alt || "Project Image"}
        width={520}
        height={380}
        className="w-full max-w-full max-h-[380px] object-cover object-center transition-all duration-300 ease-in-out"
      />
      <p
        className={`m-0 text-b14 leading-medium font-normal w-full max-w-full pt-[12px] transition-all duration-300 ease-in-out`}
      >
        {project?.shortDescription || ""}
      </p>
      <Link
        className="z-[1] hover:text-brand-purple mt-[24px] text-b16 text-brand-black duration-500 ease-in-out leading-medium no-underline"
        href={"#"}
      >
        Learn More
      </Link>
    </div>
  </div>
);

const OurProjects: React.FC<IOurProjects> = ({
  description,
  heading,
  link,
  projects,
}) => {
  const [selectedProject, setSelectedProject] = useState<IProject | null>(
    projects && projects.length > 0 ? projects[0] : null
  );
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleMobileProjectClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const handleProjectClick = (project: IProject) => {
    setSelectedProject(project);
  };

  return (
    <section className="flex flex-col w-full bg-white">
      <div className="flex flex-col lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full container mx-auto">
        <div className="flex flex-col max-w-[725px] w-full justify-start lgjustify-center lg:items-start text-center lg:text-start items-center">
          <h3 className="mt-4 lg:text-h3 text-h3M leading-small text-center lg:text-start text-brand-purple">
            {heading || ""}
          </h3>
          <p className="text-b18 text-brand-gray leading-medium mt-[24px]">
            {description || ""}
          </p>
          <div className="mt-[24px] w-fit" href={"#"}>
            <CustomLink
              type={link?.type}
              loading={false}
              children={link?.children || ""}
              url={link?.url}
            />
          </div>
        </div>
        <div className="relative mt-[48px] lg:flex hidden flex-col-reverse lg:flex-row w-full gap-[42px]">
          <div className="flex-1 flex flex-col relative">
            {selectedProject && (
              <Link href={selectedProject?.url || "#"}>
                <div className="group w-full flex flex-col pb-[24px]">
                  <div className="absolute right-0 w-0 group-hover:w-full duration-500 ease-in-out bottom-0 h-[2px] bg-gradient-to-l from-brand-blue to-white"></div>
                  <Image
                    loading="lazy"
                    src={selectedProject.image?.src || ""}
                    alt={selectedProject.image?.alt || "Project Image"}
                    width={520}
                    height={380}
                    className="w-full max-w-full max-h-[380px] object-cover object-center transition-all duration-300 ease-in-out"
                  />
                  <span className="mt-[16px] text-lB text-brand-purple">
                    {selectedProject.name || ""}
                  </span>
                  <p className="mt-[8px] text-b18 text-brand-gray leading-medium">
                    {selectedProject.shortDescription || ""}
                  </p>
                  <span className="group-hover:text-brand-purple mt-[24px] text-lB text-brand-black duration-500 ease-in-out leading-medium">
                    Learn More
                  </span>
                </div>
              </Link>
            )}
          </div>
          <div className="flex-1 grid lg:grid-cols-1 grid-cols-1 gap-[24px]">
            {projects &&
              projects.length > 0 &&
              projects.map((project, index) => (
                <ProjectCard
                  key={index}
                  project={project}
                  isSelected={selectedProject?.name === project.name}
                  onClick={() => handleProjectClick(project)}
                />
              ))}
          </div>
        </div>
        <div className="lg:hidden flex w-full gap-[12px]">
          {projects &&
            projects.length > 0 &&
            projects.map((project, index) => (
              <MobileProjectCard
                key={index}
                project={project}
                isActive={activeIndex === index}
                onClick={() => handleMobileProjectClick(index)}
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default OurProjects;
