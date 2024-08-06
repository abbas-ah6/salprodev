import React from "react";
import { Metadata } from "next";
import "../globals.css";
import ContactForm from "@/components/sections/contact-form";
import ContactMapNew from "@/components/sections/contact-map-new";

export const metadata: Metadata = {
  title: "Ready to get in touch with us?",
  description:
    "Get in touch with our team and get professional consultation from one of our experts.",
};

const ContactUs: React.FC = () => {
  return (
    <div>
      <ContactForm
        showForm={true}
        showImageBanner={false}
        formHeading="Request a Consultation Now"
        formSubHeading="Fill in the form for expert consultation"
        heading="Ready to get in touch with us?"
        subHeading="Get in touch with our team and get professional consultation from one of our experts. Schedule a consultation or call us directly, drop us an email or visit our office."
      />
      <ContactMapNew />
    </div>
  );
};

export default ContactUs;
