/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'brand-blue': '#0a244f',
        'brand-pink': '#e60f4b',
        'brand-yellow': '#fcd500',
        'brand-white': '#ffffff',
        'brand-gray': '#e9e9ea',
        'brand-dgray': '#e5e5e5',
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      
    },
  },
  plugins: [],
}