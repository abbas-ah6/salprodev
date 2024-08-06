import React from "react";
import PropTypes from "prop-types";
import classNames from "classnames";
import { IButton } from "@/types";

const Button: React.FC<IButton> = ({
  children,
  type = "primary",
  loading = false,
  onClick,
}) => {
  const buttonClass = classNames(
    "w-full text-base focus:outline-none leading-[120%] px-[32px] py-[16px] min-w-[216px] flex items-center gap-[10px] justify-center",
    {
      "bg-white font-normal text-brand-black duration-500":
        type === "primary" && !loading,
      "bg-brand-orange font-normal text-white":
        type === "secondary" && !loading,
      "cursor-not-allowed opacity-50": loading,
    }
  );

  const buttonCubeClass = classNames({
    "w-[8px] h-[8px] bg-white bg-gradient-to-r from-brand-orange to-brand-purple":
      type === "primary",
    "w-[8px] h-[8px] bg-white": type === "secondary",
  });

  return (
    <button className={buttonClass} onClick={onClick} disabled={loading}>
      <div className={buttonCubeClass}></div>
      {children}
    </button>
  );
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  type: PropTypes.oneOf(["primary", "secondary"]),
  loading: PropTypes.bool,
  onClick: PropTypes.func,
};

export default Button;
