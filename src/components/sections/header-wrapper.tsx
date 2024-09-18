"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import MobileHeader from "./MobileHeader";
import CustomLink from "../elements/CustomLink";

const HeaderWrapper: React.FC = () => {
  const pathname = usePathname();
  const isLandingPage = pathname.startsWith("/l/");
  const isContact = pathname.startsWith("/book-consultation");

  // State to toggle the dropdown visibility
  const [isDropdownVisible, setDropdownVisible] = useState(false);

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
              <li
                className="relative"
                onMouseEnter={() => setDropdownVisible(true)}
                onMouseLeave={() => {
                  setTimeout(() => {
                    setDropdownVisible(false);
                  }, 300);
                }}
              >
                <Link className={linkClass("/services")} href="/services">
                  Services
                </Link>
                {/* Dropdown menu */}
                <ul
                  className={`absolute list-none p-0 appearance-none top-full left-0 w-fit min-w-[200px] bg-white z-50 rounded-lg transition-all duration-500 ease-in-out overflow-hidden ${
                    isDropdownVisible
                      ? "max-h-[580px] shadow-lg border-gray-200 border"
                      : "max-h-0"
                  }`}
                  style={{ transitionProperty: "max-height" }}
                >
                  <li
                    onMouseEnter={() => setDropdownVisible(true)}
                    className="p-4 hover:text-brand-orange duration-300 ease-in-out"
                  >
                    <Link href="/services/branding">Branding</Link>
                  </li>
                  <li
                    onMouseEnter={() => setDropdownVisible(true)}
                    className="p-4 hover:text-brand-orange duration-300 ease-in-out"
                  >
                    <Link href="/services/web-development">
                      Web Development
                    </Link>
                  </li>
                  <li
                    onMouseEnter={() => setDropdownVisible(true)}
                    className="p-4 hover:text-brand-orange duration-300 ease-in-out"
                  >
                    <Link href="/services/digital-marketing">
                      Digital Marketing
                    </Link>
                  </li>
                  <li
                    onMouseEnter={() => setDropdownVisible(true)}
                    className="p-4 hover:text-brand-orange duration-300 ease-in-out"
                  >
                    <Link href="/services/app-development">
                      Mobile App Development
                    </Link>
                  </li>
                </ul>
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
    </div>
  );
};

export default HeaderWrapper;
