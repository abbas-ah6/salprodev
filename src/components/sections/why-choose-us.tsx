import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../elements/button";
import { IWhyChooseUs, IWhyChooseUsCard } from "@/types";

const WhuChooseUsCard: React.FC<IWhyChooseUsCard> = ({
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
        width={32}
        height={32}
        className="w-full h-full max-w-[32px] max-h-[32px] object-contain object-center"
      />
    </div>
    <h3 className="m-0 mt-[16px] text-h6 text-brand-purple leading-small w-full lg:max-w-[520px] max-w-full">
      {heading || ""}
    </h3>
    <p className="m-0 mt-[10px] text-b16 text-brand-gray leading-large text-ellipsis line-clamp-3 w-full lg:max-w-[520px] max-w-full">
      {description || ""}
    </p>
  </div>
);

const WhyChooseUs: React.FC<IWhyChooseUs> = ({
  heading,
  description,
  link,
  image,
  cards,
}) => {
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
          <Link className="mt-[24px] w-fit" href={"#"}>
            <Button
              type={link?.type}
              loading={false}
              children={link?.children || ""}
            />
          </Link>
        </div>
        <div className="flex lg:flex-row flex-col w-full gap-[60px] mt-[48px] justify-start lg:justify-center lg:items-start items-center">
          <div className="w-full h-full max-w-[420px] max-h-[420px]">
            <Image
              className="w-full h-full max-w-[420px] max-h-[420px] object-contain object-center"
              src={image?.src || ""}
              alt={image?.alt || ""}
              width={420}
              height={420}
            />
          </div>
          {cards && cards.length > 0 && (
            <div className="w-full grid lg:grid-cols-2 gird-cols-1 justify-center gap-[24px]">
              {cards?.map((card, index) => (
                <WhuChooseUsCard key={index} {...card} />
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
