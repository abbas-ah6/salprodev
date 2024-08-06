import React from "react";
import ServicesContent from "@/components/sections/services-content";
import ServicesHero from "@/components/sections/services-hero";
import ServicesConstContent from "../ServicesConstContent";

const BookkeepingPage: React.FC = () => {
  const { serviceHeroProps,
    mainHeading,
    mainContent,
    faqData,
    mainImageSrc,
    technologyHeading,
    technologyContent } =  ServicesConstContent['tax-compliance'];





  return (
    <div>
      <ServicesHero service={serviceHeroProps} />
      <ServicesContent
        mainHeading={mainHeading}
        mainContent={mainContent}
        faqData={faqData}
        mainImageSrc={mainImageSrc}
        technologyHeading={technologyHeading}
        technologyContent={technologyContent}
      />
    </div>
  );
};

export default BookkeepingPage;
