// src/app/loading.tsx

import Image from "next/image";
import React from "react";

const Loading = () => {
  return (
    <div className="z-50 backdrop-blur-xl inset-0 w-full h-full flex absolute justify-center items-center bg-gradient-to-tr from-brand-purple to-brand-purple-new">
      <div className="absolute duration-500 animate-spin rounded-full h-[160px] w-[160px] border-t-4 border-b-4 border-white"></div>
      <Image
        src="/primary-logo-white.svg"
        width={120}
        height={80}
        className="h-[80px] w-[120px] max-w-[120px] max-h-[80px] object-contain object-center"
        alt={"SalPro DEV"}
      />
    </div>
  );
};

export default Loading;
