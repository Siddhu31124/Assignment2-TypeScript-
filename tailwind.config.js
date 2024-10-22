/**@type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode:"selector",
    theme: {
      fontSize: {
        basic: '14px',
        head: '16px'
      },
    extend: {},
  },
  plugins: [],
}


