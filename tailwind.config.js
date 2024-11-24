/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: {
          50: '#f7f7f8',
          100: '#eeeef1',
          200: '#d4d5dc',
          300: '#9fa1b2',
          400: '#71738b',
          500: '#494b66',
          600: '#2c2e45',
          700: '#1f2137',
          800: '#16182c',
          900: '#111224',
        }
      }
    },
  },
  plugins: [],
}