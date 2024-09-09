import React from "react";
import { Metadata } from "next";
import {
  IFaqs,
  IHubSpotForm,
  IOurProcess,
  IServiceHero,
  ITextWithImage,
  IWhyChooseUs,
} from "@/types";
import Faqs from "@/components/sections/faqs";
import CallToAction from "@/components/sections/call-to-action";
import HubSpotForm from "@/components/sections/hubspot-form";
import WhyChooseUs from "@/components/sections/why-choose-us";
import OurProcess from "@/components/sections/our-process";
import ServiceHero from "@/components/sections/service-hero";
import TextWithImage from "@/components/sections/text-with-image";
import TechnologyStack from "@/components/elements/TechnologyStack";

export const metadata: Metadata = {
  title: "Professional Branding Services | SalPro DEV",
  description:
    "Elevate your brand with SalPro DEV's expert branding services. From brand strategy to visual identity, we craft compelling brand experiences that resonate with your audience and drive business success.",
  metadataBase: new URL("https://salprodev.com"),
  keywords: [
    "Branding",
    "Brand Identity",
    "Logo Design",
    "Visual Identity",
    "Brand Strategy",
    "Corporate Branding",
    "SalPro DEV",
  ],
  openGraph: {
    title: "Professional Branding Services | SalPro DEV",
    description:
      "Elevate your brand with SalPro DEV's expert branding services. From brand strategy to visual identity, we craft compelling brand experiences that resonate with your audience and drive business success.",
    url: "https://salprodev.com/services/branding",
    siteName: "SalPro DEV",
    images: [
      {
        url: "https://salprodev.com/images/branding.png",
        width: 1200,
        height: 630,
        alt: "Professional Branding Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Professional Branding Services | SalPro DEV",
    description:
      "Elevate your brand with SalPro DEV's expert branding services. From brand strategy to visual identity, we craft compelling brand experiences that resonate with your audience and drive business success.",
    images: [
      {
        url: "https://salprodev.com/images/branding.png",
        width: 1200,
        height: 630,
        alt: "Professional Branding Services",
      },
    ],
  },
};

const heroData = {
  heading: "Transform Your Brand Identity",
  subHeading:
    "At SalPro DEV, we specialize in creating powerful brand identities that resonate with your audience. From strategic brand development to stunning visual design, our expert team is dedicated to helping your brand stand out and achieve lasting success.",
  links: [
    {
      type: "primary",
      children: "Get Started Today!",
      loading: false,
      url: "/contact-us",
    },
  ],
  image: {
    src: "/images/branding.png",
    alt: "Branding Image",
  },
} as IServiceHero;

const textWithImageData = {
  heading: "Why Invest in Professional Branding?",
  description:
    "In today's competitive market, a strong brand is more than just a logo—it's the cornerstone of your business identity. Professional branding services ensure your brand communicates your values, connects with your target audience, and stands out in a crowded marketplace.",
  image: {
    src: "/images/why-custom-software.png",
    alt: "Why Invest in Branding Image",
  },
  link: {
    children: "Learn More",
    loading: false,
    type: "primary",
    url: "/contact-us",
  },
  bulletPoints: [
    {
      text: "Strategic Brand Development: Align your brand with your business goals and audience expectations.",
    },
    {
      text: "Visual Identity Design: Create a cohesive and memorable visual presence.",
    },
    {
      text: "Brand Consistency: Ensure your brand message is clear and consistent across all platforms.",
    },
    {
      text: "Customer Loyalty: Build trust and loyalty with a brand that resonates with your audience.",
    },
    {
      text: "Competitive Edge: Stand out in the market with a unique and compelling brand identity.",
    },
  ],
} as ITextWithImage;

const brandingServicesData = {
  heading: "Our Comprehensive Branding Services",
  description:
    "Explore our range of branding services designed to elevate your business and connect with your audience on a deeper level.",
  link: {
    children: "About Us",
    loading: false,
    type: "primary",
    url: "/about-us",
  },
  image: {
    src: "/images/checklist-image.png",
    alt: "Our Branding Process Image",
  },
  cards: [
    {
      heading: "Brand Strategy",
      description:
        "Craft a strong brand strategy that aligns with your business goals and market position.",
      icon: {
        src: "/icons/strategy.svg",
        alt: "Brand Strategy",
      },
    },
    {
      heading: "Visual Identity Design",
      description:
        "Create a unique and cohesive visual identity that speaks to your audience.",
      icon: {
        src: "/icons/identity.svg",
        alt: "Visual Identity Design",
      },
    },
    {
      heading: "Brand Messaging",
      description:
        "Develop clear and consistent messaging that communicates your brand values.",
      icon: {
        src: "/icons/message.svg",
        alt: "Brand Messaging",
      },
    },
    {
      heading: "Logo Design",
      description:
        "Design a memorable logo that captures the essence of your brand.",
      icon: {
        src: "/icons/logo.svg",
        alt: "Logo Design",
      },
    },
    {
      heading: "Brand Guidelines",
      description:
        "Establish brand guidelines to maintain consistency across all platforms.",
      icon: {
        src: "/icons/guidelines.svg",
        alt: "Brand Guidelines",
      },
    },
    {
      heading: "Brand Audit and Refresh",
      description:
        "Evaluate and enhance your existing brand to ensure it remains relevant and effective.",
      icon: {
        src: "/icons/audit.svg",
        alt: "Brand Audit and Refresh",
      },
    },
  ],
  imageAlignment: "right",
} as IWhyChooseUs;

const faqsData = {
  heading: "Got Questions?",
  description:
    "Find Answers to Your Most Common Questions and Learn More About What We Do",
  image: {
    src: "/images/faqs-image.png",
    alt: "Frequently Asked Questions?",
  },
  faqs: [
    {
      question: "What services do you offer?",
      answer:
        "We offer a wide range of services including web development, mobile app development, digital marketing, UI/UX design, and software consulting. Our team is equipped to handle projects of any size and complexity.",
    },
    {
      question: "What is your project delivery timeline?",
      answer:
        "Our project delivery timeline varies based on the scope and complexity of the project. Typically, we provide a detailed timeline during the initial consultation.",
    },
    {
      question: "How do I start a project with your team?",
      answer:
        "To start a project, simply reach out to us via our contact form or email. We'll schedule a consultation to discuss your needs and create a plan.",
    },
    {
      question: "How do you ensure the quality of your work?",
      answer:
        "We ensure quality through rigorous testing, regular reviews, and adherence to best practices. Our team follows a structured quality assurance process for every project.",
    },
    {
      question: "Can you provide case studies or examples of your work?",
      answer:
        "Yes, we can provide case studies and examples of our previous work. Please contact us to request specific case studies relevant to your needs.",
    },
    {
      question: "What are your pricing and payment terms?",
      answer:
        "Our pricing depends on the project’s requirements. We offer various payment terms and will provide a detailed quote and payment schedule after discussing your project.",
    },
  ],
} as IFaqs;

const hubSpotFormData = {
  heading: "Ready to get in touch with us?",
  subHeading:
    "Get in touch with our team and get professional services from our experts.",
} as IHubSpotForm;

const whyChooseUsData = {
  heading: "Why Choose Us",
  description:
    "Our team comprises seasoned professionals with deep expertise in branding, web development, app development, and digital marketing, ensuring top-notch results every time.",
  link: {
    children: "About Us",
    loading: false,
    type: "primary",
    url: "about-us",
  },
  image: {
    src: "/images/why-choose-us-image.png",
    alt: "Whu Choose Us Image",
  },
  cards: [
    {
      heading: "Tailored Solutions for Your Business",
      description:
        "We don’t believe in one-size-fits-all. We provide customized solutions that align with your unique business goals and industry needs.",
      icon: {
        src: "/icons/bulb.svg",
        alt: "Innovative Solutions",
      },
    },
    {
      heading: "Proven Track Record of Success",
      description:
        "With a portfolio of successful projects and satisfied clients, we have a proven track record of delivering digital solutions that drive growth.",
      icon: {
        src: "/icons/trophy.svg",
        alt: "Proven Track Record",
      },
    },
    {
      heading: "End-to-End Project Management",
      description:
        "From initial concept to final deployment, we manage every aspect of your project, ensuring a seamless and stress-free experience.",
      icon: {
        src: "/icons/handshake.svg",
        alt: "Client-Centric Approach",
      },
    },
    {
      heading: "Agile and Adaptable",
      description:
        "Our flexible and agile methodologies ensure that we can quickly adapt to changes and deliver timely solutions.",
      icon: {
        src: "/icons/rocket.svg",
        alt: "Innovative Solutions",
      },
    },
  ],
  imageAlignment: "left",
} as IWhyChooseUs;

const ourProcessData = {
  heading: "Our Process",
  description:
    "Explore our comprehensive, step-by-step approach to transforming your ideas into reality. Our process is designed to ensure precision, creativity, and continuous support throughout the project lifecycle.",
  cards: [
    {
      heading: "Research",
      description:
        "We dive deep into understanding your business, market, and customers to develop a strategy that sets you apart.",
      icon: {
        src: "/icons/magnifying-glass.svg",
        alt: "Discovery & Planning",
      },
    },
    {
      heading: "Design & Prototype",
      description:
        "Our creative team crafts innovative designs and interactive prototypes that align with your brand and user needs.",
      icon: {
        src: "/icons/pencil.svg",
        alt: "Design & Planning",
      },
    },
    {
      heading: "Development",
      description:
        "We turn your vision into reality with clean, efficient code, ensuring your website or app performs flawlessly.",
      icon: {
        src: "/icons/code-brackets.svg",
        alt: "Development",
      },
    },
    {
      heading: "Testing",
      description:
        "Rigorous testing guarantees a bug-free, user-friendly experience, ensuring everything works as intended before launch.",
      icon: {
        src: "/icons/feedback-form.svg",
        alt: "Testing",
      },
    },
    {
      heading: "Deployment",
      description:
        "We launch your project with precision, ensuring a smooth go-live process and providing ongoing support as needed.",
      icon: {
        src: "/icons/rocket-md.svg",
        alt: "Deployment",
      },
    },
  ],
} as IOurProcess;

const Page: React.FC = () => {
  return (
    <div>
      <ServiceHero {...heroData} />
      <TechnologyStack/>
      <TextWithImage {...textWithImageData} />
      <WhyChooseUs {...brandingServicesData} />
      <OurProcess {...ourProcessData} />
      <WhyChooseUs {...whyChooseUsData} />
      <Faqs {...faqsData} />
      <HubSpotForm {...hubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default Page;
