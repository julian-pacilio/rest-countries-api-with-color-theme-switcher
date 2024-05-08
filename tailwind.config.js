/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      boxShadow: {
        'custom-shadow' : '0px 0px 6px 3px rgba(0,0,0,0.1)',
      }
    },
  },
  plugins: [],
}

