import React from "react";
import Button from "../elements/button";
import CustomLink from "../elements/CustomLink";

const CallToAction: React.FC = () => {
  return (
    <section className="w-full bg-gradient-to-r from-brand-purple-new to-brand-purple">
      <div className="container mx-auto px-[30px] py-[60px] flex lg:flex-row flex-col gap-[48px] lg:justify-between justify-center items-center">
        <div className="flex-1 flex items-center">
          <h2 className="text-h2 capitalize lg:text-left text-center text-white font-light w-full max-w-[490px]">
            Can’t find your answer? Reach out to us now!
          </h2>
        </div>
        <div className="flex flex-1 justify-center items-center">
          <div>
            <CustomLink
              children="Book Consultation"
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
