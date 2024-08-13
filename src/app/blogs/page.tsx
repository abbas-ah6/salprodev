import React from "react";
import { Metadata } from "next";
import Hero from "@/components/sections/hero";
import { IBlogCarousel, IFaqs, IHero, IHubSpotForm } from "@/types";
import Faqs from "@/components/sections/faqs";
import CallToAction from "@/components/sections/call-to-action";
import HubSpotForm from "@/components/sections/hubspot-form";
import OurBlogsGrid from "@/components/sections/our-blogs-grid";

export const metadata: Metadata = {
  title: "Explore the Latest Insights & Articles | SalPro DEV",
  description:
    "Discover a curated collection of articles and resources at SalPro DEV. Stay informed on current trends, challenges, and industry insights.",
  metadataBase: new URL("https://salprodev-2hoy.vercel.app"),
  openGraph: {
    title: "Explore the Latest Insights & Articles | SalPro DEV",
    description:
      "Discover a curated collection of articles and resources at SalPro DEV. Stay informed on current trends, challenges, and industry insights.",
    url: "https://salprodev-2hoy.vercel.app/blogs",
    siteName: "Salpro DEV",
    images: [
      {
        url: "/images/blogs-hero.png",
        width: 1200,
        height: 630,
        alt: "Explore the Latest Insights & Articles",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Explore the Latest Insights & Articles | SalPro DEV",
    description:
      "Discover a curated collection of articles and resources at SalPro DEV. Stay informed on current trends, challenges, and industry insights.",
    images: [
      {
        url: "/images/blogs-hero.png",
        width: 1200,
        height: 630,
        alt: "Explore the Latest Insights & Articles",
      },
    ],
  },
};

const heroData = {
  heading: "Latest Insights & Articles",
  subHeading:
    "Explore a collection of articles and resources designed to help you navigate current trends and challenges.",
  buttons: [
    {
      type: "primary",
      children: "Explore Blogs",
      loading: false,
    },
  ],
} as IHero;

const ourBlogsData = {
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
      blogUrl: "#",
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

const Blogs: React.FC = () => {
  return (
    <div>
      <Hero {...heroData} />
      <OurBlogsGrid {...ourBlogsData} />
      <Faqs {...faqsData} />
      <HubSpotForm {...hubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default Blogs;
