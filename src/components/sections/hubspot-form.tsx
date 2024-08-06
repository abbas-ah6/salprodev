import { IHubSpotForm } from "@/types";
import React from "react";

const HubSpotForm: React.FC<IHubSpotForm> = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col bg-white w-full">
      <div className="container mx-auto flex flex-col justify-center px-[30px] py-[60px] w-full">
        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center lg:text-left text-center">
          <h3 className="text-h3 font-light leading-small text-brand-purple m-0">
            {heading || ""}
          </h3>
          <p className="mt-[24px] text-b18 font-normal leading-medium text-brand-gray w-full">
            {subHeading || ""}
          </p>
        </div>
        <iframe
          id="booking"
          height={700}
          width={350}
          className="w-full mt-[48px]"
          src="https://www.google.com"
        ></iframe>
      </div>
    </div>
  );
};

export default HubSpotForm;
