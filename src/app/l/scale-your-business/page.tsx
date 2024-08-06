import AwardsSection from "@/components/sections/award-section";
import CardsContent from "@/components/sections/cards-content";
import SecondaryFooter from "@/components/sections/footer-secondary";
import GoogleReviews from "@/components/sections/google-reviews";
import OurClients from "@/components/sections/our-clients";
import OurServices from "@/components/sections/our-services";
import OurServicesGrid from "@/components/sections/our-services-grid";
import SecondaryHero from "@/components/sections/secondary-hero";
import ServicesPricing from "@/components/sections/services-pricing";
import TextWithCards from "@/components/sections/text-with-cards";
import { Metadata } from "next";
import React from "react";

type PricingDetailsProps = {
  title: string;
  price?: string;
  description: string;
  longDescription?: string;
  details: { text: string }[];
  buttonText: string;
  featured: Boolean;
  priceText?: string;
};

export const metadata: Metadata = {
  title: "Scale Your Business with Accountants That Care",
  description:
    "We can help you save up to $4,500 AUD on accounting fees plus hours of admin each week with our unique Accounting approach.",
  openGraph: {
    type: "website",
    url: "https://azaccountingservices.com.au/l/scale-your-business",
    title: "Scale Your Business with Accountants That Care",
    description:
      "We can help you save up to $4,500 AUD on accounting fees plus hours of admin each week with our unique Accounting approach.",
    images: ["/images/scale-your-business.png"],
  },
};

