"use client";

import React, { useEffect } from "react";
import { gsap } from "gsap";
import { IHero } from "@/types";
import CustomLink from "../elements/CustomLink";


const Hero: React.FC<IHero> = ({ links, heading, subHeading, tag }) => {
  useEffect(() => {
    const orangeCircle = document.querySelector(".circle-orange");
    const blueCircle = document.querySelector(".circle-blue");
    const purpleCircle = document.querySelector(".circle-purple");

    document.addEventListener("mousemove", (e) => {
      gsap.to(orangeCircle, {
        x: e.clientX,
        y: e.clientY,
        duration: 1.5,
        ease: "power2.out",
      });
    });

    let angle = 0;
    document.addEventListener("mousemove", (e) => {
      angle += 0.05;
      const radius = 100;
      const orbitX = e.clientX + Math.cos(angle) * radius;
      const orbitY = e.clientY + Math.sin(angle) * radius;
      gsap.to(blueCircle, {
        x: orbitX,
        y: orbitY,
        duration: 0.5,
        ease: "power2.out",
      });
    });

    gsap.to(purpleCircle, {
      scale: 1.5,
      duration: 2,
      yoyo: true,
      repeat: -1,
      ease: "power1.inOut",
    });

    gsap.to(purpleCircle, {
      x: () => `random(0, window.innerWidth - 50)`,
      y: () => `random(0, window.innerHeight - 50)`,
      duration: 10,
      ease: "sine.inOut",
      repeat: -1,
      yoyo: true,
    });
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
