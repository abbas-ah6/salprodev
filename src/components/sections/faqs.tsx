"use client";

import React, { useState } from "react";
import Image from "next/image";
import { IFaqItem, IFaqs } from "@/types";
import { FAQPage } from "schema-dts";

const FaqCard: React.FC<{
  faq: IFaqItem;
  isActive: boolean;
  onClick: () => void;
}> = ({ faq, isActive, onClick }) => (
  <div
    onClick={onClick}
    className={`px-[24px] py-[2px] border border-solid cursor-pointer transition-all duration-300 ease-in-out ${
      isActive ? "border-brand-purple" : "border-transparent"
    }`}
  >
    <div className="flex w-full justify-between items-center pb-[12px]">
      <span
        className={`m-0 lg:text-lB text-b16 text-brand-black font-normal w-full max-w-full`}
      >
        {faq?.question || ""}
      </span>
      <Image
        width={24}
        height={24}
        alt="FAQs Arrow"
        src={"/icons/faq-icon.svg"}
        className={`transition-transform duration-300 ease-in-out ${
          isActive ? "rotate-180" : "rotate-0"
        }`}
      />
    </div>
    <p
      className={`m-0 text-b14 leading-medium font-normal w-full max-w-full pt-[12px] transition-all duration-300 ease-in-out ${
        isActive
          ? "max-h-[200px] opacity-100"
          : "max-h-0 opacity-0 overflow-hidden"
      }`}
    >
      {faq?.answer || ""}
    </p>
  </div>
);

const Faqs: React.FC<IFaqs> = ({ description, heading, image, faqs }) => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const handleFaqClick = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  const faqsStructuredData: FAQPage = {
    "@type": "FAQPage",
    mainEntity: faqs?.map((faq) => ({
      "@type": "Question",
      name: faq?.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq?.answer,
      },
    })),
  };

  return (
    <section className="flex flex-col w-full bg-white">
      <div className="flex flex-col lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full container mx-auto">
        <div className="flex flex-col max-w-[725px] w-full justify-start lg:text-start text-center">
          <h3 className="mt-4 lg:text-h3 text-h3M leading-small text-center lg:text-start text-brand-purple">
            {heading || ""}
          </h3>
          <p className="text-b18 text-brand-gray leading-medium mt-[24px]">
            {description || ""}
          </p>
        </div>
        <div className="relative mt-[48px] flex lg:flex-row flex-col lg:justify-between justify-center items-center w-full gap-[42px]">
          <div className="flex-1 flex flex-col relative">
            <Image
              loading="lazy"
              src={image?.src || ""}
              alt={image?.alt || "Project Image"}
              width={520}
              height={470}
              className="w-full max-w-full max-h-[470px] object-contain object-center transition-all duration-300 ease-in-out"
            />
          </div>
          <div className="flex-1 grid lg:grid-cols-1 grid-cols-1 gap-[12px]">
            {faqs &&
              faqs.length > 0 &&
              faqs.map((faq, index) => (
                <FaqCard
                  key={index}
                  faq={faq}
                  isActive={activeIndex === index}
                  onClick={() => handleFaqClick(index)}
                />
              ))}
          </div>
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: faqsStructuredData }}
      />
    </section>
  );
};

export default Faqs;
