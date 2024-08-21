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
    "relative w-full text-base focus:outline-none leading-[120%] px-[32px] py-[16px] min-w-[216px] flex items-center gap-[10px] justify-center overflow-hidden group",
    {
      "bg-white font-normal text-brand-black group-hover:text-white duration-500":
        type === "primary" && !loading,
      "bg-brand-orange font-normal text-white":
        type === "secondary" && !loading,
      "cursor-not-allowed opacity-50": loading,
    }
  );

  const linkCubeClass = classNames(
    "absolute group-hover:left-0 left-[2vw] w-[8px] h-[8px] bg-gradient-to-r from-brand-orange to-brand-purple transition-all duration-500 ease-in-out group-hover:w-full group-hover:h-full"
  );

  return (
    <NextLink href={url} legacyBehavior>
      <a
        className={linkClass}
        target={newTab ? "_blank" : "_self"}
        rel={newTab ? "noopener noreferrer" : undefined}
      >
        {/* Animation Cube */}
        <div className={linkCubeClass}></div>
        {/* Button Content */}
        <span className="group-hover:text-white duration-500 ease-in-out relative z-10">{children}</span>
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
