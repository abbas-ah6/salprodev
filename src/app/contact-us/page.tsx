import React from "react";
import { Metadata } from "next";
import "../globals.css";
import Hero from "@/components/sections/hero";
import { IFaqs, IHero, IHubSpotForm } from "@/types";
import CallToAction from "@/components/sections/call-to-action";
import Faqs from "@/components/sections/faqs";
import HubSpotForm from "@/components/sections/hubspot-form";

export const metadata: Metadata = {
  title: "Get in Touch with Us",
  description:
    "Whether you're ready to start a new project, have questions about our services, or just want to learn more about how we can help your business grow, we're here to assist you. Let's discuss how we can collaborate to achieve your digital goals.",
  metadataBase: new URL("https://salprodev.com"),
  openGraph: {
    title: "Get in Touch with Us",
    description:
      "Whether you're ready to start a new project, have questions about our services, or just want to learn more about how we can help your business grow, we're here to assist you. Let's discuss how we can collaborate to achieve your digital goals.",
    url: "https://salprodev.com/contact-us",
    siteName: "Salpro DEV",
    images: [
      {
        url: "https://salprodev.com/images/salprodev-contact.png",
        width: 1200,
        height: 630,
        alt: "Get in Touch with Us",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Get in Touch with Us",
    description:
      "Whether you're ready to start a new project, have questions about our services, or just want to learn more about how we can help your business grow, we're here to assist you. Let's discuss how we can collaborate to achieve your digital goals.",
    images: [
      {
        url: "https://salprodev.com/images/salprodev-contact.png",
        width: 1200,
        height: 630,
        alt: "Get in Touch with Us",
      },
    ],
  },
};

const heroData = {
  heading: "Get in Touch with Us",
  subHeading:
    "Whether you're ready to start a new project, have questions about our services, or just want to learn more about how we can help your business grow, we're here to assist you. Let's discuss how we can collaborate to achieve your digital goals.",
  buttons: [
    {
      children: "Fill contact form",
      loading: false,
      type: "primary",
    },
  ],
} as IHero;

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

const ContactUs: React.FC = () => {
  return (
    <div>
      <Hero {...heroData} />
      <HubSpotForm {...hubSpotFormData} />
      <Faqs {...faqsData} />
      <CallToAction />
    </div>
  );
};

export default ContactUs;
