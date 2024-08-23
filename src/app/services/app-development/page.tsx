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
  title: "Top-Tier App Development Services | SalPro DEV",
  description:
    "Transform your ideas into powerful mobile applications with SalPro DEV's expert app development services. We specialize in creating innovative, user-centric apps that drive business growth and enhance user engagement.",
  metadataBase: new URL("https://salprodev-2hoy.vercel.app"),
  keywords: [
    "App Development",
    "Mobile App Development",
    "iOS Development",
    "Android Development",
    "Custom App Development",
    "SalPro DEV",
  ],
  openGraph: {
    title: "Top-Tier App Development Services | SalPro DEV",
    description:
      "Transform your ideas into powerful mobile applications with SalPro DEV's expert app development services. We specialize in creating innovative, user-centric apps that drive business growth and enhance user engagement.",
    url: "https://salprodev-2hoy.vercel.app/services/app-development",
    siteName: "SalPro DEV",
    images: [
      {
        url: "https://salprodev-2hoy.vercel.app/images/app-development.png",
        width: 1200,
        height: 630,
        alt: "App Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Top-Tier App Development Services | SalPro DEV",
    description:
      "Transform your ideas into powerful mobile applications with SalPro DEV's expert app development services. We specialize in creating innovative, user-centric apps that drive business growth and enhance user engagement.",
    images: [
      {
        url: "https://salprodev-2hoy.vercel.app/images/app-development.png",
        width: 1200,
        height: 630,
        alt: "App Development Services",
      },
    ],
  },
};

const heroData = {
  heading: "Innovative App Development",
  subHeading:
    "At SalPro DEV, we turn your ideas into powerful mobile applications. Whether you're looking to create a user-friendly mobile app or a robust enterprise-level solution, our team is here to deliver exceptional results that align with your business objectives.",
  links: [
    {
      type: "primary",
      children: "Get Started Today!",
      loading: false,
      url: "/contact-us",
    },
  ],
  image: {
    src: "/images/app-development.png",
    alt: "App Development Image",
  },
} as IServiceHero;

const textWithImageData = {
  heading: "Why Choose Our App Development Services?",
  description:
    "In today's mobile-first world, having a high-quality app is essential for engaging customers and staying competitive. Our app development services are tailored to create apps that are not only functional but also intuitive and visually appealing. We focus on delivering apps that provide value and enhance user engagement.",
  image: {
    src: "/images/why-custom-software.png",
    alt: "Why Choose Our App Development Services Image",
  },
  link: {
    children: "Contact Us",
    loading: false,
    type: "primary",
    url: "/contact-us",
  },
  bulletPoints: [
    {
      text: "Cross-Platform Development: Reach users across multiple platforms with a single codebase.",
    },
    {
      text: "User-Centric Design: Apps designed with the user experience in mind to maximize engagement.",
    },
    {
      text: "Performance Optimization: Fast, responsive apps that deliver a seamless experience.",
    },
    {
      text: "Custom Features: Tailored functionality to meet your specific business needs.",
    },
    {
      text: "Ongoing Support: Continuous maintenance and updates to keep your app running smoothly.",
    },
  ],
} as ITextWithImage;

const appDevelopmentServicesData = {
  heading: "Our App Development Services",
  description:
    "Explore our comprehensive range of app development services designed to bring your ideas to life and help your business thrive in the digital landscape.",
  link: {
    children: "Contact Us",
    loading: false,
    type: "primary",
    url: "/contact-us",
  },
  image: {
    src: "/images/checklist-image.png",
    alt: "App Development Services Image",
  },
  cards: [
    {
      heading: "iOS App Development",
      description:
        "Custom iOS apps designed to provide a superior experience for Apple users.",
      icon: {
        src: "/icons/ios-app.svg",
        alt: "iOS App Development",
      },
    },
    {
      heading: "Android App Development",
      description:
        "Innovative Android apps that reach a wide audience on the Google Play Store.",
      icon: {
        src: "/icons/android-app.svg",
        alt: "Android App Development",
      },
    },
    {
      heading: "Cross-Platform Development",
      description:
        "Apps that work seamlessly across iOS, Android, and web platforms.",
      icon: {
        src: "/icons/cross-platform.svg",
        alt: "Cross-Platform Development",
      },
    },
    {
      heading: "Progressive Web Apps (PWA)",
      description:
        "Web applications that offer a native app-like experience on any device.",
      icon: {
        src: "/icons/pwa.svg",
        alt: "Progressive Web Apps (PWA)",
      },
    },
    {
      heading: "App UI/UX Design",
      description:
        "User-friendly interfaces designed to engage and retain users.",
      icon: {
        src: "/icons/ui-ux.svg",
        alt: "App UI/UX Design",
      },
    },
    {
      heading: "App Maintenance & Support",
      description:
        "Continuous support and maintenance to ensure your app remains up-to-date and functional.",
      icon: {
        src: "/icons/support.svg",
        alt: "App Maintenance & Support",
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
      <OurProcess {...ourProcessData} />
      <WhyChooseUs {...appDevelopmentServicesData} />
      <WhyChooseUs {...whyChooseUsData} />
      <Faqs {...faqsData} />
      <HubSpotForm {...hubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default Page;
