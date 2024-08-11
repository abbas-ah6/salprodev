import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import NextLink from "next/link";
import { ILink } from "@/types";

const CustomLink: React.FC<ILink> = ({
  children,
  type = "primary",
  loading = false,
  newTab = false,
  url = "#",
}) => {
  const linkClass = classNames(
    "w-full text-base focus:outline-none leading-[120%] px-[32px] py-[16px] min-w-[216px] flex items-center gap-[10px] justify-center",
    {
      "bg-white font-normal text-brand-black duration-500":
        type === "primary" && !loading,
      "bg-brand-orange font-normal text-white":
        type === "secondary" && !loading,
      "cursor-not-allowed opacity-50": loading,
    }
  );

  const linkCubeClass = classNames({
    "w-[8px] h-[8px] bg-white bg-gradient-to-r from-brand-orange to-brand-purple":
      type === "primary",
    "w-[8px] h-[8px] bg-white": type === "secondary",
  });

  return (
    <NextLink href={url} legacyBehavior>
      <a
        className={linkClass}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        <div className={linkCubeClass}></div>
        {children}
      </a>
    </NextLink>
  );
};

CustomLink.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  loading: PropTypes.bool,
  newTab: PropTypes.bool,
  url: PropTypes.string,
};

export default CustomLink;
