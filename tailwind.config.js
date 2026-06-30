/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1B2A41',
          light: '#2C3E5A',
          dark: '#121E2E',
        },
        champagne: {
          DEFAULT: '#C9A86A',
          light: '#DBC79A',
          dark: '#A8884A',
        },
        ivory: '#FBFAF7',
        softgray: '#EDECE8',
        stone: '#8A8A85',
      },
      fontFamily: {
        serif: ['Cormorant Garamond', 'Georgia', 'serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', '-apple-system', 'sans-serif'],
      },
      letterSpacing: {
        widest: '0.25em',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
      },
      animation: {
        fadeUp: 'fadeUp 0.9s ease-out forwards',
        fadeIn: 'fadeIn 1.2s ease-out forwards',
      },
    },
  },
  plugins: [],
}