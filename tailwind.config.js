/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    letterSpacing : {
        normal :  '3.12px',
        medium : '1.2px',
        large : '4.50px',
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}