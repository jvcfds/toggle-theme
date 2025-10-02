/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class', // <<< importante para alternar via classe .dark
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
