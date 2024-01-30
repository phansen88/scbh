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
          '50': '#fdfcfc',
          '100': '#f9f6f6',
          '200': '#f1e9eb',
          '300': '#eadedf',
          '400': '#dbc6c8',
          '500': '#bd999c',
          '600': '#ac8b95',
          '700': '#a27c87',
          '800': '#916976',
          '900': '#84626e',
          '950': '#6f4d58',
        },
        'shade': {
          '50': '#cec4de',
          '100': '#c8bdd6',
          '200': '#bcadcc',
          '300': '#aa97be',
          '400': '#997fad',
          '500': '#896b9e',
          '600': '#775c84',
          '700': '#614f69',
          '800': '#46394c',
          '900': '#322b36',
          '950': '#28222b',
        },
        'curry': {
          "50": '#FEFDFB',
          "100": '#FEFBF6',
          "200": '#FBF2E5',
          "300": '#F6E4C6',
          "400": '#F1D4A2',
          "500": '#E6B65F',
          "600": '#E4B153',
          "700": '#DFA534',
          "800": '#C28B1E',
          "900": '#8D6616',
          "950": '#735312'
        },
      }
    },
  },
  plugins: [],
}