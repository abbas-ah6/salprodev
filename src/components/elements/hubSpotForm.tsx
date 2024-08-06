"use client";

import React, { useEffect, useRef } from "react";

const HubSpotFormEmbed: React.FC = () => {
  const formContainerRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const script = document.createElement("script");
    script.charset = "utf-8";
    script.type = "text/javascript";
    script.src = "//js.hsforms.net/forms/embed/v2.js";
    script.onload = () => {
      if (window.hbspt && formContainerRef.current) {
        window.hbspt.forms.create({
          region: "na1",
          portalId: "46996366",
          formId: "852f55df-d7d9-40e4-97d9-01c5d2f9678d",
          target: formContainerRef.current,
        });
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div
      ref={formContainerRef}
      className="w-full mt-[48px]"
      style={{ height: "750px", width: "350px" }}
    />
  );
};

export default HubSpotFormEmbed;
