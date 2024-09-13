/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "#E75325",
        background1: "#431101",
        background2: "#DED9C9",
        secback: "#FBF5F3",
        textColor: "#E75425",
        textColor2: "#0A0A0A",
      },
      screens: {
        s350: "350px",
        s450: "450px",
        sm: "640px",
        md: "770px",
        s900: "900px",
        s1000: "1000px",
        s1100: "1100px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      spacing: {
        px: "3rem",
      },
    },
  },
  plugins: [],
};
