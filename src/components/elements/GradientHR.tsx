import * as React from "react";
import Input from "../elements/input";

const GradientHR: React.FC = () => {
  return (
    <div
    className="shrink-0 h-[1px] mt-24 w-full max-md:max-w-full"
    style={{
      background: "linear-gradient(to right, white, #979EC0, white)",
    }}
  />
  );
};

export default GradientHR;
