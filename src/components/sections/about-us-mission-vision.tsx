import { IAboutUsMissionVision } from "@/types";
import Image from "next/image";
import React from "react";

const AboutUsMissionVision: React.FC<IAboutUsMissionVision> = ({
  missionHeading,
  missionDescription,
  image,
  visionHeading,
  visionDescription,
}) => {
  return (
    <section className="flex flex-col bg-white w-full">
      <div className="container mx-auto lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] grid lg:grid-cols-3 grid-cols-1 gap-[24px]">
        <div className="flex flex-col gap-[16px] lg:justify-start lg:text-left justify-center text-center">
          <h6 className="text-h6 text-brand-purple leading-small">
            {missionHeading || ""}
          </h6>
          <p className="text-b18 text-brand-gray leading-medium">
            {missionDescription || ""}
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            width={392}
            height={386}
            alt={image?.alt || "Mission and Vision Banner"}
            src={image?.src || ""}
            className="w-full h-full max-w-[392px] max-h-[386px] object-contain object-center"
          />
        </div>
        <div className="flex flex-col gap-[16px] lg:justify-start lg:text-left justify-center text-center">
          <h6 className="text-h6 text-brand-purple leading-small">
            {visionHeading || ""}
          </h6>
          <p className="text-b18 text-brand-gray leading-medium">
            {visionDescription || ""}
          </p>
        </div>
      </div>
    </section>
  );
};

export default AboutUsMissionVision;
