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
  title: "Expert Web Development Services | SalPro DEV",
  description:
    "Unlock the potential of your online presence with SalPro DEV's professional web development services. From responsive websites to complex web applications, we deliver tailored solutions that drive business growth.",
  metadataBase: new URL("https://salprodev.com"),
  keywords: [
    "Web Development",
    "Website Design",
    "Responsive Web Design",
    "Front-End Development",
    "Back-End Development",
    "Full-Stack Development",
    "Custom Websites",
    "SalPro DEV",
  ],
  openGraph: {
    title: "Expert Web Development Services | SalPro DEV",
    description:
      "Unlock the potential of your online presence with SalPro DEV's professional web development services. From responsive websites to complex web applications, we deliver tailored solutions that drive business growth.",
    url: "https://salprodev.com/services/web-development",
    siteName: "SalPro DEV",
    images: [
      {
        url: "https://salprodev.com/images/custom-software-development.png",
        width: 1200,
        height: 630,
        alt: "Professional Web Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Expert Web Development Services | SalPro DEV",
    description:
      "Unlock the potential of your online presence with SalPro DEV's professional web development services. From responsive websites to complex web applications, we deliver tailored solutions that drive business growth.",
    images: [
      {
        url: "https://salprodev.com/images/custom-software-development.png",
        width: 1200,
        height: 630,
        alt: "Professional Web Development Services",
      },
    ],
  },
};

const heroData = {
  heading: "Your Vision, Our Expertise",
  subHeading:
    "At SalPro DEV, we bring your ideas to life with cutting-edge web development services. Whether you need a responsive website, a robust e-commerce platform, or a custom web application, our skilled developers create tailored solutions that align with your business goals.",
  links: [
    {
      type: "primary",
      children: "Start Your Project",
      loading: false,
      url: "/contact-us",
    },
  ],
  image: {
    src: "/images/custom-software-development.png",
    alt: "Web Development Services Image",
  },
} as IServiceHero;

const textWithImageData = {
  heading: "Why Choose Our Web Development Services?",
  description:
    "In today's digital-first world, your website is often the first point of contact with your customers. Our web development services ensure your site is not only visually stunning but also optimized for performance, user experience, and search engines. We focus on creating websites that drive conversions and provide a seamless experience across all devices.",
  image: {
    src: "/images/why-custom-software.png",
    alt: "Why Choose Our Web Development Services Image",
  },
  link: {
    children: "Contact Us",
    loading: false,
    type: "primary",
    url: "/contact-us",
  },
  bulletPoints: [
    {
      text: "Responsive Design: Websites that look great on all devices, from desktops to smartphones.",
    },
    {
      text: "SEO Optimization: Built-in SEO best practices to improve your site's visibility and ranking.",
    },
    {
      text: "Custom Solutions: Tailored web applications that meet your specific business needs.",
    },
    {
      text: "User-Centric Design: Focus on creating intuitive, engaging user experiences.",
    },
    {
      text: "Performance & Security: Fast, secure websites that provide a reliable experience for your users.",
    },
  ],
} as ITextWithImage;

const webDevelopmentServicesData = {
  heading: "Our Comprehensive Web Development Services",
  description:
    "Explore our range of web development services designed to help your business thrive online. From design to deployment, we ensure every aspect of your website is crafted with excellence.",
  link: {
    children: "Contact Us",
    loading: false,
    type: "primary",
    url: "/contact-us",
  },
  image: {
    src: "/images/checklist-image.png",
    alt: "Web Development Process Image",
  },
  cards: [
    {
      heading: "Custom Website Development",
      description:
        "Bespoke websites that reflect your brand's unique identity and cater to your specific audience.",
      icon: {
        src: "/icons/website.svg",
        alt: "Custom Website Development",
      },
    },
    {
      heading: "E-Commerce Solutions",
      description:
        "Scalable e-commerce platforms that provide a seamless shopping experience and drive sales.",
      icon: {
        src: "/icons/ecommerce.svg",
        alt: "E-Commerce Solutions",
      },
    },
    {
      heading: "Web Application Development",
      description:
        "Robust, interactive web applications that solve complex business challenges and enhance productivity.",
      icon: {
        src: "/icons/web-app.svg",
        alt: "Web Application Development",
      },
    },
    {
      heading: "Content Management Systems",
      description:
        "User-friendly CMS solutions that allow you to easily manage and update your website content.",
      icon: {
        src: "/icons/cms.svg",
        alt: "Content Management Systems",
      },
    },
    {
      heading: "Website Maintenance & Support",
      description:
        "Ongoing maintenance and support services to keep your website running smoothly and securely.",
      icon: {
        src: "/icons/maintenance.svg",
        alt: "Website Maintenance & Support",
      },
    },
    {
      heading: "API Integration Services",
      description:
        "Integrate third-party services and APIs to enhance your website's functionality and performance.",
      icon: {
        src: "/icons/api.svg",
        alt: "API Integration Services",
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
      <TechnologyStack />
      <TextWithImage {...textWithImageData} />
      <WhyChooseUs {...webDevelopmentServicesData} />
      <OurProcess {...ourProcessData} />
      <WhyChooseUs {...whyChooseUsData} />
      <Faqs {...faqsData} />
      <HubSpotForm {...hubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default Page;
