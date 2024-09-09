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
  title: "Top-Notch Digital Marketing Services | SalPro DEV",
  description:
    "Boost your online presence with SalPro DEV's expert digital marketing services. From SEO to social media, we deliver customized strategies that drive traffic, engagement, and conversions.",
  metadataBase: new URL("https://salprodev.com"),
  keywords: [
    "Digital Marketing",
    "SEO",
    "Search Engine Optimization",
    "Social Media Marketing",
    "PPC Advertising",
    "Content Marketing",
    "Email Marketing",
    "SalPro DEV",
  ],

  openGraph: {
    title: "Top-Notch Digital Marketing Services | SalPro DEV",
    description:
      "Boost your online presence with SalPro DEV's expert digital marketing services. From SEO to social media, we deliver customized strategies that drive traffic, engagement, and conversions.",
    url: "https://salprodev.com/services/digital-marketing",
    siteName: "SalPro DEV",
    images: [
      {
        url: "https://salprodev.com/images/social-media.png",
        width: 1200,
        height: 630,
        alt: "Professional Digital Marketing Services",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Top-Notch Digital Marketing Services | SalPro DEV",
    description:
      "Boost your online presence with SalPro DEV's expert digital marketing services. From SEO to social media, we deliver customized strategies that drive traffic, engagement, and conversions.",
    images: [
      {
        url: "https://salprodev.com/images/social-media.png",
        width: 1200,
        height: 630,
        alt: "Professional Digital Marketing Services",
      },
    ],
  },
};

const heroData = {
  heading: "Elevate Your Digital Presence",
  subHeading:
    "At SalPro DEV, our digital marketing services are designed to grow your brand online. Whether you need targeted SEO strategies, impactful social media campaigns, or comprehensive PPC management, we tailor our approach to meet your business goals and maximize ROI.",
  links: [
    {
      type: "primary",
      children: "Get Started Today!",
      loading: false,
      url: "/contact-us",
    },
  ],
  image: {
    src: "/images/social-media.png",
    alt: "Digital Marketing Services Image",
  },
} as IServiceHero;

const textWithImageData = {
  heading: "Why Invest in Digital Marketing?",
  description:
    "In the digital age, having a strong online presence is crucial for business success. Our digital marketing services help you reach your target audience, improve brand visibility, and increase engagement. With our expertise, you can turn digital interactions into meaningful customer relationships and measurable business results.",
  image: {
    src: "/images/why-custom-software.png",
    alt: "Why Invest in Digital Marketing Image",
  },
  link: {
    children: "Contact Us",
    loading: false,
    type: "primary",
    url: "/contact-us",
  },
  bulletPoints: [
    {
      text: "Search Engine Optimization (SEO): Enhance your website's visibility on search engines and attract more organic traffic.",
    },
    {
      text: "Pay-Per-Click (PPC) Advertising: Drive targeted traffic with data-driven PPC campaigns that deliver results.",
    },
    {
      text: "Social Media Marketing: Engage your audience on social media platforms with tailored content and strategies.",
    },
    {
      text: "Content Marketing: Create and distribute valuable content that attracts, engages, and converts your audience.",
    },
    {
      text: "Email Marketing: Build lasting customer relationships with personalized and effective email campaigns.",
    },
  ],
} as ITextWithImage;

const digitalMarketingServicesData = {
  heading: "Our Comprehensive Digital Marketing Services",
  description:
    "Explore our full range of digital marketing services designed to boost your online presence and drive business growth.",
  link: {
    children: "Learn More",
    loading: false,
    type: "primary",
    url: "/contact-us",
  },
  image: {
    src: "/images/checklist-image.png",
    alt: "Digital Marketing Services Process Image",
  },
  cards: [
    {
      heading: "SEO Services",
      description:
        "Improve your website's search engine rankings with our expert SEO strategies, driving organic traffic to your site.",
      icon: {
        src: "/icons/seo.svg",
        alt: "SEO Services",
      },
    },
    {
      heading: "PPC Management",
      description:
        "Maximize your ROI with our targeted PPC campaigns, designed to drive high-quality traffic to your website.",
      icon: {
        src: "/icons/ppc.svg",
        alt: "PPC Management",
      },
    },
    {
      heading: "Social Media Marketing",
      description:
        "Engage and grow your audience on social media platforms with customized strategies and compelling content.",
      icon: {
        src: "/icons/social-media.svg",
        alt: "Social Media Marketing",
      },
    },
    {
      heading: "Content Marketing",
      description:
        "Create and share valuable content that resonates with your audience and supports your business objectives.",
      icon: {
        src: "/icons/content-marketing.svg",
        alt: "Content Marketing",
      },
    },
    {
      heading: "Email Marketing",
      description:
        "Build customer loyalty and drive conversions with targeted, personalized email campaigns.",
      icon: {
        src: "/icons/email-marketing.svg",
        alt: "Email Marketing",
      },
    },
    {
      heading: "Analytics & Reporting",
      description:
        "Gain insights into your marketing performance with our comprehensive analytics and reporting services.",
      icon: {
        src: "/icons/analytics.svg",
        alt: "Analytics & Reporting",
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
      <WhyChooseUs {...digitalMarketingServicesData} />
      <OurProcess {...ourProcessData} />
      <WhyChooseUs {...whyChooseUsData} />
      <Faqs {...faqsData} />
      <HubSpotForm {...hubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default Page;
