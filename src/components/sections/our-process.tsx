import React from "react";
import Image from "next/image";
import { IOurProcess, IWhyChooseUsCard } from "@/types";

const backgroundColors = [
  "bg-[#fff0eb40]", 
  "bg-[#f0e6fe40]", 
  "bg-[#ffe1d740]",
  "bg-[#e1ccfe40]", 
  "bg-[#ffd3c240]", 
  "bg-[#d2b3fd40]",
];

const getColorForIndex = (index: number) => {
  return backgroundColors[index % backgroundColors.length];
};

const OurProcesssCard: React.FC<IWhyChooseUsCard> = ({
  icon,
  heading,
  description,
  index, // Add index as a prop to get a unique color
}) => (
  <div
    className={`group relative flex flex-col p-[24px] border border-solid border-brand-border-gray lg:justify-start justify-center lg:items-start items-center lg:text-start text-center transition-all duration-300 ease-in-out ${getColorForIndex(index)}`}
  >
    <div className="absolute right-[50%] w-0 group-hover:right-0 group-hover:w-full duration-500 ease-in-out bottom-0 h-[1px] bg-gradient-to-l from-brand-purple to-brand-orange"></div>
    <div>
      <Image
        loading="lazy"
        src={icon?.src || ""}
        alt={icon?.alt || "Why Choose Us Icon"}
        width={60}
        height={60}
        className="w-full h-full max-w-[60px] max-h-[60px] object-contain object-center"
      />
    </div>
    <h3 className="m-0 mt-[24px] text-lB text-brand-purple leading-small w-full lg:max-w-[520px] max-w-full">
      {heading || ""}
    </h3>
    <p className="m-0 mt-[12px] z-[1] text-b14 text-brand-gray leading-large text-justify w-full lg:max-w-[520px] max-w-full">
      {description || ""}
    </p>
  </div>
);

const OurProcess: React.FC<IOurProcess> = ({ heading, description, cards }) => {
  return (
    <section className="flex flex-col w-full bg-white">
      <div className="flex flex-col px-[30px] py-[60px] w-full container mx-auto">
        <div className="flex flex-col max-w-[725px] w-full lg:justify-start justify-center text-center lg:text-start items-center lg:items-start">
          <h3 className="mt-4 text-h3 leading-small text-center lg:text-start text-brand-purple">
            {heading || ""}
          </h3>
          <p className="text-b18 text-brand-gray leading-medium mt-[24px]">
            {description || ""}
          </p>
        </div>
        {cards && cards.length > 0 && (
          <div className="mt-[48px] w-full grid grid-cols-1 lg:grid-cols-3 gap-[32px]">
            {cards.map((card, index) => (
              <OurProcesssCard key={index} {...card} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurProcess;
