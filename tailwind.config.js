/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors:{
        // primary: "#fea928",
        // primary: "#FF5733",
        primary: "#FF474D",
        // secondary: "#ed8900",
        secondary: "#d35400",
      },
      container: true,
      padding: {
        DEFAULT: "1rem",
        sm: "3rem",
      },
    },
  },
  plugins: [],
}

