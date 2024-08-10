import React from "react";

import Image from "next/image";
import { IBlogHero } from "@/types";

const BlogHero: React.FC<IBlogHero> = ({
  heading,
  authorImage,
  authorName,
  image,
}) => {
  return (
    <section className="relative w-full bg-white hero-container">
      <div className="gap-[48px] overflow-hidden container mx-auto px-[30px] py-[60px] w-full flex justify-center flex-col min-h-[580px]">
        <h1 className="m-0 mt-[24px] text-h1 capitalize font-light leading-small text-brand-purple">
          {heading || ""}
        </h1>
        <div className="">
          <Image
            className="w-full max-h-[340px] h-full object-contain object-center"
            width={490}
            height={340}
            src={image?.src || ""}
            alt={image?.alt || "Service Hero Image"}
          />
        </div>
        {authorImage && authorName && (
          <div className="flex flex-row items-center gap-[24px]">
            <Image
              className="max-w-[60px] max-h-[60px] w-full h-full object-cover object-center"
              width={60}
              height={60}
              src={authorImage?.src || ""}
              alt={authorImage?.alt || "Author"}
            />
            <span className="m-0 text-brand-black text-h6 leading-small font-light">
              {authorName || ""}
            </span>
          </div>
        )}
      </div>
    </section>
  );
};

export default BlogHero;
