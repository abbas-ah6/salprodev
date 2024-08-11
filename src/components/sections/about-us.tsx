import React from "react";
import Image from "next/image";
import { IAboutUs } from "@/types";
import Button from "../elements/button";
import Link from "next/link";

const AboutUsBanner: React.FC<IAboutUs> = ({
  heading,
  description,
  link,
  showBanner,
  image,
}) => {
  return (
    <section className="flex flex-col bg-white w-full bg-grid-bg bg-cover bg-center bg-no-repeat">
      <div className="container mx-auto flex flex-col justify-center items-center lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full">
        <div className="max-w-[680px] w-full flex flex-col">
          <h2 className="lg:text-h2 text-h2M font-light text-center leading-small text-brand-purple">
            {heading || ""}
          </h2>
          <p className="mt-[16px] text-b18 font-normal leading-medium text-center text-brand-gray">
            {description || ""}
          </p>
          <Link className="mt-[16px]" href={"#"}>
            <Button children={link?.children} loading={false} type="primary" />
          </Link>
        </div>
        {showBanner && (
          <div className="mt-[48px] flex w-full justify-center items-center">
            <Image
              width={400}
              height={310}
              alt={image?.alt || "About Banner"}
              src={image?.src || "/favicon.ico"}
              className="max-w-[400px] max-h-[310px] w-full h-full object-contain object-center"
            />
          </div>
        )}
      </div>
    </section>
  );
};

export default AboutUsBanner;
