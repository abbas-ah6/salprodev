"use client";

import React, { useState } from "react";
import Link from "next/link";
import Button from "../elements/button";

const MobileHeader: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <div className="flex flex-row items-center w-full lg:hidden justify-end">
      <nav
        className={`${
          menuOpen ? "flex" : "hidden"
        } w-full px-4 fixed top-0 right-0 bottom-0 bg-black bg-opacity-80 overflow-hidden transition-all duration-500 ease-in-out flex flex-col items-center justify-center z-[9999]`}
      >
        <button
          className="absolute top-5 right-5 bg-none border-none text-2xl text-white cursor-pointer"
          onClick={closeMenu}
        >
          ×
        </button>
        <ul className="flex gap-5 whitespace-nowrap leading-[164%] text-4xl text-center text-white flex-col">
          <li>
            <Link
              onClick={closeMenu}
              className="hover:text-[#F17720] duration-200"
              href="/home"
            >
              Home
            </Link>
          </li>
          <li>
            <Link
              onClick={closeMenu}
              className="hover:text-[#F17720] duration-200"
              href="/about-us"
            >
              Company
            </Link>
          </li>
          {/* <li>
            <Link onClick={closeMenu}
              className="hover:text-[#F17720] duration-200"
              href="/services"
            >
              Services
            </Link>
          </li> */}
          <li>
            <Link
              onClick={closeMenu}
              className="hover:text-[#F17720] duration-200"
              href={"/contact-us"}
            >
              Contact
            </Link>
          </li>
        </ul>
      </nav>
      <button
        className="bg-none border-none p-4 text-2xl font-semibold duration-200 cursor-pointer"
        onClick={toggleMenu}
      >
        {menuOpen ? "///" : "|||"}
      </button>
    </div>
  );
};

export default MobileHeader;
