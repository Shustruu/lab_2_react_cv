/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class', // ЦЕЙ РЯДОК ДОЗВОЛЯЄ ПЕРЕМИКАТИ ТЕМУ КЛАСОМ 'dark'
  theme: {
    extend: {},
  },
  plugins: [],
}