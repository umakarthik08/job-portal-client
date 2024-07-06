// tailwind.config.js
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        playwrite: ['Libre Baskerville'],
      },
      colors: {
        "primary": "#141414"
      }
    },
  },
  plugins: [],
}
