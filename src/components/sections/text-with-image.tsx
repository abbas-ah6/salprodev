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
      <div className="flex flex-col px-[30px] py-[60px] w-full container mx-auto">
        <div className="flex lg:flex-row flex-col w-full gap-[60px] mt-[48px] justify-start lg:justify-center lg:items-end items-center">
          <div className="w-full max-h-[full] max-w-[460px]">
            <Image
              className="w-full h-full max-w-[460px] max-h-[420px] object-contain object-center"
              src={image?.src || ""}
              alt={image?.alt || ""}
              width={460}
              height={420}
            />
            <div className="w-full h-[1px] bg-gradient-to-r from-brand-purple to-brand-orange"></div>
          </div>
          <div className="w-full flex flex-col gap-[16px]">
            <h3 className="text-h3 leading-small text-center lg:text-start text-brand-purple">
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
            <div className="mt-[24px] w-fit" href={"#"}>
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
