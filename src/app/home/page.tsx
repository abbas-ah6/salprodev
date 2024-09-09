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
  IOurProcess,
  IOurProjects,
  IServicesGrid,
  IWhyChooseUs,
} from "@/types";
import AboutUsBanner from "@/components/sections/about-us";
import OurServicesGrid from "@/components/sections/our-services-grid";
import OurProjects from "@/components/sections/our-projects";
import OurBlogsCarousel from "@/components/sections/our-blogs-carousel";
import Faqs from "@/components/sections/faqs";
import CallToAction from "@/components/sections/call-to-action";
import HubSpotForm from "@/components/sections/hubspot-form";
import WhyChooseUs from "@/components/sections/why-choose-us";
import OurProcess from "@/components/sections/our-process";

export const metadata: Metadata = {
  title: "Building High-Quality Tech Solutions for Community Growth",
  description:
    "Delivering exceptional tech solutions tailored to drive community growth and engagement with a focus on innovation and excellence.",
  metadataBase: new URL("https://salprodev.com"),
  keywords: [
    "tech solutions",
    "community growth",
    "innovative technology",
    "software development",
    "web development",
    "digital transformation",
    "Salpro DEV",
    "custom tech services",
    "high-quality tech solutions",
    "business growth",
  ],
  openGraph: {
    title: "Building High-Quality Tech Solutions for Community Growth",
    description:
      "Delivering exceptional tech solutions tailored to drive community growth and engagement with a focus on innovation and excellence.",
    url: "https://salprodev.com",
    siteName: "Salpro DEV",
    images: [
      {
        url: "https://salprodev.com/images/salprodev-home.png",
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
        url: "https://salprodev.com/images/salprodev-home.png",
        width: 1200,
        height: 630,
        alt: "Building High-Quality Tech Solutions for Community Growth",
      },
    ],
  },
};

const heroData = {
  tag: "We Help You Excel in",
  heading: "",
  subHeading:
    "At SalPro Dev, we transform your business ideas into powerful digital experiences. From creating compelling brand identities to developing cutting-edge web and mobile applications, our expert team delivers solutions that drive growth and success.",
  links: [
    {
      type: "primary",
      children: "Get in Touch",
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
  asTypeWriterHeading: true,
  typingTexts: [
    "Web Development",
    "Digital Marketing",
    "App Development",
    "Branding",
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
      name: "Branding",
      serviceImage: {
        src: "/images/ui-ux-design.png",
        alt: "UI/UX Design",
      },
      serviceUrl: "/services/branding",
      shortDescription:
        "Build a brand that speaks volumes. We craft distinctive brand identities that resonate with your target audience and leave a lasting impression.",
    },
    {
      name: "Web Development",
      serviceImage: {
        src: "/images/custom-software-development.png",
        alt: "Web Development",
      },
      serviceUrl: "services/web-development",
      shortDescription:
        "Your website is your digital storefront. We create responsive, user-friendly websites that not only look great but also deliver exceptional performance.",
    },
    {
      name: "Digital Marketing",
      serviceImage: {
        src: "/images/digital-marketing.png",
        alt: "Digital Marketing",
      },
      serviceUrl: "/services/digital-marketing",
      shortDescription:
        "Drive traffic, engage customers, and boost your bottom line. Our data-driven marketing strategies help you reach and convert your ideal audience.",
    },
    {
      name: "Mobile App Development",
      serviceImage: {
        src: "/images/mobile-app-development.png",
        alt: "Mobile App Development",
      },
      serviceUrl: "/services/app-development",
      shortDescription:
        "Transform your vision into reality. Our expert developers build scalable, high-performance mobile apps tailored to your business needs.",
    },
    // {
    //   name: "E-commerce Solutions",
    //   serviceImage: {
    //     src: "/images/e-commerce-solutions.png",
    //     alt: "E-commerce Solutions",
    //   },
    //   serviceUrl: "#",
    //   shortDescription:
    //     "Comprehensive e-commerce solutions, including website development, payment gateway integration, and inventory management. We help you build a thriving online store.",
    // },
    // {
    //   name: "Deployment Services",
    //   serviceImage: {
    //     src: "/images/deployment-services.png",
    //     alt: "Deployment Services",
    //   },
    //   serviceUrl: "#",
    //   shortDescription:
    //     "Developing responsive and high-performance mobile applications for both Android and iOS platforms. We turn your ideas into accessible and engaging mobile experiences.",
    // },
    // {
    //   name: "CMS Development",
    //   serviceImage: {
    //     src: "/images/cms-development.png",
    //     alt: "CMS Development",
    //   },
    //   serviceUrl: "#",
    //   shortDescription:
    //     "Expert guidance on technology strategy and implementation. Our consulting services help you navigate the complexities of IT and leverage technology to achieve your business goals.",
    // },
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
      blogUrl: "/blogs/innovative-e-commerce-platform",
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

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero {...heroData} />
      <AboutUsBanner {...AboutBannerData} />
      <OurServicesGrid {...OurServiceData} />
      <WhyChooseUs {...whyChooseUsData} />
      {/* <OurProjects {...OurProjectsData} /> */}
      <OurProcess {...ourProcessData} />
      <OurBlogsCarousel {...OurBlogsData} />
      <Faqs {...FaqsData} />
      <HubSpotForm {...HubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default HomePage;
