"use client";

import React, { useEffect } from "react";

const GoogleReviews: React.FC = () => {
  useEffect(() => {
    // Load ElfSite script asynchronously
    const script = document.createElement("script");
    script.src = "https://static.elfsight.com/platform/platform.js";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    return () => {
      // Clean up: remove script from the DOM when component unmounts
      document.body.removeChild(script);
    };
  }, []);

  return (
    <section className="flex flex-col justify-center pt-16 w-full bg-white max-md:max-w-full">
      <div className="flex flex-col mx-auto container">
        <div className="flex relative flex-col mt-4 text-[#12151F] max-md:max-w-full">
          <div className="flex flex-col mt-4 max-md:max-w-full">
            <h3 className="text-center text-5xl font-extralight leading-10 text-whtie max-md:max-w-full max-md:text-4xl">
              Our reviews
            </h3>
            <div
              className="shrink-0 h-[1px] mt-4 w-full max-md:max-w-full"
              style={{
                background:
                  "linear-gradient(to right, #ffffff00 0%, #979EC0 50%, #ffffff00 100%)",
              }}
            />
            <div className="flex justify-center items-center px-16 mt-8 max-md:px-5 max-md:max-w-full">
              <div
                className="elfsight-app-54dc6bed-430a-464d-9719-1c1ccba5a234"
                data-elfsight-app-lazy
              ></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GoogleReviews;
