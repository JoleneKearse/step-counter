/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-light": "#FFF2EB",
        "neutral-dark": "#251627",
        "green-100": "#97C497",
        "green-200": "#7CB67C",
        "green-300": "#62A762",
        "green-400": "#498349",
        "green-500": "#335B33",
        "green-600": "#1D341D",
        "purple": "#633B68",
      }
    },
  },
  plugins: [],
};
