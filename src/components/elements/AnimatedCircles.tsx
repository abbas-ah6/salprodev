"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";

const AnimatedCircles: React.FC = () => {
  useEffect(() => {
    const heroElement = document.querySelector(".hero-container");
    // if (!heroElement) return;

    const heroRect = heroElement.getBoundingClientRect();

    const animateCircles = () => {
      gsap.to(".circle", {
        duration: 6,
        x: () => `random(0, ${heroRect.width - 50}px)`,
        y: () => `random(0, ${heroRect.height - 50}px)`,
        ease: "power1.inOut",
        repeat: -1,
        yoyo: true,
        stagger: 1, // Stagger start times
        modifiers: {
          x: (x) => Math.max(0, Math.min(x, heroRect.width - 50)) + "px",
          y: (y) => Math.max(0, Math.min(y, heroRect.height - 50)) + "px",
        },
      });
    };

    animateCircles();
    // Re-calculate on window resize
    window.addEventListener("resize", () => {
      const updatedHeroRect = heroElement.getBoundingClientRect();
      gsap.to(".circle", {
        x: () => `random(0, ${updatedHeroRect.width - 50}px)`,
        y: () => `random(0, ${updatedHeroRect.height - 50}px)`,
        modifiers: {
          x: (x) => Math.max(0, Math.min(x, updatedHeroRect.width - 50)) + "px",
          y: (y) =>
            Math.max(0, Math.min(y, updatedHeroRect.height - 50)) + "px",
        },
      });
    });
  }, []);

  return (
    <>
      <div className="circle circle-blue"></div>
      <div className="circle circle-orange"></div>
      <div className="circle circle-purple"></div>
    </>
  );
};

export default AnimatedCircles;
