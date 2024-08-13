import React from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../elements/button";
import { ITextWithImage } from "@/types";
import CustomLink from "../elements/CustomLink";

const TextWithImage: React.FC<ITextWithImage> = ({
  heading,
  description,
  link,
  image,
  bulletPoints,
}) => {
  return (
    <section className="flex flex-col w-full bg-brand-offwhite">
      <div className="flex flex-col lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full container mx-auto">
        <div className="flex lg:flex-row flex-col-reverse w-full gap-[60px] mt-[48px] justify-start lg:justify-center lg:items-end items-center">
          <div className="w-full max-h-full lg:max-w-[420px] max-w-[280px] lg:max-h-[420px]">
            <Image
              className="w-full h-full lg:max-w-[420px] max-w-[280px] lg:max-h-[420px] max-h-[280px] object-contain object-center"
              src={image?.src || ""}
              alt={image?.alt || ""}
              width={460}
              height={420}
            />
            <div className="w-full h-[1px] bg-gradient-to-r from-brand-purple to-brand-orange"></div>
          </div>
          <div className="w-full flex flex-col gap-[16px]">
            <h3 className="lg:text-h3 text-h3M leading-small text-center lg:text-start text-brand-purple">
              {heading || ""}
            </h3>
            <p className="text-b18 text-brand-gray leading-medium">
              {description || ""}
            </p>
            {bulletPoints && bulletPoints.length > 0 && (
              <ul className="">
                {bulletPoints?.map((item, index) => (
                  <li className="mt-[4px] text-b18 text-brand-gray leading-medium" key={index}>{item?.text}</li>
                ))}
              </ul>
            )}
            <div className="mt-[24px] lg:w-fit w-full lg:justify-start justify-center lg:items-start items-center" href={"#"}>
              <CustomLink
                type={link?.type}
                loading={false}
                children={link?.children || ""}
                url={link?.url}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TextWithImage;
