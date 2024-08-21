"use client";

import React, { useEffect, useState } from "react";

export default function HubSpotFormEmbed() {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);

  useEffect(() => {
    const loadScript = () => {
      if (isScriptLoaded || document.querySelector("script[src='https://js.hsforms.net/forms/v2.js']")) {
        // Script is already loaded
        return;
      }

      const script = document.createElement("script");
      script.src = "https://js.hsforms.net/forms/v2.js";
      script.async = true;

      script.onload = () => {
        setIsScriptLoaded(true);
        try {
          if (window.hbspt) {
            window.hbspt.forms.create({
              portalId: "46996366",
              formId: "852f55df-d7d9-40e4-97d9-01c5d2f9678d",
              target: "#hubspotForm",
              onFormSubmit: (formData) => {
                console.log("Form submitted successfully", formData);
              },
              onFormReady: () => {
                console.log("HubSpot form is ready.");
              },
              onFormSubmitError: (error) => {
                console.error("Error submitting HubSpot form:", error);
              },
            });
          }
        } catch (error) {
          console.error("Error creating HubSpot form:", error);
        }
      };

      script.onerror = () => {
        console.error("Failed to load HubSpot form script.");
      };

      document.body.appendChild(script);
    };

    loadScript();

    return () => {
      const script = document.querySelector("script[src='https://js.hsforms.net/forms/v2.js']");
      if (script) {
        script.remove();
      }
    };
  }, [isScriptLoaded]);

  return <div id="hubspotForm" className="hubspotForm mt-[48px]"></div>;
}
