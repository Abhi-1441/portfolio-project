/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: "#fbbf24", // Example primary color
        secondary: "#10b981", // Example secondary color
      },
    },
  },
  plugins: [],
}