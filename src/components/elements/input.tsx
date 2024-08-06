import React, { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  placeholder?: string;
}

const Input: React.FC<InputProps> = ({ placeholder, className, ...rest }) => {
  return (
    <input
      {...rest}
      className={`border border-[#3E4662] text-base font-semibold text-[#9EA2B0] rounded-md px-4 py-6 focus:outline-none focus:border-[#F17720] ${className}`}
      placeholder={placeholder}
    />
  );
};

export default Input;
