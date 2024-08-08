"use client";

import React, { useEffect } from "react";

export default function HubSpotFormEmbed() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://js.hsforms.net/forms/v2.js";
    document.body.appendChild(script);

    script.addEventListener("load", () => {
      if (window.hbspt) {
        window.hbspt.forms.create({
          portalId: "46996366",
          formId: "852f55df-d7d9-40e4-97d9-01c5d2f9678d",
          target: "#hubspotForm",
        });
      }
    });
  }, []);

  return <div id="hubspotForm" className="hubspotForm mt-[48px]"></div>;
}
