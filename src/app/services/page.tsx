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
  title: "Exceptional Services Tailored to Your Needs",
  description:
    "Explore our range of professional services designed to help you achieve your goals with efficiency and expertise",
};

const heroData = {
  tag: "POWERED BY AI",
  heading: "Exceptional Services Tailored to Your Needs",
  subHeading:
    "Explore our range of professional services designed to help you achieve your goals with efficiency and expertise",
  buttons: [
    {
      type: "primary",
      children: "Explore Services",
      loading: false,
    },
  ],
} as IHero;

const ourServiceData = {
  heading: "Our Services",
  description:
    "Check out our extensive list of services, each one designed to fulfill your particular company's requirements and promote your success.",
  link: {
    type: "primary",
    children: "Contact Us",
    loading: false,
  },
  services: [
    {
      name: "Custom Software Development",
      serviceImage: {
        src: "/images/custom-software-development.png",
        alt: "Custom Software Development",
      },
      serviceUrl: "#",
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
  heading: "Why Choose SalPro DEV",
  description:
    "Unmatched Expertise, Proven Results—Discover why our clients trust SalPro DEV to deliver exceptional software solutions and outstanding service every time.",
  link: {
    children: "About Us",
    loading: false,
    type: "primary",
  },
  image: {
    src: "/images/why-choose-us-image.png",
    alt: "Whu Choose Us Image",
  },
  cards: [
    {
      heading: "Innovative Solutions",
      description:
        "We leverage cutting-edge technology and creative approaches to deliver solutions that drive growth and efficiency.",
      icon: {
        src: "/icons/bulb.svg",
        alt: "Innovative Solutions",
      },
    },
    {
      heading: "Proven Track Record",
      description:
        "Our history of successful projects and satisfied clients speaks for itself. We consistently achieve results that exceed expectations.",
      icon: {
        src: "/icons/trophy.svg",
        alt: "Proven Track Record",
      },
    },
    {
      heading: "Client-Centric Approach",
      description:
        "We prioritize your needs and work closely with you to tailor our services to your specific goals and challenges.",
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
} as IWhyChooseUs;

const ourProcessData = {
  heading: "Our Process",
  description:
    "Explore our comprehensive, step-by-step approach to transforming your ideas into reality. Our process is designed to ensure precision, creativity, and continuous support throughout the project lifecycle.",
  cards: [
    {
      heading: "Discovery & Planning",
      description:
        "We start by deeply understanding your vision and goals. This phase involves detailed conversations and research to uncover your needs and challenges. We develop a strategic plan that outlines project milestones, deliverables, and success criteria. This foundation ensures alignment and clarity for all stakeholders before moving forward.",
      icon: {
        src: "/icons/magnifying-glass.svg",
        alt: "Discovery & Planning",
      },
    },
    {
      heading: "Design & Prototyping",
      description:
        "Our design team translates your ideas into visual concepts. We create detailed wireframes and interactive prototypes that illustrate how your product will look and function. This phase allows you to visualize the end result, refine the design, and make adjustments based on feedback. Our goal is to ensure the design meets your expectations and is ready for development.",
      icon: {
        src: "/icons/pencil.svg",
        alt: "Design & Prototyping",
      },
    },
    {
      heading: "Development & Quality Assurance",
      description:
        "With the design approved, our developers begin the implementation process using cutting-edge technologies. We focus on creating a high-performance and user-friendly product. Our quality assurance team rigorously tests every feature to identify and resolve issues, ensuring the final product is reliable, secure, and free of bugs.",
      icon: {
        src: "/icons/code-brackets.svg",
        alt: "Development & Quality Assurance",
      },
    },
    {
      heading: "Launch & Ongoing Support",
      description:
        "Once development is complete, we launch your product with a thorough deployment strategy. Post-launch, our support team provides ongoing maintenance, updates, and troubleshooting to address any issues that arise. We are committed to ensuring your product continues to perform optimally and evolves according to your needs.",
      icon: {
        src: "/icons/rocket-md.svg",
        alt: "Launch & Ongoing Support",
      },
    },
    {
      heading: "Feedback & Iteration",
      description:
        "Following the launch, we actively seek your feedback and gather user insights to assess the product’s performance. This phase involves analyzing feedback, identifying areas for improvement, and implementing necessary updates. Iteration ensures that the product evolves based on real-world use and meets the changing needs of your users.",
      icon: {
        src: "/icons/feedback-form.svg",
        alt: "Feedback & Iteration",
      },
    },
    {
      heading: "Optimization & Growth",
      description:
        "As your product matures, we focus on optimizing its performance and scaling it to support growth. This includes performance enhancements, feature expansions, and adapting to market trends. We work closely with you to ensure the product remains competitive and continues to deliver value as your business and technology landscape evolve.",
      icon: {
        src: "/icons/upward-arrow.svg",
        alt: "Optimization & Growth",
      },
    },
  ],
} as IOurProcess;

const Services: React.FC = () => {
  return (
    <div>
      <Hero {...heroData} />
      <OurServicesGrid {...ourServiceData} />
      <WhyChooseUs {...whyChooseUsData} />
      <OurProcess {...ourProcessData} />
      <Faqs {...faqsData} />
      <HubSpotForm {...hubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default Services;
