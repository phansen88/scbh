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
      fontFamily: {
        playfair: ['var(--font-playfair)'],
        assistant: ['var(--font-assistant)'],
      },
      colors: {
        'lash-pink': {
          '50': '#fbf9f8',
          '100': '#f7efee',
          '200': '#eededd',
          '300': '#e2c7c5',
          '400': '#cca0a0',
          '500': '#b78587',
          '600': '#a96674',
          '700': '#944c64',
          '800': '#74384f',
          '900': '#582844',
          '950': '#3a182d',
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
          '50': '#fdfac9',
          '100': '#fef9a5',
          '200': '#fef16d',
          '300': '#fee52a',
          '400': '#ecc904',
          '500': '#cba406',
          '600': '#bf8a03',
          '700': '#b67607',
          '800': '#985d10',
          '900': '#844e15',
          '950': '#542b08',
        },
      }
    },
  },
  plugins: [],
}