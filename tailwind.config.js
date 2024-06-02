/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundClip: {
        'text': 'text'
      },
      colors: {
        'custom-red': '#f05742'
      }
    },
  },
  plugins: [],
}