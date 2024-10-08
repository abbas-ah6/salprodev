import React from "react";
import Image from "next/image";
import Link from "next/link";
import { IService, IServicesGrid } from "@/types";
import Button from "../elements/button";
import CustomLink from "../elements/CustomLink";

const ServiceCard: React.FC<IService> = ({
  name,
  serviceImage,
  serviceUrl,
  shortDescription,
}) => (
  <Link href={serviceUrl || "#"}>
    <div className="group relative flex flex-col pb-[12px] border-b border-transparent text-center lg:text-start items-center lg:items-start">
      <div className="absolute right-0 w-0 group-hover:w-full duration-500 ease-in-out bottom-0 h-[2px] bg-gradient-to-l from-brand-blue to-white"></div>
      <div>
        <Image
          loading="lazy"
          src={serviceImage?.src || ""}
          alt={serviceImage?.alt || "Service Image"}
          width={180}
          height={120}
          className="w-full h-full max-w-[180px] max-h-[120px] object-contain object-center"
        />
      </div>
      <h3 className="m-0 mt-[24px] text-h6 text-brand-purple leading-small w-full lg:max-w-[520px] max-w-full">
        {name || ""}
      </h3>
      <p className="m-0 mt-[12px] text-b16 text-brand-gray leading-large text-ellipsis line-clamp-2 w-full lg:max-w-[520px] max-w-full">
        {shortDescription || ""}
      </p>
      <span className="text-b18 text-brand-purple leading-small mt-[16px] m-0 font-normal">
        Learn More
      </span>
    </div>
  </Link>
);

const OurServicesGrid: React.FC<IServicesGrid> = ({
  description,
  heading,
  link,
  services,
}) => {
  return (
    <section className="flex flex-col w-full bg-white">
      <div className="flex flex-col lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full container mx-auto">
        <div className="flex flex-col max-w-[725px] w-full lg:justify-start justify-center lg:items-start items-center">
          <h3 className="mt-4 lg:text-h3 text-h3M leading-small text-center lg:text-start text-brand-purple">
            {heading || ""}
          </h3>
          <p className="lg:text-b18 text-b16 text-center lg:text-start text-brand-gray leading-medium mt-[24px]">
            {description || ""}
          </p>
          <div className="mt-[24px] w-fit">
            <CustomLink
              type={link?.type}
              loading={false}
              children={link?.children || ""}
              url={link?.url}
            />
          </div>
        </div>
        {services && services.length > 0 && (
          <div className="grid lg:grid-cols-2 grid-cols-1 gap-[32px] mt-[48px] w-full">
            {services?.map((service, index) => (
              <ServiceCard key={index} {...service} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default OurServicesGrid;
