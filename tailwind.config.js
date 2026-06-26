/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          500: '#facc15', // Yellow accent from the image
        },
        accent: {
          orange: '#f97316',
          cyan: '#06b6d4',
          yellow: '#eab308'
        },
        brand: {
          dark: '#000000',      // Pure black background
          light: '#ffffff',     // Pure white
          textLight: '#ffffff', // White text
          textDark: '#000000',  // Black text
          cardDark: '#000000',  // Pure black cards
          cardLight: '#ffffff', 
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
        display: ['"Playfair Display"', 'serif'], // Serif for the big numbers
        mono: ['"Fira Code"', 'monospace'],
      },
      borderRadius: {
        '4xl': '2rem',
        '5xl': '3rem',
      }
    },
  },
  plugins: [],
}
