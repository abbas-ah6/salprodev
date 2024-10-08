import React from "react";

import { IServiceHero } from "@/types";
import Image from "next/image";
import CustomLink from "../elements/CustomLink";

const ServiceHero: React.FC<IServiceHero> = ({
  links,
  heading,
  subHeading,
  tag,
  image,
}) => {
  return (
    <section className="relative w-full bg-white hero-container">
      <div className="gap-[48px] overflow-hidden container mx-auto lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full flex justify-center lg:flex-row flex-col min-h-[580px]">
        <div className="z-10 w-full flex flex-col lg:text-start text-center lg:justify-start justify-center lg:items-start items-center">
          {tag && (
            <span className="m-0 font-normal uppercase text-b18 text-brand-purple leading-small">
              {tag || ""}
            </span>
          )}
          <h1 className="m-0 mt-[24px] lg:text-h1 text-h1M capitalize font-light leading-small text-brand-purple text-balance">
            {heading || ""}
          </h1>
          <p className="m-0 mt-[24px] text-b18 capitalize font-normal leading-medium text-brand-gray w-full text-balance">
            {subHeading || ""}
          </p>
          <div className="mt-[56px] flex flex-col lg:items-start items-center w-full justify-center lg:justify-start gap-[24px] lg:flex-row">
            {links &&
              links.length > 0 &&
              links.map((item, index) => {
                return (
                  <div key={index}>
                    <CustomLink
                      loading={item?.loading}
                      type={item?.type}
                      children={item?.children}
                      url={item?.url}
                    />
                  </div>
                );
              })}
          </div>
        </div>
        <div className="w-full max-h-full flex justify-center items-end">
          <Image
            className="max-w-[490px] z-[1] w-full max-h-[340px] h-full object-contain object-center"
            width={490}
            height={340}
            src={image?.src || ""}
            alt={image?.alt || "Service Hero Image"}
          />
          <div className="absolute w-[340px] h-[340px] blur-3xl bg-brand-orange/55"></div>
        </div>
      </div>
    </section>
  );
};

export default ServiceHero;
