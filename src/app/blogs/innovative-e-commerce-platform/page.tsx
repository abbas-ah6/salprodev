import React from "react";
import { Metadata } from "next";
import Hero from "@/components/sections/hero";
import {
  IBlogCarousel,
  IBlogDetails,
  IBlogHero,
  IFaqs,
  IHero,
  IHubSpotForm,
} from "@/types";
import Faqs from "@/components/sections/faqs";
import CallToAction from "@/components/sections/call-to-action";
import HubSpotForm from "@/components/sections/hubspot-form";
import OurBlogsGrid from "@/components/sections/our-blogs-grid";
import BlogHero from "@/components/sections/blog-hero";
import BlogDetails from "@/components/sections/blog-details";

export const metadata: Metadata = {
  title: "Revolutionary e-Commerce Platform | SalPro DEV",
  description:
    "Discover how our innovative e-commerce platform is transforming online shopping with cutting-edge technology and seamless user experiences.",
  metadataBase: new URL("https://salprodev.com"),
  openGraph: {
    title: "Revolutionary e-Commerce Platform | SalPro DEV",
    description:
      "Discover how our innovative e-commerce platform is transforming online shopping with cutting-edge technology and seamless user experiences.",
    url: "https://salprodev.com/blogs/innovative-e-commerce-platform",
    siteName: "Salpro DEV",
    images: [
      {
        url: "https://salprodev.com/images/blog-1.png",
        width: 1200,
        height: 630,
        alt: "Revolutionary e-Commerce Platform",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@salprodev",
    title: "Revolutionary e-Commerce Platform | SalPro DEV",
    description:
      "Discover how our innovative e-commerce platform is transforming online shopping with cutting-edge technology and seamless user experiences.",
    images: [
      {
        url: "https://salprodev.com/images/blog-1.png",
        width: 1200,
        height: 630,
        alt: "Revolutionary e-Commerce Platform",
      },
    ],
  },
};

const heroData = {
  heading: "innovative-e-commerce-platform",
  authorImage: {
    src: "/images/abbas-image.png",
    alt: "Muhammad Abbbas",
  },
  authorName: "Muhammad Abbas",
  image: {
    src: "/images/blog-1.png",
    alt: "innovative-e-commerce-platform",
  },
} as IBlogHero;

const ourBlogsData = {
  heading: "Our Latest Blogs",
  description:
    "Discover out latest blogs about the new technologies in the world of computer.",
  link: {
    children: "See All Blogs",
    type: "primary",
    loading: false,
    url: "/blogs",
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

const blogContentData = {
  blogContent: `
    <h2>Revolutionizing Online Shopping: The Innovative E-Commerce Platform</h2>
    <p>The <strong>e-commerce industry</strong> is undergoing a significant transformation, driven by the need for more <em>efficient</em>, <em>user-friendly</em>, and <strong>innovative solutions</strong>. Our new e-commerce platform is designed to meet these demands and elevate the online shopping experience.</p>
    <br>
    <h3>Features of the Innovative E-Commerce Platform</h3>
    <p>Our platform introduces several <strong>cutting-edge features</strong> that set it apart from traditional e-commerce solutions. Here are some highlights:</p>
    <ul>
      <li><strong>AI-Powered Recommendations</strong> - Personalized shopping experiences based on user behavior and preferences.</li>
      <li><strong>Seamless Integration</strong> - Easily integrates with existing systems and third-party applications.</li>
      <li><strong>Enhanced Security</strong> - Advanced security measures to protect user data and transactions.</li>
      <li><strong>Multi-Channel Support</strong> - Engage customers across various channels, including social media and mobile apps.</li>
    </ul>
    <br>
    <h3>How It Works</h3>
    <p>Our e-commerce platform utilizes <strong>state-of-the-art technology</strong> to provide a seamless experience from browsing to checkout. Here's a brief overview:</p>
    <ol>
      <li><strong>Intelligent Search</strong> - Users can quickly find products using advanced search algorithms.</li>
      <li><strong>Customizable User Profiles</strong> - Allows users to tailor their shopping experience based on personal preferences.</li>
      <li><strong>Real-Time Analytics</strong> - Track user behavior and sales performance in real time.</li>
      <li><strong>Efficient Order Processing</strong> - Streamlined processes ensure quick and accurate order fulfillment.</li>
    </ol>
    <br>
    <h2>Benefits of Adopting the Platform</h2>
    <p>By choosing our innovative e-commerce platform, businesses can enjoy numerous benefits:</p>
    <ul>
      <li><strong>Increased Sales</strong> - Enhanced customer engagement and targeted marketing drive higher sales.</li>
      <li><strong>Improved Customer Satisfaction</strong> - A user-friendly interface and personalized experience lead to happier customers.</li>
      <li><strong>Scalability</strong> - The platform grows with your business, handling increasing traffic and transactions effortlessly.</li>
    </ul>
    <br>
    <h3>Get Started Today</h3>
    <p>Ready to revolutionize your online shopping experience? <a href="https://www.example.com/get-started" target="_blank" rel="noopener noreferrer">Sign up</a> for a free demo or <a href="https://www.example.com/contact" target="_blank" rel="noopener noreferrer">contact us</a> to learn more about how our platform can benefit your business.</p>

    <p>For more information and updates, follow us on <a href="https://twitter.com/example" target="_blank" rel="noopener noreferrer">Twitter</a> and <a href="https://facebook.com/example" target="_blank" rel="noopener noreferrer">Facebook</a>.</p>
  `,
} as IBlogDetails;

const Page: React.FC = () => {
  return (
    <div>
      <BlogHero {...heroData} />
      <BlogDetails {...blogContentData} />
      <OurBlogsGrid {...ourBlogsData} />
      <Faqs {...faqsData} />
      <HubSpotForm {...hubSpotFormData} />
      <CallToAction />
    </div>
  );
};

export default Page;
