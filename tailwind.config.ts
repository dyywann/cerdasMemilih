import type { Config } from "tailwindcss";
const flowbite = require("flowbite-react/tailwind");

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx,mdx}", "./src/components/**/*.{js,ts,jsx,tsx,mdx}", "./src/app/**/*.{js,ts,jsx,tsx,mdx}", flowbite.content()],
  theme: {
    extend: {
      colors: {
        "primary-color": "#FCFCFC",
        "secondary-color": "#B47409",
        "accent-color": "#F59E0B",
        "accent-text-color": "#1F2937",
        "text-color": "#464646",
        "secondary-text-color": "#525252",
        "text-color-inverse": "#FFFFFF",
      },
    },
  },
  plugins: [flowbite.plugin()],
};
export default config;
