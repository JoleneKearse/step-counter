/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "neutral-50": "#F7F2F8",
        "neutral-100": "#F3EBF4",
        "neutral-200": "#E9DBEB",
        "neutral-300": "#E1CEE3",
        "neutral-400": "#D5BBD8",
        "neutral-500": "#CBAACF",
        "neutral-600": "#BD93C2",
        "neutral-700": "#AD79B4",
        "neutral-800": "#95589D",
        "neutral-900": "#5D3762",
        "neutral-950": "#251627",
        "green-100": "#97C497",
        "green-200": "#7CB67C",
        "green-300": "#62A762",
        "green-400": "#498349",
        "green-500": "#335B33",
        "green-600": "#1D341D",
        purple: "#633B68",
        "purple-alpha": "#633B6888",
      },
    },
  },
  plugins: [],
};
