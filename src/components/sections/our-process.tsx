"use client";

import React from "react";
import Image from "next/image";
import { IOurProcess, IWhyChooseUsCard } from "@/types";
import Carousel from "react-multi-carousel";

const OurProcesssCard: React.FC<IWhyChooseUsCard> = ({
  icon,
  heading,
  description,
}) => (
  <div className="group relative flex flex-col p-[24px] border border-solid border-brand-border-gray lg:justify-start justify-center lg:items-start items-center lg:text-start text-center">
    <div className="absolute right-0 w-0 group-hover:w-full duration-500 ease-in-out bottom-0 h-[2px] bg-gradient-to-l from-brand-purple to-white"></div>
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
    <h3 className="m-0 mt-[24px] text-h6 text-brand-purple leading-small w-full lg:max-w-[520px] max-w-full">
      {heading || ""}
    </h3>
    <p className="m-0 mt-[12px] text-b16 text-brand-gray leading-large text-ellipsis line-clamp-3 w-full lg:max-w-[520px] max-w-full">
      {description || ""}
    </p>
  </div>
);

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

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
        <div className="mt-[48px] w-full">
          {cards && cards.length > 0 && (
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              transitionDuration={500}
            >
              {cards?.map((card, index) => (
                <OurProcesssCard key={index} {...card} />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurProcess;
