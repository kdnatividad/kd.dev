import defaultTheme from "tailwindcss/defaultTheme";

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", ...defaultTheme.fontFamily.sans],
      },
    },
    container: {
      center:true,
      padding: '1rem',
      screens: {
          lg: '768px',
          xl: '1024px',
      },
    },
  },
  plugins: [],
};
