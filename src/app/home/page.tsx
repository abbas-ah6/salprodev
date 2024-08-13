import React, { Children } from "react";
import { Metadata } from "next";
import "../globals.css";
import Hero from "@/components/sections/hero";
import {
  IAboutUs,
  IBlogCarousel,
  IFaqs,
  IHero,
  IHubSpotForm,
  IOurProjects,
  IServicesGrid,
} from "@/types";
import AboutUsBanner from "@/components/sections/about-us";
import OurServicesGrid from "@/components/sections/our-services-grid";
import OurProjects from "@/components/sections/our-projects";
import OurBlogsCarousel from "@/components/sections/our-blogs-carousel";
import Faqs from "@/components/sections/faqs";
import CallToAction from "@/components/sections/call-to-action";
import HubSpotForm from "@/components/sections/hubspot-form";

export const metadata: Metadata = {
  title: "Building High-Quality Tech Solutions for Community Growth",
  description:
    "Delivering exceptional tech solutions tailored to drive community growth and engagement with a focus on innovation and excellence.",
  metadataBase: new URL("https://salprodev-2hoy.vercel.app"),
  openGraph: {
    title: "Building High-Quality Tech Solutions for Community Growth",
    description:
      "Delivering exceptional tech solutions tailored to drive community growth and engagement with a focus on innovation and excellence.",
    url: "https://salprodev-2hoy.vercel.app",
    siteName: "Salpro DEV",
    images: [
      {
        url: "https://salprodev-2hoy.vercel.app/images/salprodev-home.png",
        width: 1200,
        height: 630,
        alt: "Building High-Quality Tech Solutions for Community Growth",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Building High-Quality Tech Solutions for Community Growth",
    description:
      "Delivering exceptional tech solutions tailored to drive community growth and engagement with a focus on innovation and excellence.",
    images: [
      {
        url: "https://salprodev-2hoy.vercel.app/images/salprodev-home.png",
        width: 1200,
        height: 630,
        alt: "Building High-Quality Tech Solutions for Community Growth",
      },
    ],
  },
};

const heroData = {
  tag: "POWERED BY AI",
  heading: "Building community standard projects and solutions!",
  subHeading:
    "Delivering High-Quality Tech Solutions That Drive Community Growth and Engagement",
  links: [
    {
      type: "primary",
      children: "Book Consultation",
      loading: false,
      newTab: false,
      url: "contact-us",
    },
    {
      type: "secondary",
      children: "About Us",
      loading: false,
      newTab: false,
      url: "about-us",
    },
  ],
} as IHero;

const AboutBannerData = {
  heading: "Your Partner in Digital Excellence",
  description:
    "At Salpro DEV, we deliver top-notch software development, creative marketing solutions, and cutting-edge design. Our comprehensive tech services are tailored to meet your unique business needs.",
  link: {
    type: "primary",
    children: "About Us",
    url: "about-us",
  },
  showBanner: false,
} as IAboutUs;

const OurServiceData = {
  heading: "Our Services",
  description:
    "Check out our extensive list of services, each one designed to fulfill your particular company's requirements and promote your success.",
  link: {
    type: "primary",
    children: "See All Services",
    loading: false,
    url: "services",
  },
  services: [
    {
      name: "Custom Software Development",
      serviceImage: {
        src: "/images/custom-software-development.png",
        alt: "Custom Software Development",
      },
      serviceUrl: "services/custom-software-development",
      shortDescription:
        "Tailored software solutions to streamline your business processes and enhance efficiency. From web applications to enterprise systems, we build software that fits your needs.",
    },
    {
      name: "Digital Marketing",
      serviceImage: {
        src: "/images/digital-marketing.png",
        alt: "Digital Marketing",
      },
      serviceUrl: "#",
      shortDescription:
        "Innovative marketing strategies to boost your online presence. We offer SEO, social media marketing, and PPC campaigns to connect you with your target audience.",
    },
    {
      name: "UI/UX Designt",
      serviceImage: {
        src: "/images/ui-ux-design.png",
        alt: "UI/UX Design",
      },
      serviceUrl: "#",
      shortDescription:
        "Crafting user-friendly and visually appealing interfaces. Our design team ensures an intuitive user experience that enhances engagement and satisfaction.",
    },
    {
      name: "Mobile App Development",
      serviceImage: {
        src: "/images/mobile-app-development.png",
        alt: "Mobile App Development",
      },
      serviceUrl: "#",
      shortDescription:
        "Developing responsive and high-performance mobile applications for both Android and iOS platforms. We turn your ideas into accessible and engaging mobile experiences.",
    },
    {
      name: "E-commerce Solutions",
      serviceImage: {
        src: "/images/e-commerce-solutions.png",
        alt: "E-commerce Solutions",
      },
      serviceUrl: "#",
      shortDescription:
        "Comprehensive e-commerce solutions, including website development, payment gateway integration, and inventory management. We help you build a thriving online store.",
    },
    {
      name: "Deployment Services",
      serviceImage: {
        src: "/images/deployment-services.png",
        alt: "Deployment Services",
      },
      serviceUrl: "#",
      shortDescription:
        "Developing responsive and high-performance mobile applications for both Android and iOS platforms. We turn your ideas into accessible and engaging mobile experiences.",
    },
    {
      name: "CMS Development",
      serviceImage: {
        src: "/images/cms-development.png",
        alt: "CMS Development",
      },
      serviceUrl: "#",
      shortDescription:
        "Expert guidance on technology strategy and implementation. Our consulting services help you navigate the complexities of IT and leverage technology to achieve your business goals.",
    },
  ],
} as IServicesGrid;

const OurProjectsData = {
  heading: "Our Work Speaks",
  description:
    "Discover a Diverse Collection of Projects, Highlighting Our Expertise in Design, Development, and Innovation",
  link: {
    children: "See All Projects",
    type: "primary",
    loading: false,
    url: "projects",
  },
  projects: [
    {
      image: {
        src: "/images/test-project.png",
        alt: "Test Project",
      },
      name: "1 e-Commerce Platform with Custom CMS",
      shortDescription:
        "e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS ",
      url: "#",
    },
    {
      image: {
        src: "/images/test-project.png",
        alt: "Test Project",
      },
      name: "2 e-Commerce Platform with Custom CMS",
      shortDescription:
        "e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS ",
      url: "#",
    },
    {
      image: {
        src: "/images/test-project.png",
        alt: "Test Project",
      },
      name: "3 e-Commerce Platform with Custom CMS",
      shortDescription:
        "e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS ",
      url: "#",
    },
    {
      image: {
        src: "/images/test-project.png",
        alt: "Test Project",
      },
      name: "4 e-Commerce Platform with Custom CMS",
      shortDescription:
        "e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS ",
      url: "#",
    },
    {
      image: {
        src: "/images/test-project.png",
        alt: "Test Project",
      },
      name: "5 e-Commerce Platform with Custom CMS",
      shortDescription:
        "e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS ",
      url: "#",
    },
    {
      image: {
        src: "/images/test-project.png",
        alt: "Test Project",
      },
      name: "6 e-Commerce Platform with Custom CMS",
      shortDescription:
        "e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS e-Commerce Platform with Custom CMSe-Commerce Platform with Custom CMS ",
      url: "#",
    },
  ],
} as IOurProjects;

const OurBlogsData = {
  heading: "Our Latest Blogs",
  description:
    "Discover out latest blogs about the new technologies in the world of computer.",
  link: {
    children: "See All Blogs",
    type: "primary",
    loading: false,
    url: "blogs",
  },
  blogs: [
    {
      blogImage: {
        src: "/images/blog-1.png",
        alt: "e-Commerce Solutions",
      },
      name: "Innovative E-commerce Platform",
      shortDescription:
        "We developed a cutting-edge e-commerce platform for a leading retail brand, integrating seamless shopping experiences with advanced analytics. Our solution",
      blogUrl: "blogs/innovative-e-commerce-platform",
    },
    {
      blogImage: {
        src: "/images/blog-2.png",
        alt: "Custom CRM Solution",
      },
      name: "Custom CRM Solution",
      shortDescription:
        "Our team created a tailored Customer Relationship Management (CRM) system for a growing financial services company. This project focused on enhancing",
      blogUrl: "#",
    },
    {
      blogImage: {
        src: "/images/blog-3.png",
        alt: "Creative Marketing Campaign",
      },
      name: "Creative Marketing Campaign",
      shortDescription:
        "We partnered with a fashion startup to design and execute a creative marketing campaign that included a brand refresh, engaging social media content, and interactive",
      blogUrl: "#",
    },
  ],
} as IBlogCarousel;

const FaqsData = {
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

const HubSpotFormData = {
  heading: "Ready to get in touch with us?",
  subHeading:
    "Get in touch with our team and get professional services from our experts.",
} as IHubSpotForm;

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero {...heroData} />
      <AboutUsBanner {...AboutBannerData} />
      <OurServicesGrid {...OurServiceData} />
      <OurProjects {...OurProjectsData} />
      <OurBlogsCarousel {...OurBlogsData} />
      <Faqs {...FaqsData} />
      <HubSpotForm {...HubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default HomePage;
