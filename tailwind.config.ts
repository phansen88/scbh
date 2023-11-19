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
          "50": '#FDFCFC',
          "100": '#FBF8FA',
          "200": '#F3EDEF',
          "300": '#E4D7DC',
          "400": '#D4BFC6',
          "500": '#C3A7AF',
          "600": '#B5919A',
          "700": '#A0737C',
          "800": '#865A61',
          "900": '#614245',
          "950": '#4F3538'
        },
      }
    },
  },
  plugins: [],
}