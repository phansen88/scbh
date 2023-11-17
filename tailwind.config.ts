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
          '50': '#fce4d9',
          '100': '#fbdcd0',
          '200': '#f8afaf',
          '300': '#f692b2',
          '400': '#f15f86',
          '500': '#e6337a',
          '600': '#bd2887',
          '700': '#9e1a72',
          '800': '#811861',
          '900': '#681861',
          '950': '#31072a',
        },
      }
    },
  },
  plugins: [],
}