const ScaleYourBusiness: React.FC = () => {
  const data = {
    title: "Scale your business with Accountants that care",
    description:
      "Watch the video below to see how our unique Accounting approach is helping small businesses save up to $4,500AUD on accounting fees plus hours of admin each week.",
    mainImage: {
      src: "https://drive.google.com/file/d/1QsawIkq1pacIHiv2iUZt76tytrvU-pKW/preview",
      alt: "Scale you business!",
    },
    isImage: false,
    buttonText: "Book Your Free 30-Min Consultation",
    trustedByText: "Trusted by our fastest growing clients",
    logos: [
      {
        src: "/images/certificate-1.png",
        alt: "Logo 1",
      },
      {
        src: "/images/certificate-2.png",
        alt: "Logo 2",
      },
      {
        src: "/images/certificate-3.png",
        alt: "Logo 3",
      },
      {
        src: "/images/certificate-4.png",
        alt: "Logo 4",
      },
    ],
    highlights: [
      {
        text: "No obligation",
      },
      {
        text: "No hard-sell",
      },
      {
        text: "Expert advice",
      },
    ],
  };

  const cardData = {
    heading: "The Finer Details",
    describe:
      "AZ & Partners is a one-stop-shop for all your Business & Accounting needs.",
    cards: [
      {
        title: "Setup of bank accounts + feeds",
        description:
          "Bank feeds are connections that automatically download transactions from your bank account to accounting. You can then work with the data by creating new transactions as needed or match bank transactions to your accounting transactions.",
      },
      {
        title: "Custom Chart of Accounts",
        description:
          "It allows you to break down all the transactions that your business made during a specific period into different subcategories. By separating out your revenue, liabilities, assets, and business expenditures, a chart of accounts enables you to gain insight into the effectiveness of different areas of your business.",
      },
      {
        title: "Company Tax Return",
        description:
          "If your company is trading, you must register for Corporation Tax and file a Company Tax Return every year, even if you make a loss or don't have any tax to pay. The financial year finishes on 30 June every year and you must lodge your Company Annual Tax Return after 30 June. The due date depends on either you are lodging through a Tax Agent or by yourself.",
      },
      {
        title: "Business Activity Statements",
        description:
          "Business Activity Statement (BAS) is a government form that all businesses must lodge to the Australian Tax Office (ATO) if your business is registered for GST. It's a summary of all the business taxes you have paid or will pay to the government during a specific period. Most Australian businesses will lodge their BAS monthly, quarterly, or annually.",
      },
      {
        title: "Payroll & STP",
        description:
          "(Single Touch Payroll (STP), is an Australian Government initiative to reduce employers' reporting burdens to government agencies. With STP, you report employees' payroll information to ATO each time you pay them through STP-enabled software. Payroll information includes salaries and wages.",
      },
    ],
  };

  const textWithCardsData = [
    {
      icon: "/icons/marketing-icon.svg",
      title: "Marketing Assistance",
      description:
        "When it comes to marketing, being able to have a pulse on new trends is of utmost importance. Our skilled partners at Burd Marketing & Design not only take that burden off your shoulder but also ensure the job done is of extreme high quality. Whether you need graphics/ web design and development, SEO/SEM, branding or a social media manager; we can accomplish that and more.",
    },
    {
      icon: "/icons/development-icon.svg",
      title: "Website Development",
      description:
        "Our partners offer a complete new website development service. Our partnered team of web developers, web designers and digital marketing experts are ready to take on your business goals and bring them to the next level.",
    },
    {
      icon: "/icons/branding-icon.svg",
      title: "Logo/Branding",
      description:
        "As a business owner, you know that branding is important. But what exactly is branding, and why is it so important? Branding is the process of creating a name, logo, and identity for your company. It's how you communicate who you are and what you do to your customers. And it's one of the most important aspects of any business.",
    },
    {
      icon: "/icons/seo-icon.svg",
      title: "SEO",
      description:
        "Everyone wants their businesses phone line ringing and their websites Contact Form completed by REAL POTENTIAL CUSTOMERS. In SEO we call these potential customers 'Warm/Hot' leads. They're what you're really looking for. These type of customers are searching for your services with the exact keywords you imagine people will find you with.",
    },
    {
      icon: "/icons/ads-icon.svg",
      title: "Google Ads",
      description:
        "Our knowledgeable partners stay up to date with Google AdWords campaigns and online marketing tools to deliver you to perfect service. We understand that your company strives to achieve business goals but may feel lost amongst paid ads, keyword research, search engine results pages, and Adwards management. As a niche agency Melbourne we provide outstanding customer service for all our clients.",
    },
    {
      icon: "/icons/social-icon.svg",
      title: "Social Media Managing",
      description:
        "Whether you’re after more followers and likes or shareable content that people are engaging with, we can help you reach a larger audience. Garner attention from potential customers Take your business to the next level with viral marketing Increase brand awareness Gain an unfair advantage over your competitors",
    },
  ];

  const pricingItems: PricingDetailsProps[] = [
    {
      title: "AZ Bronze",
      price: "$550",
      description: "Incl + GST",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Bookkeeping – (0 – 75 Transactions per month)",
        },
        {
          text: "Setup of bank accounts + feeds",
        },
        {
          text: "Custom chart of accounts",
        },
        {
          text: "Company tax return",
        },
        {
          text: "Business activity statements (per quarter)",
        },
        {
          text: "Payroll & STP up to 10 Employees",
        },
        {
          text: "Director Individual Income Tax Return",
        },
        {
          text: "Yearly Financial Statements",
        },
        {
          text: "Compliance Handling",
        },
        {
          text: "ATO Correspondence",
        },
      ],
      featured: false,
    },
    {
      title: "AZ Silver",
      price: "$660",
      description: "Incl + GST",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Bookkeeping – (76 – 150 Transactions per month)",
        },
        {
          text: "Setup of bank accounts + feeds",
        },
        {
          text: "Custom chart of accounts",
        },
        {
          text: "Company tax return",
        },
        {
          text: "Business activity statements (per quarter)",
        },
        {
          text: "Payroll & STP up to 10 Employees",
        },
        {
          text: "Director Individual Income Tax Return",
        },
        {
          text: "Yearly Financial Statements",
        },
        {
          text: "Compliance Handling",
        },
        {
          text: "ATO Correspondence",
        },
      ],
      featured: false,
    },
    {
      title: "AZ Gold",
      price: "$770",
      description: "Incl + GST",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Bookkeeping – (151 – 250 Transactions per month)",
        },
        {
          text: "Setup of bank accounts + feeds",
        },
        {
          text: "Custom chart of accounts",
        },
        {
          text: "Company tax return",
        },
        {
          text: "Business activity statements (per quarter)",
        },
        {
          text: "Payroll & STP up to 20 Employees",
        },
        {
          text: "Director Individual Income Tax Return",
        },
        {
          text: "Yearly Financial Statements",
        },
        {
          text: "Compliance Handling",
        },
        {
          text: "ATO Correspondence",
        },
      ],
      featured: true,
    },
    {
      title: "AZ Platinum",
      price: "$1,100",
      description: "Incl + GST",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Bookkeeping – (252 – plus Transactions per month)",
        },
        {
          text: "Setup of bank accounts + feeds",
        },
        {
          text: "Custom chart of accounts",
        },
        {
          text: "Company tax return",
        },
        {
          text: "Business activity statements (per quarter)",
        },
        {
          text: "Payroll & STP more than 20 Employees",
        },
        {
          text: "Director Individual Income Tax Return",
        },
        {
          text: "Yearly Financial Statements",
        },
        {
          text: "Compliance Handling",
        },
        {
          text: "ATO Correspondence",
        },
      ],
      featured: false,
    },
  ];

  const pricingItemsAlt: PricingDetailsProps[] = [
    {
      title: "New Business Set Up",
      priceText: "$1,100",
      description: "Incl + GST | one-off payment",
      longDescription:
        "New Company Registration with ASIC and Set-up for Accounting Systems for new business. Complete set-up for a new business including banks feeds, account names, customised invoices and more.",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Custom Chart of Accounts",
        },
        {
          text: "Setup tracking categories",
        },
        {
          text: "Setup bank accounts + feeds",
        },
        {
          text: "Customised dashboard",
        },
        {
          text: "Branded invoice template",
        },
        {
          text: "Setup payroll",
        },
        {
          text: "Issue logins for your team",
        },
      ],
      featured: false,
    },
    {
      title: "Desktop to Cloud Accounting",
      priceText: "$1,650",
      description: "Incl + GST | one-off payment",
      longDescription:
        "Make the switch from your desktop software to Cloud Accounting. Complete set-up, full payroll, opening balances, receivables/payables, bank feeds, user access and more!",
      buttonText: "Request Consultation",
      details: [
        {
          text: "Opening/Closing balances",
        },
        {
          text: "Import contacts",
        },
        {
          text: "Custom Chart of Accounts",
        },
        {
          text: "Setup fixed asset register",
        },
        {
          text: "Setup tracking categories",
        },
        {
          text: "Setup bank accounts + feeds",
        },
        {
          text: "Customised dashboard",
        },
        {
          text: "Branded invoice template",
        },
        {
          text: "Setup payroll",
        },
        {
          text: "Issue logins for your team",
        },
        {
          text: "Conversion of current data from your current accounting system",
        },
      ],
      featured: false,
    },
  ];

  return (
    <div>
      <SecondaryHero buttonLink="/book-consultation" {...data} />
      <GoogleReviews />
      <AwardsSection />
      <OurServicesGrid />
      <ServicesPricing
        heading="Our Packages"
        items={pricingItems}
        numberOfCols={4}
        cardButtonLink="/book-consultation"
        description="We have developed tailor-made packages for our broad clients. We can customise each package to suit your business needs."
      />
      <CardsContent
        heading={cardData.heading}
        description={cardData.describe}
        cards={cardData.cards}
        buttonLink="/book-consultation"
      />
      <ServicesPricing
        heading="Business Set Up – Accounting Systems"
        items={pricingItemsAlt}
        numberOfCols={2}
        cardButtonLink="/book-consultation"
        description="We have developed tailor-made packages for our broad clients. We can customise each package to suit your business needs."
      />
      <OurClients
        buttonLink="/book-consultation"
        buttonText="Book Consultation"
        description="Book a free consultation and one of our team members will get in touch with you."
        heading="Get in touch with us!"
      />
      <SecondaryFooter />
    </div>
  );
};

export default ScaleYourBusiness;
