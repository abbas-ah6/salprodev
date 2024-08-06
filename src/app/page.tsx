import React from "react";
import { Metadata } from "next";
import HomePage from "./home/page";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
  title: "Accounting & Taxation Services Paramatta",
  description:
    "We're here to help you elevate your financial understanding whilst taking care of all your accounting and tax needs.",
};

const Home: React.FC = () => {
  redirect("/home");

  return <HomePage />;
};

export default Home;
