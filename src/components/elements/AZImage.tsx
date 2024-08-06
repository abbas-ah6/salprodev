import * as React from "react";
import Image from "next/image";

type AZImageProps = {
    src: string;
    className?: string; // Make classes optional with '?'
    alt: string;     // Make alt text optional with '?'
    w: number;
    h: number;
};

const AZImage: React.FC<AZImageProps> = ({
    src,
    className,
    alt,
    w,
    h,
}) => {
    return (
        <Image src={src} width={w} height={h} alt={alt} className={className + " hover:shadow-lg ease-in-out duration-500	 hover:shadow-orange-200"} />
    );
};

export default AZImage;
