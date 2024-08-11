"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import Button from "../elements/button";
import { IBlog, IBlogCarousel } from "@/types";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import CustomLink from "../elements/CustomLink";

const OurBlogCard: React.FC<IBlog> = ({
  name,
  blogImage,
  blogUrl,
  shortDescription,
}) => (
  <Link href={blogUrl || "#"}>
    <div className="group relative flex flex-col p-[24px] border-b border-transparent">
      <div className="absolute right-0 w-0 group-hover:w-full duration-500 ease-in-out bottom-0 h-[2px] bg-gradient-to-l from-brand-blue to-white"></div>
      <div>
        <Image
          loading="lazy"
          src={blogImage?.src || ""}
          alt={blogImage?.alt || "Blog Image"}
          width={385}
          height={220}
          className="w-full h-full max-w-full max-h-[220px] object-cover object-center"
        />
      </div>
      <span className="m-0 mt-[24px] text-lB text-brand-purple leading-medium w-full max-w-full">
        {name || ""}
      </span>
      <p className="m-0 mt-[12px] text-b16 text-brand-gray leading-large text-ellipsis line-clamp-3 w-full max-w-full">
        {shortDescription || ""}
      </p>
      <span className="group-hover:text-brand-blue text-b18 ease-in-out duration-500 text-brand-black leading-small mt-[24px] m-0 font-normal">
        Learn More
      </span>
    </div>
  </Link>
);

const LoadingPlaceholder: React.FC = () => (
  <div className="ease-in-out transition-all duration-500 grid grid-cols-1 lg:grid-cols-3 gap-[24px] justify-center items-center h-[350px] w-full bg-white">
    <div className="h-full bg-gray-200 animate-pulse"></div>
    <div className="h-full bg-gray-200 animate-pulse hidden lg:flex"></div>
    <div className="h-full bg-gray-200 animate-pulse hidden lg:flex"></div>
  </div>
);

const OurBlogsCarousel: React.FC<IBlogCarousel> = ({
  description,
  heading,
  link,
  blogs,
}) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (blogs && blogs.length > 0) {
      setLoading(false);
    }
  }, [blogs]);

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

  return (
    <section className="flex flex-col w-full bg-white">
      <div className="flex flex-col px-[30px] py-[60px] w-full container mx-auto">
        <div className="flex flex-col max-w-[725px] w-full items-center lg:items-start lg:justify-start justify-center lg:text-start text-center">
          <h3 className="mt-4 text-h3 leading-small text-center lg:text-start text-brand-purple">
            {heading || ""}
          </h3>
          <p className="text-b18 text-brand-gray leading-medium mt-[24px]">
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
        <div className="mt-[48px] w-full">
          {loading ? (
            <LoadingPlaceholder />
          ) : (
            <Carousel
              responsive={responsive}
              infinite
              autoPlay
              autoPlaySpeed={3000}
              transitionDuration={500}
            >
              {blogs.map((blog, index) => (
                <OurBlogCard key={index} {...blog} />
              ))}
            </Carousel>
          )}
        </div>
      </div>
    </section>
  );
};

export default OurBlogsCarousel;
