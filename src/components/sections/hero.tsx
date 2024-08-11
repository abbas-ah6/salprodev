"use client";

import React, { useEffect, useState } from "react";
import { IHero } from "@/types";
import Button from "../elements/button";
import { gsap } from "gsap";
import CustomLink from "../elements/CustomLink";

const Hero: React.FC<IHero> = ({ links, heading, subHeading, tag }) => {
  const [mousePosition, setMousePosition] = useState<{
    x: number;
    y: number;
  } | null>(null);

  // useEffect(() => {
  //   const heroElement = document.querySelector(".hero-container");
  //   if (!heroElement) return;

  //   const heroRect = heroElement.getBoundingClientRect();
  //   const circles = document.querySelectorAll(".circle");

  //   // Function to update circle positions based on mouse proximity
  //   const handleMouseMove = (event: MouseEvent) => {
  //     const mouseX = event.clientX;
  //     const mouseY = event.clientY;
  //     setMousePosition({ x: mouseX, y: mouseY });

  //     circles.forEach((circle: HTMLElement) => {
  //       const circleRect = circle.getBoundingClientRect();
  //       const dx = mouseX - (circleRect.left + circleRect.width / 2);
  //       const dy = mouseY - (circleRect.top + circleRect.height / 2);
  //       const distance = Math.sqrt(dx * dx + dy * dy);

  //       // Define a threshold for the distance at which circles should move away
  //       const threshold = 150;

  //       if (distance < threshold) {
  //         const angle = Math.atan2(dy, dx);
  //         const offsetDistance = (threshold - distance) * 0.5; // Adjust this factor for subtle movement
  //         const offsetX = Math.cos(angle) * offsetDistance;
  //         const offsetY = Math.sin(angle) * offsetDistance;

  //         gsap.to(circle, {
  //           x: `+=${Math.max(
  //             0,
  //             Math.min(
  //               heroRect.width - circleRect.width - (circleRect.left - heroRect.left) - offsetX,
  //               heroRect.width - circleRect.width
  //             )
  //           )}px`,
  //           y: `+=${Math.max(
  //             0,
  //             Math.min(
  //               heroRect.height - circleRect.height - (circleRect.top - heroRect.top) - offsetY,
  //               heroRect.height - circleRect.height
  //             )
  //           )}px`,
  //           duration: 0.3, // Shorter duration for quicker response
  //           ease: "power1.out",
  //         });
  //       }
  //     });
  //   };

  //   // Attach the mouse move event listener
  //   window.addEventListener("mousemove", handleMouseMove);

  //   // Cleanup event listener on component unmount
  //   return () => {
  //     window.removeEventListener("mousemove", handleMouseMove);
  //   };
  // }, []);

  useEffect(() => {
    const heroElement = document.querySelector(".hero-container");
    if (!heroElement) return;

    const heroRect = heroElement.getBoundingClientRect();

    const animateCircles = () => {
      gsap.to(".circle", {
        duration: 35, // Increase duration for slower animation
        x: () => `random(0, ${heroRect.width - 50}px)`,
        y: () => `random(0, ${heroRect.height - 50}px)`,
        ease: "bounce.out",
        repeat: -1,
        yoyo: true,
        stagger: 1,
        modifiers: {
          x: (x) =>
            Math.max(0, Math.min(parseFloat(x), heroRect.width - 50)) + "px",
          y: (y) =>
            Math.max(0, Math.min(parseFloat(y), heroRect.height - 50)) + "px",
        },
      });
    };

    animateCircles();

    const handleResize = () => {
      const updatedHeroRect = heroElement.getBoundingClientRect();
      gsap.to(".circle", {
        x: () => `random(0, ${updatedHeroRect.width - 50}px)`,
        y: () => `random(0, ${updatedHeroRect.height - 50}px)`,
        modifiers: {
          x: (x) =>
            Math.max(0, Math.min(parseFloat(x), updatedHeroRect.width - 50)) +
            "px",
          y: (y) =>
            Math.max(0, Math.min(parseFloat(y), updatedHeroRect.height - 50)) +
            "px",
        },
      });
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <section className="relative w-full bg-white hero-container">
      <div className="container mx-auto lg:px-[30px] lg:py-[60px] py-[36px] px-[24px] w-full flex justify-center items-center flex-col min-h-[580px]">
        <div className="z-10 w-full text-center max-w-[1024px]">
          {tag && (
            <span className="m-0 font-normal uppercase text-b18 text-brand-purple leading-small">
              {tag || ""}
            </span>
          )}
          <h1 className="m-0 mt-[24px] lg:text-h1 text-h1M capitalize font-light leading-small text-brand-purple">
            {heading || ""}
          </h1>
          <p className="m-0 mt-[24px] text-b18 capitalize font-normal leading-small text-brand-gray w-full">
            {subHeading || ""}
          </p>
        </div>
        <div className="z-10 mt-[56px] flex flex-col items-center w-full justify-center gap-14 lg:flex-row">
          {links &&
            links.length > 0 &&
            links.map((item, index) => {
              return (
                <div key={index}>
                  <CustomLink
                    children={item?.children}
                    loading={item?.loading}
                    type={item?.type}
                    newTab={item?.newTab}
                    key={index}
                    url={item?.url}
                  />
                </div>
              );
            })}
        </div>
        <div className="w-full h-full absolute top-0 left-0 pointer-events-none overflow-hidden">
          <div className="circle circle-orange"></div>
          <div className="circle circle-blue"></div>
          <div className="circle circle-purple"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
