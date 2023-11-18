/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        'lash-pink': {
          "50": "#fdf7f7",
          "100": "#fbf0ee",
          "200": "#f6e1dd",
          "300": "#f2d1cc",
          "400": "#edc2bb",
          "500": "#e9b3aa",
          "600": "#ba8f88",
          "700": "#8c6b66",
          "800": "#5d4844",
          "900": "#2f2422",
          "950": '#31072a',
        },
      }
    },
  },
  plugins: [],
}