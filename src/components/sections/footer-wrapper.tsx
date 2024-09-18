"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import * as React from "react";

const FooterWrapper: React.FC = () => {
  const pathname = usePathname();

  const isLandingPage = pathname.startsWith("/l/");
  const isContact = pathname.startsWith("/book-consultation");

  return (
    <>
      {!isLandingPage && !isContact && (
        <section className="flex flex-col w-full bg-brand-orange-alt z-[2] relative">
          <div className="flex flex-col container mx-auto lg:px-[30px] lg:py-[60px] py-[36px] px-[24px]">
            <div className="flex flex-col lg:flex-row gap-5 justify-between mt-4 w-full max-md:flex-wrap max-md:max-w-full">
              <div className="flex flex-col justify-center lg:justify-center lg:items-start items-center">
                <Link href={"/"}>
                  <Image
                    width={140}
                    height={60}
                    loading="lazy"
                    src="/primary-logo-white.svg"
                    className="self-center max-w-[140px] max-h-[60px] w-full h-full object-contain object-center"
                    alt="SalPro DEV Logo"
                  />
                </Link>
                <p className="text-b16 text-white text-balance leading-medium max-w-[420px] mt-[16px] text-center lg:text-left">
                  Explore our range of professional services designed to help
                  you achieve your goals with efficiency and expertise.
                </p>
              </div>
              <div className="max-md:max-w-full">
                <div className="flex gap-5 max-md:flex-col max-md:gap-0">
                  <div className="flex flex-col grow max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col min-w-[150px] text-b18 leading-6 text-white max-md:mt-8 text-center lg:text-start">
                      <div className="font-medium text-lB leading-[120%]">
                        Quick Links
                      </div>
                      <a
                        href="/home"
                        className="mt-8 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        Home
                      </a>
                      <a
                        href="/about-us"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        About
                      </a>
                      <a
                        href="/services"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        Services
                      </a>
                      <a
                        href="/blogs"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        Blogs
                      </a>
                      <a
                        href="/contact-us"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        Contact
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 min-w-[150px] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-b18 leading-6 text-white max-md:mt-8 text-center lg:text-start">
                      <div className="font-medium text-lB leading-[120%]">
                        Services
                      </div>
                      <a
                        href="/services/web-development"
                        className="mt-8 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        Web Development
                      </a>
                      <a
                        href="/services/digital-marketing"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        Digital Marketing
                      </a>
                      <a
                        href="/services/branding"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        Branding
                      </a>
                      <a
                        href="/services/app-development"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        Mobile App
                      </a>
                    </div>
                  </div>
                  <div className="flex flex-col ml-5 min-w-[150px] max-md:ml-0 max-md:w-full">
                    <div className="flex flex-col text-b18 leading-6 text-white max-md:mt-8 text-center lg:text-start">
                      <div className="font-medium text-lB leading-[120%]">
                        Contact
                      </div>
                      <a
                        href="mailto:salprodevofficial@gmail.com"
                        className="mt-8 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        salprodevofficial@gmail.com
                      </a>
                      <a
                        href="tel:+923458826673"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        +92 345 8826673
                      </a>{" "}
                      <a
                        href="tel:+923469564075"
                        className="mt-3 max-md:mr-2.5 hover:text-brand-blue  duration-300 ease-in-out cursor-pointer"
                      >
                        +92 346 9564075
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="mt-[120px] shrink-0 h-[1px] w-full max-md:max-w-full"
              style={{
                background:
                  "linear-gradient(to right, #FF6842 0%, #ffffff 50%, #FF6842 100%)",
              }}
            />
            <div className="lg:justify-between justify-center text-center lg:text-left items-center py-[12px] w-full flex flex-col lg:flex-row">
              <p className="text-b12 w-full text-white leading-small">
                © 2024 SalPro DEV. All rights reserved.
              </p>
              <div className="flex gap-5 px-1.5 mt-4 max-md:pr-5 w-full justify-center lg:justify-end flex-wrap">
                <Link
                  target="_blank"
                  href={"https://www.facebook.com/salprodevofficial"}
                  className="text-white text-b16 leading-small hover:text-brand-blue duration-300 ease-in-out"
                >
                  Facebook
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.instagram.com/salprodevofficial"}
                  className="text-white text-b16 leading-small hover:text-brand-blue duration-300 ease-in-out"
                >
                  Instagram
                </Link>
                <Link
                  target="_blank"
                  href={"https://www.linkedin.com/company/salprodevofficial"}
                  className="text-white text-b16 leading-small hover:text-brand-blue duration-300 ease-in-out"
                >
                  LinkedIn
                </Link>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default FooterWrapper;
