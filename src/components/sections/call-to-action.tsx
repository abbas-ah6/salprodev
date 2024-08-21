import React from "react";
import CustomLink from "../elements/CustomLink";

const CallToAction: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-brand-purple-new to-brand-purple z-[2] relative">
      <div className="container mx-auto lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] flex lg:flex-row flex-col gap-[48px] lg:justify-between justify-center items-center">
        <div className="flex-1 flex items-center">
          <span className="lg:text-h2 text-h2M capitalize lg:text-left text-center text-white font-light w-full max-w-[490px]">
            Can’t find your answer? Reach out to us now!
          </span>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div>
            <CustomLink
              children="Get in Touch"
              loading={false}
              type="primary"
              url="contact-us"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
