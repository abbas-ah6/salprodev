import React from "react";
import ServicesContent from "@/components/sections/services-content";
import ServicesHero from "@/components/sections/services-hero";
import ServicesPricing from "@/components/sections/services-pricing";
import OurClients from "@/components/sections/our-clients";
import ServicesConstContent from "../ServicesConstContent";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Bookkeeping",
  description:
    "Managing bookkeeping tasks can be a significant time investment.",
};

const BookkeepingPage: React.FC = () => {
  const {
    serviceHeroProps,
    mainHeading,
    mainContent,
    faqData,
    mainImageSrc,
    technologyHeading,
    technologyContent,
  } = ServicesConstContent["bookkeeping"];

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
      <OurClients
        buttonLink="/contact-us"
        buttonText="Learn More"
        description="Book a free consultation and one of our team members will get in touch with you."
        heading="Get in touch with us!"
      />
    </div>
  );
};

export default BookkeepingPage;
