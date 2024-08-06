import React from "react";
import ServicesContent from "@/components/sections/services-content";
import ServicesHero from "@/components/sections/services-hero";
import ServicesConstContent from "../ServicesConstContent";
import OurClients from "@/components/sections/our-clients";
import ServicesPricing from "@/components/sections/services-pricing";

type PricingDetailsProps = {
  title: string;
  price?: string;
  description: string;
  details: { text: string }[];
  buttonText: string;
  featured: Boolean;
  priceText?: string;
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
  } = ServicesConstContent["payroll"];

  const pricingItems: PricingDetailsProps[] = [
    {
      title: "AZ Basic",
      price: "$450",
      description: "Just starting out? Let us keep your business compliant.",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Financial Statements",
        },
        {
          text: "Income Tax Return and Lodgements",
        },
        {
          text: "Activity Statements",
        },
        {
          text: "Annual Payroll & PAYG Payment Summaries",
        },
        {
          text: "Annual ASIC Company Statement (including payment of fee)",
        },
        {
          text: "Support Queries",
        },
      ],
      featured: false,
    },
    {
      title: "AZ Standard",
      price: "$550",
      description:
        "Need a little more from us? Get expert advice every quarter.",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Financial Statements",
        },
        {
          text: "Income Tax Return Preparation and Lodgements",
        },
        {
          text: "Activity Statements",
        },
        {
          text: "Annual Payroll & PAYG Payment Summaries",
        },
        {
          text: "Annual ASIC Company Statement (including payment of fee)",
        },
        {
          text: "Support Queries",
        },
        {
          text: "Quarterly Review Reports",
        },
        {
          text: "Director's Individual Tax Return",
        },
      ],
      featured: true,
    },
    {
      title: "Add-ons",
      description:
        "Anything missing in the packages? We offer additional services as add-ons",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Payroll Tax",
        },
        {
          text: "ACIRT Compliance",
        },
        {
          text: "Taxable Payment Report",
        },
        {
          text: "IAS",
        },
        {
          text: "Company Secretarial Documents",
        },
        {
          text: "ATO Correspondence",
        },
        {
          text: "Tax Compliance Handling",
        },
        {
          text: "Fringe Benefit Tax Returns",
        },
        {
          text: "CFO Advisory",
        },
        {
          text: "Using Our Business Address for Correspondence",
        },
        {
          text: "Business Registration Services",
        },
      ],
      featured: false,
      priceText: "Custom Quote",
    },
  ];

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
      <ServicesPricing
        heading="Pricing"
        cardButtonLink="/contact-us"
        items={pricingItems}
        description="We have developed tailor-made packages for our broad clients. We can customise each package to suit your business needs."
        numberOfCols={3}
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
