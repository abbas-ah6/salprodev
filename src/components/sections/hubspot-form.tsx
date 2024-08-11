import { IHubSpotForm } from "@/types";
import React from "react";
import HubSpotFormEmbed from "../elements/hubSpotForm";

const HubSpotForm: React.FC<IHubSpotForm> = ({ heading, subHeading }) => {
  return (
    <div className="flex flex-col bg-white w-full">
      <div className="container mx-auto flex flex-col justify-center lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full">
        <div className="flex flex-col lg:justify-start justify-center lg:items-start items-center lg:text-left text-center">
          <h3 className="lg:text-h3 text-h3M font-light leading-small text-brand-purple m-0">
            {heading || ""}
          </h3>
          <p className="mt-[24px] text-b18 font-normal leading-medium text-brand-gray w-full">
            {subHeading || ""}
          </p>
        </div>
        <HubSpotFormEmbed/>
      </div>
    </div>
  );
};

export default HubSpotForm;
