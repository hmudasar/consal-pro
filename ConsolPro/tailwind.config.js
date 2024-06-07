/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        dark: "#131313",
        gray: "#B0B0B0",
        orange: "#EDBC5A",
      },
      backgroundColor: {
        orange: "#EDBC5A",
        "light-dark": "#1A1717",
        dark: "#131313",
      },
      borderColor: {
        dark: "#262626",
      },
      fontFamily: {
        custom: ["Gilory", "sans-serif"],
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".text-stroke-white": {
          "-webkit-text-stroke-color": "#fff",
          "-webkit-text-stroke-width": "1px",
        },
      };

      addUtilities(newUtilities, ["responsive", "hover"]);
    },
  ],
};
