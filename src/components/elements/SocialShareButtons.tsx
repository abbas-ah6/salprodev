// components/SocialShareButtons.tsx
"use client"; // Ensure this component is rendered on the client-side

import React from "react";
import {
  FacebookIcon,
  FacebookShareButton,
  TwitterIcon,
  TwitterShareButton,
  LinkedinIcon,
  LinkedinShareButton,
} from "react-share";
import { usePathname } from "next/navigation";

interface SocialShareButtonsProps {
  heading: string;
}

const SocialShareButtons: React.FC<SocialShareButtonsProps> = ({ heading }) => {
  const pathname = usePathname();
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || "https://localhost:3000";
  const currentUrl = `${baseUrl}${pathname}`;

  return (
    <div className="flex flex-row gap-[16px] items-center">
      <FacebookShareButton url={currentUrl} title={heading}>
        <FacebookIcon size={42} round />
      </FacebookShareButton>
      <TwitterShareButton url={currentUrl} title={heading}>
        <TwitterIcon size={42} round />
      </TwitterShareButton>
      <LinkedinShareButton url={currentUrl} title={heading}>
        <LinkedinIcon size={42} round />
      </LinkedinShareButton>
    </div>
  );
};

export default SocialShareButtons;
