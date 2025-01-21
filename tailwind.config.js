/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./src/**/**/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        caladea: ['Caladea', 'serif'],
        inter: ['Inter', 'sans-serif'],
        kumbh: ['Kumbh Sans', 'sans-serif'],
        nunito: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
}

