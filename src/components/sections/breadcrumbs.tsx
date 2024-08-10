"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import React from "react";

const Breadcrumbs: React.FC = () => {
  const pathname = usePathname();
  const pathSegments = pathname.split("/").filter((segment) => segment !== "");

  return (
    <nav className="breadcrumb-nav">
      <ul className="container mx-auto py-[24px] px-[30px] breadcrumb-list list-none flex items-center space-x-2">
        <li>
          <Link href="/" className="text-brand-gray hover:underline">
            Home
          </Link>
        </li>
        {pathSegments.map((segment, index) => {
          const href = `/${pathSegments.slice(0, index + 1).join("/")}`;
          const isCurrent = index === pathSegments.length - 1;

          return (
            <React.Fragment key={href}>
              <li
                className={`breadcrumb-item ${
                  isCurrent ? "text-brand-orange" : "text-brand-gray"
                }`}
              >
                <Link
                  href={href}
                  className={isCurrent ? "font-light" : "hover:underline"}
                >
                  {segment.replace(/-/g, " ")}
                </Link>
              </li>
              {!isCurrent && (
                <li className="text-brand-gray mx-2"> &gt; </li>
              )}
            </React.Fragment>
          );
        })}
      </ul>
    </nav>
  );
};

export default Breadcrumbs;
