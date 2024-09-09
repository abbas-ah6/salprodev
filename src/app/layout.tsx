import type { Metadata } from "next";
import "./globals.css";
import Footer from "@/components/sections/footer";
import Header from "@/components/sections/header";
import ScrollIndicator from "@/components/elements/ScrollIndicator";
import { Raleway } from "next/font/google";
import { Analytics } from "@vercel/analytics/react";

const raleway = Raleway({
  subsets: ["latin"],
  variable: "--ralway",
  display: "swap",
  weight: ["400", "700"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${raleway.className}`}>
      <head>
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <ScrollIndicator />
        <Analytics />
      </body>
    </html>
  );
}
