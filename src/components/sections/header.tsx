"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileHeader from "./MobileHeader";
import CustomLink from "../elements/CustomLink";

const Header: React.FC = () => {
  const pathname = usePathname();

  const isLandingPage = pathname.startsWith("/l/");
  const isContact = pathname.startsWith("/book-consultation");

  const [openMenu, setOpemMenu] = useState(false);

  const toggleMenu = () => {
    setOpemMenu(!openMenu);
  };

  const linkClass = (path: string) =>
    `hover:text-brand-orange p-[12px] duration-300 flex justify-center items-center flex-col ${
      pathname === path ? "border-b border-brand-orange text-brand-orange" : ""
    }`;

  return (
    <div className="flex justify-between w-full">
      <header className="flex container mx-auto gap-5 px-8 py-5 justify-between items-center border-b border-solid border-b-[#00000015] border-b-opacity-10">
        <Link href={"/home"}>
          <Image
            width={124}
            height={48}
            loading="lazy"
            src="/primary-colored-logo.svg"
            alt="SalPro DEV logo"
            className="shrink-0 max-w-[124px] max-h-[48px] w-full h-full object-contain object-center"
          />
        </Link>
        {!isLandingPage && !isContact ? (
          <nav className="lg:flex hidden gap-14 max-md:flex-wrap max-md:max-w-full">
            {/* <button onClick={() => toggleMenu()}>CLICK ME</button> */}
            <ul className="flex list-none gap-6 whitespace-nowrap leading-small text-brand-black">
              <li>
                <Link className={linkClass("/home")} href="/home">
                  Home
                </Link>
              </li>
              <li>
                <Link className={linkClass("/about-us")} href="/about-us">
                  Company
                </Link>
              </li>
              <li>
                <Link className={linkClass("/services")} href="/services">
                  Services
                </Link>
              </li>
              <li>
                <Link className={linkClass("/blogs")} href="/blogs">
                  Blogs
                </Link>
              </li>
              <li>
                <Link className={linkClass("/contact-us")} href="/contact-us">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        ) : (
          <nav className="lg:flex gap-14 max-md:flex-wrap max-md:max-w-full">
            <Link
              className="lg:flex hidden"
              href={isContact ? "#booking" : "/book-consultation"}
            >
              <CustomLink type="primary" loading={false} url="contact-us">
                Get in Touch
              </CustomLink>
            </Link>
            <Link
              className="flex lg:hidden hover:-translate-y-2 duration-300 ease-in-out"
              href="tel:1300450621"
            >
              <img
                loading="lazy"
                src="https://cdn.builder.io/api/v1/image/assets/TEMP/726cf93851ed0c6ffc415262c4ebb8279988b4f3ebcafee08859cd00cda6dff0?apiKey=51129e7c69a0473bb746c6168817ef8c&"
                className="self-center w-8 aspect-square"
              />
            </Link>
          </nav>
        )}
        {!isLandingPage && !isContact && <MobileHeader />}
      </header>
      {/* <div
        onClick={() => toggleMenu()}
        className={`bigMenu w-screen duration-500 delay-150 ease-linear absolute z-50 bg-gradient-conic backdrop-blur-lg from-[#8A2EFF]/65 via-[#8A2EFF] via-[#6800F8] to-[#8A2EFF]/65 at-bottom ${
          openMenu ? "h-screen" : "h-0"
        }`}
      >
        <div className="container flex mx-auto w-full h-full lg:py-[60px] py-[30px] px-[24px] lg:px-[30px]">
          <div className="flex lg:flex-row flex-col w-full lg:justify-between justify-center lg:items-end items-center gap-32px">
            <nav className="flex w-full">
              <ul className="flex w-full lg:justifty-start items-start lg:text-start text-center flex-col list-none gap-6 whitespace-nowrap leading-small text-brand-black">
                <li>
                  <Link className={linkClass("/home")} href="/home">
                    Home
                  </Link>
                </li>
                <li>
                  <Link className={linkClass("/about-us")} href="/about-us">
                    Company
                  </Link>
                </li>
                <li>
                  <Link className={linkClass("/services")} href="/services">
                    Services
                  </Link>
                </li>
                <li>
                  <Link className={linkClass("/blogs")} href="/blogs">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link className={linkClass("/contact-us")} href="/contact-us">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
            <div className="flex flex-col justify-end text-end">
              <div className="mb-4">
                <h2 className="text-3xl font-bold">Contact Us</h2>
              </div>
              <p className="text-lg">Phone: (123) 456-7890</p>
              <p className="text-lg">Email: contact@yourwebsite.com</p>
              <p className="text-lg">Address: 123 Main Street, City, Country</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
};

export default Header;
