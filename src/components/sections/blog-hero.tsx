import React from "react";

import Image from "next/image";
import { IBlogHero } from "@/types";
import SocialShareButtons from "../elements/SocialShareButtons";

const BlogHero: React.FC<IBlogHero> = ({
  heading,
  authorImage,
  authorName,
  image,
}) => {
  return (
    <section className="relative w-full bg-white hero-container">
      <div className="gap-[48px] overflow-hidden container mx-auto lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full flex justify-center flex-col min-h-[580px]">
        <h1 className="m-0 mt-[24px] lg:text-h1 text-h1M capitalize font-light leading-small text-brand-purple">
          {heading || ""}
        </h1>
        <div className="w-full max-h-[]">
          <Image
            className="w-full max-h-[540px] h-full object-cover object-center"
            width={490}
            height={340}
            src={image?.src || ""}
            alt={image?.alt || "Service Hero Image"}
          />
        </div>
        <div className="w-full flex gap-[24px] items-center lg:justify-between flex-col lg:flex-row justify-center">
          {authorImage && authorName && (
            <div className="flex flex-col w-fit lg:flex-row items-center gap-[8px]">
              <Image
                className="max-w-[45px] max-h-[45px] w-full h-full object-cover object-center"
                width={45}
                height={45}
                src={authorImage?.src || ""}
                alt={authorImage?.alt || "Author"}
              />
              <span className="m-0 whitespace-nowrap text-brand-black text-b18 leading-small font-light">
                {authorName || ""}
              </span>
            </div>
          )}
          <div className="flex flex-row gap-[12px] items-center">
            <SocialShareButtons heading={heading || ""} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogHero;
