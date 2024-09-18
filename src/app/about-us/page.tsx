import React from "react";
import { Metadata } from "next";
import "../globals.css";
import Hero from "@/components/sections/hero";
import {
  IAboutUs,
  IAboutUsMissionVision,
  IFaqs,
  IHero,
  ITeamMembers,
} from "@/types";
import AboutUsBanner from "@/components/sections/about-us";
import AboutUsMissionVision from "@/components/sections/about-us-mission-vision";
import TeamMemebers from "@/components/sections/team-members";
import CallToAction from "@/components/sections/call-to-action";
import Faqs from "@/components/sections/faqs";

export const metadata: Metadata = {
  title: "Empowering Businesses with Innovative Digital Solutions",
  description:
    "At Salpro DEV, we specialize in crafting innovative software, marketing, and design services that drive success and growth for businesses like yours.",
  metadataBase: new URL("https://salprodev.com"),
  openGraph: {
    title: "Empowering Businesses with Innovative Digital Solutions",
    description:
      "At Salpro DEV, we specialize in crafting innovative software, marketing, and design services that drive success and growth for businesses like yours.",
    url: "https://salprodev.com/about-us",
    siteName: "Salpro DEV",
    images: [
      {
        url: "https://salprodev.com/images/about-us-banner.png",
        width: 1200,
        height: 630,
        alt: "Empowering Businesses with Innovative Digital Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Unlock Your Potential with Our Expert Solutions",
    description:
      "Salpro DEV offers innovative software, marketing, and design services tailored to drive success and growth for businesses of all sizes.",
    images: [
      {
        url: "https://salprodev.com/images/about-us-banner.png",
        width: 1200,
        height: 630,
        alt: "Unlock Your Potential with Our Expert Solutions",
      },
    ],
  },
};

const heroData = {
  heading: "Empowering Businesses with Innovative Digital Solutions",
  subHeading:
    "At Salpro DEV, we specialize in crafting innovative software, marketing, and design services that drive success and growth for businesses like yours.",
  buttons: [
    {
      children: "Get in Touch",
      loading: false,
      type: "primary",
    },
    {
      children: "Our Services",
      loading: false,
      type: "secondary",
    },
  ],
} as IHero;

const aboutUsBannerData = {
  heading: "Partner with Us for Success",
  description:
    "Collaboration is at the heart of what we do. We work closely with our clients to understand their unique needs and deliver tailored solutions that exceed expectations. Let’s embark on this journey together and achieve extraordinary results.",
  link: {
    children: "Contact Us",
    loading: false,
    type: "primary",
    url: "contact-us",
  },
  showBanner: true,
  image: {
    src: "/images/about-us-banner.png",
    alt: "About SalPro DEV",
  },
} as IAboutUs;

const aboutUsMissionVisionData = {
  missionHeading: "Our Mission",
  missionDescription:
    "Our mission is to deliver tailored software solutions that meet our clients' unique needs, fostering innovation and driving measurable results. We are committed to excellence and collaboration, ensuring that every project supports our clients' growth and success.",
  image: {
    src: "/images/mission-vision-banner.png",
    alt: "Mission Vision Banner",
  },
  visionHeading: "Our Vision",
  visionDescription:
    "Our vision is to be a leading force in transforming the digital landscape by fostering innovation and excellence. We strive to be the go-to partner for businesses seeking to achieve their full potential, setting new standards in technology, design, and marketing to shape a brighter future for all.",
} as IAboutUsMissionVision;

const teamMembersData = {
  heading: "The Experts at SalPro DEV",
  subHeading:
    "A group of passionate professionals dedicated to delivering excellence",
  teamMembers: [
    {
      image: {
        src: "/images/abbas-image.png",
        alt: "Muhammad Abbas",
      },
      name: "Muhammad Abbas",
      description:
        "Muhammed Abbas brings over a 3 years of experience in frontend development, specializing in creating visually stunning, responsive, and user-friendly interfaces. His attention to detail and passion for design ensures that every project not only looks great but also delivers an exceptional user experience.",
      role: "Frontend Developer",
      socials: [
        {
          icon: {
            src: "/icons/facebook-icon.svg",
            alt: "Facebook",
          },
          socialUrl: "https://facebook.com",
        },
        {
          icon: {
            src: "/icons/linkedIn-icon.svg",
            alt: "LinkedIn",
          },
          socialUrl: "https://linkedin.com",
        },
        {
          icon: {
            src: "/icons/instagram-icon.svg",
            alt: "Instagram",
          },
          socialUrl: "https://Instagram.com",
        },
        {
          icon: {
            src: "/icons/mail-icon.svg",
            alt: "Mail",
          },
          socialUrl: "https://gmail.com",
        },
      ],
    },
    {
      image: {
        src: "/images/bilal-image.png",
        alt: "Hazrat Bilal",
      },
      name: "Hazrat Bilal",
      description:
        "Bilal is a skilled Full-Stack Developer with expertise in both frontend and backend technologies. He excels at turning complex requirements into intuitive, high-performing applications. With a strong grasp of modern frameworks, server-side languages, and database management, Bilal delivers scalable and efficient solutions. Passionate about staying updated with industry trends, he is dedicated to crafting innovative and effective software solutions.",
      role: "Full-Stack Developer",
      socials: [
        {
          icon: {
            src: "/icons/facebook-icon.svg",
            alt: "Facebook",
          },
          socialUrl: "https://facebook.com",
        },
        {
          icon: {
            src: "/icons/linkedIn-icon.svg",
            alt: "LinkedIn",
          },
          socialUrl: "https://linkedin.com",
        },
        {
          icon: {
            src: "/icons/instagram-icon.svg",
            alt: "Instagram",
          },
          socialUrl: "https://Instagram.com",
        },
        {
          icon: {
            src: "/icons/mail-icon.svg",
            alt: "Mail",
          },
          socialUrl: "https://gmail.com",
        },
      ],
    },
    {
      image: {
        src: "/images/rohullah-image-new.png",
        alt: "Rohullah Hamid",
      },
      name: "Rohullah Hamid",
      description:
        "Rohullah is a skilled Marketing Specialist with a deep expertise in crafting and executing innovative marketing strategies. With a keen eye for market trends and consumer behavior, Rohullah excels in creating impactful campaigns that drive brand growth and engagement. His proficiency spans across digital marketing, content creation, and data analysis, enabling him to develop comprehensive strategies that yield measurable results. Passionate about leveraging the latest marketing technologies and techniques, Rohullah is dedicated to enhancing brand presence and achieving strategic business objectives.",
      role: "Marketing Specialist",
      socials: [
        {
          icon: {
            src: "/icons/facebook-icon.svg",
            alt: "Facebook",
          },
          socialUrl: "https://facebook.com",
        },
        {
          icon: {
            src: "/icons/linkedIn-icon.svg",
            alt: "LinkedIn",
          },
          socialUrl: "https://linkedin.com",
        },
        {
          icon: {
            src: "/icons/instagram-icon.svg",
            alt: "Instagram",
          },
          socialUrl: "https://Instagram.com",
        },
        {
          icon: {
            src: "/icons/mail-icon.svg",
            alt: "Mail",
          },
          socialUrl: "https://gmail.com",
        },
      ],
    },
    {
      image: {
        src: "/images/ahmad-image.png",
        alt: "Ahmad Ali",
      },
      name: "Ahmad Ali",
      description:
        "Ahmad Ali is an experienced Consultant and Social Media Manager skilled in crafting and executing strategic social media campaigns. With a strong grasp of market trends and consumer behavior, Ahmad creates engaging content and strategies that boost brand growth. His expertise in social media platforms and data analysis ensures impactful and measurable results. Passionate about using the latest digital tools, Ahmad is dedicated to enhancing brand presence and achieving business goals.",
      role: "Consultant / Social Media Manager",
      socials: [
        {
          icon: {
            src: "/icons/facebook-icon.svg",
            alt: "Facebook",
          },
          socialUrl: "https://facebook.com",
        },
        {
          icon: {
            src: "/icons/linkedIn-icon.svg",
            alt: "LinkedIn",
          },
          socialUrl: "https://linkedin.com",
        },
        {
          icon: {
            src: "/icons/instagram-icon.svg",
            alt: "Instagram",
          },
          socialUrl: "https://Instagram.com",
        },
        {
          icon: {
            src: "/icons/mail-icon.svg",
            alt: "Mail",
          },
          socialUrl: "https://gmail.com",
        },
      ],
    },
  ],
} as ITeamMembers;

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

const AboutUs: React.FC = () => {
  return (
    <div>
      <Hero {...heroData} />
      <AboutUsBanner {...aboutUsBannerData} />
      <AboutUsMissionVision {...aboutUsMissionVisionData} />
      {/* <TeamMemebers {...teamMembersData} /> */}
      <Faqs {...faqsData} />
      <CallToAction />
    </div>
  );
};

export default AboutUs;
