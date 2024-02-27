import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'sm': {'min': '320px', 'max': '767px'},

        'md': {'min': '768px', 'max': '1023px'},

        'lg': {'min': '1024px'},
      },
    },
  },
  plugins: [],
};
export default config;
