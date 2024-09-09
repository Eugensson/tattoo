import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: "20px",
        lg: "0px",
      },
    },
    screens: {
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1300px",
    },
    fontFamily: {
      primary: "var(--font-oswald)",
      secondary: "var(--font-raleway)",
      tertiary: "var(--font-rozha-one)",
    },
    backgroundImage: {
      hero: "url('/hero/bg.jpg')",
      about: "url('/about/image.png')",
      interview: "url('/interview/bg.png')",
    },
    content: {
      outlineText: "url('/hero/outline-text.svg')",
    },
    extend: {
      colors: {
        dark: "#111111",
        grey: {
          DEFAULT: "#555555",
        },
      },
    },
  },
  plugins: [],
};
export default config;
