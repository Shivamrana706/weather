import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    // https://www.metlink.org/wp-content/uploads/2020/11/darkclouds-300x221.png
    extend: {
      backgroundImage: {
        'cloudy': "url('https://m.bbb.org/prod/corecmsimages/9eb82de9-faa2-4c2d-9c17-86ea0136ee66.jpeg?tx=w_763')",
        'clear': "url('https://www.insauga.com/wp-content/uploads/2024/09/pexels-tugba-27679978-1024x683.jpg')"
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
