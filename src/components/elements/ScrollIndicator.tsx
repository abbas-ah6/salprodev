"use client";

import { useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ScrollIndicator: React.FC = () => {
  useEffect(() => {
    const scrollIndicator = document.querySelector(".scroll-indicator");

    gsap.to(scrollIndicator, {
      scaleY: 1,
      ease: "none",
      scrollTrigger: {
        trigger: document.body,
        start: "top top",
        end: "bottom bottom",
        scrub: true,
      },
    });
  }, []);

  return <div className="scroll-indicator rounded-full"></div>;
};

export default ScrollIndicator;
