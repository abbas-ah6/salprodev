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

export const metadata: Metadata = {
  title: "Custom Software Development Services | SalPro DEV",
  description:
    "Explore SalPro DEV's custom software development services designed to drive innovation and growth. Our expert team is dedicated to turning your vision into reality with precision and efficiency.",
  metadataBase: new URL("https://salprodev-2hoy.vercel.app"),
  openGraph: {
    title: "Custom Software Development Services | SalPro DEV",
    description:
      "Explore SalPro DEV's custom software development services designed to drive innovation and growth. Our expert team is dedicated to turning your vision into reality with precision and efficiency.",
    url: "https://salprodev-2hoy.vercel.app/services/custom-software-development",
    siteName: "Salpro DEV",
    images: [
      {
        url: "/images/custom-software-development.png",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Custom Software Development Services | SalPro DEV",
    description:
      "Explore SalPro DEV's custom software development services designed to drive innovation and growth. Our expert team is dedicated to turning your vision into reality with precision and efficiency.",
    images: [
      {
        url: "/images/custom-software-development.png",
        width: 1200,
        height: 630,
        alt: "Custom Software Development Services",
      },
    ],
  },
};

const heroData = {
  heading: "Custom Software Development",
  subHeading:
    "At SalPro DEV, we specialize in delivering custom software development services that drive innovation and growth. Whether you're looking to streamline operations, enhance customer experiences, or create a unique digital product, our team of experts is here to turn your vision into reality with precision and efficiency.",
  links: [
    {
      type: "primary",
      children: "Contact Now!",
      loading: false,
      url: "/contact-us",
    },
  ],
  image: {
    src: "/images/custom-software-development.png",
    alt: "Custom Software Development Image",
  },
} as IServiceHero;

const textWithImageData = {
  heading: "Why Choose Custom Software Development?",
  description:
    "In a rapidly evolving digital landscape, off-the-shelf solutions often fall short of addressing specific business needs. Custom software development offers a tailored approach, providing solutions that are built to match your unique requirements, ensuring scalability, efficiency, and a competitive edge.",
  image: {
    src: "/images/why-custom-software.png",
    alt: "Why Custom Software Development Image",
  },
  link: {
    children: "Contact Us",
    loading: false,
    type: "primary",
    url: "/contact-us",
  },
  bulletPoints: [
    {
      text: "Tailored Solutions: Software designed to fit your exact business processes and goals.",
    },
    {
      text: "Scalability: Easily adapt and scale the software as your business grows.",
    },
    {
      text: "Enhanced Security: Custom-built solutions offer robust security features specific to your needs.",
    },
    {
      text: "Integration: Seamlessly integrate with existing systems and platforms.",
    },
    {
      text: "Competitive Advantage: Gain a unique edge with software designed to stand out.",
    },
  ],
} as ITextWithImage;

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
    url: "/about-us",
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
  imageAlignment: "left",
} as IWhyChooseUs;

const customSoftwareServicesData = {
  heading: "Our Custom Software Development Services",
  description:
    "Explore our range of custom software development services designed to meet diverse business needs.",
  link: {
    children: "About Us",
    loading: false,
    type: "primary",
    url: "/about-us",
  },
  image: {
    src: "/images/checklist-image.png",
    alt: "Whu Choose Us Image",
  },
  cards: [
    {
      heading: "Enterprise Software Solutions",
      description:
        "Large-scale, complex software tailored for enterprise-level operations.",
      icon: {
        src: "/icons/server.svg",
        alt: "Enterprise Software Solutions",
      },
    },
    {
      heading: "Mobile App Development",
      description: "Custom mobile applications for iOS and Android platforms.",
      icon: {
        src: "/icons/smartphone.svg",
        alt: "Mobile App Development",
      },
    },
    {
      heading: "Web Application Development",
      description: "Interactive and user-friendly web applications.",
      icon: {
        src: "/icons/monitor.svg",
        alt: "Web Application Development",
      },
    },
    {
      heading: "CRM and ERP Systems",
      description:
        "Tailored solutions for managing customer relationships and enterprise resources.",
      icon: {
        src: "/icons/database.svg",
        alt: "CRM and ERP Systems",
      },
    },
    {
      heading: "Software Integration Services",
      description: "Seamless integration with existing systems and platforms.",
      icon: {
        src: "/icons/workflow.svg",
        alt: "Software Integration Services",
      },
    },
    {
      heading: "Custom APIs and Middleware",
      description:
        "Develop APIs and middleware solutions to enhance connectivity and functionality.",
      icon: {
        src: "/icons/link.svg",
        alt: "CRM and ERP Systems",
      },
    },
  ],
  imageAlignment: "right",
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

const Page: React.FC = () => {
  return (
    <div>
      <ServiceHero {...heroData} />
      <TextWithImage {...textWithImageData} />
      <OurProcess {...ourProcessData} />
      <WhyChooseUs {...customSoftwareServicesData} />
      <WhyChooseUs {...whyChooseUsData} />
      <Faqs {...faqsData} />
      <HubSpotForm {...hubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default Page;
