/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Poppins", "sans-serif"],
    },
    extend: {
      colors: {
        primary: "#a30132", // #a30132 || #5c16d8
        secondary: "#010f2c",
        tertiary: "#1b0122",
      },
    },
  },
  plugins: ["prettier-plugin-tailwindcss"],
}
