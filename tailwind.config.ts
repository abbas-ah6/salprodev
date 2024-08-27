import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "grid-bg": "url('/images/grid-bg.png')",
      },
      colors: {
        "brand-purple": "#6800F8",
        "brand-light-purple": "#EDE0FE",
        "brand-purple-alt": "#A563FC",
        "brand-purple-new": "#9447FF",
        "brand-orange": "#FF6B35",
        "brand-orange-alt": "#FF6842",
        "brand-blue": "#00CCCC",
        "brand-black": "#141414",
        "brand-gray": "#7E7E7E",
        "brand-border-gray": "#E6E6E6",
        "brand-offwhite": "#FCFAFF",
      },
      fontSize: {
        h1: "52px",
        h2: "48px",
        h3: "42px",
        h4: "36px",
        h5: "28px",
        h6: "24px",
        lB: "20px",
        b18: "18px",
        b16: "16px",
        b14: "14px",
        b12: "12px",

        h1M: "32px",
        h2M: "28px",
        h3M: "26px",
        h4M: "24px",
      },
      lineHeight: {
        full: "100%",
        small: "120%",
        medium: "140%",
        large: "160%",
      },
      boxShadow: {
        "service-card-shadow":
          "0px 4px 9px rgba(0, 0, 0, 0.12), 0px 24px 48px rgba(0, 15, 85, 0.34)",
        "custom-lg":
          "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
        "custom-colored":
          "0 10px 15px -3px rgba(255, 105, 135, 0.3), 0 4px 6px -2px rgba(255, 105, 135, 0.3)",
      },
    },
  },
  plugins: [],
};
export default config;
