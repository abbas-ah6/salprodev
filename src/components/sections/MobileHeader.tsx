"use client";

import React, { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const MobileHeader: React.FC = () => {
  const [openMenu, setOpemMenu] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setOpemMenu(!openMenu);
  };

  const linkClass = (path: string) =>
    `hover:text-brand-orange text-h4 p-[12px] duration-300 flex justify-center items-center flex-col ${
      pathname === path
        ? "border-b border-brand-orange text-brand-orange"
        : "text-white"
    }`;

  return (
    <div className="flex flex-row items-center w-full lg:hidden justify-end">
      <div
        onClick={() => toggleMenu()}
        className={`bigMenu overflow-hidden w-screen duration-500 delay-150 ease-linear inset-0 absolute z-50 bg-gradient-conic backdrop-blur-lg from-[#8A2EFF]/65 via-[#8A2EFF] via-[#6800F8] to-[#8A2EFF]/65 at-bottom ${
          openMenu ? "h-full" : "h-0"
        }`}
      >
        <div className="container flex mx-auto w-full h-full lg:py-[60px] py-[30px] px-[24px] lg:px-[30px]">
          <nav className="flex w-full justify-center items-top pt-[64px]">
            <ul className="flex w-full m-0 p-0 items-center text-center flex-col list-none gap-6 whitespace-nowrap leading-small text-brand-black">
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
        </div>
      </div>
      <button
        className="bg-none border-none p-4 text-2xl font-semibold duration-200 cursor-pointer"
        onClick={toggleMenu}
      >
        {openMenu ? "///" : "|||"}
      </button>
    </div>
  );
};

export default MobileHeader;
