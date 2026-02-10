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
        // Professional Modern Palette
        // Primary: Deep Navy (Backgrounds)
        // Accent: Electric Teal (Highlights)
        // Secondary: Slate (Text/Subtle backgrounds)

        primary: {
          50: '#f0f9ff',  // Lightest Blue
          100: '#e0f2fe', // Light Blue
          200: '#bae6fd', // Pale Blue
          300: '#7dd3fc', // Sky Blue
          400: '#38bdf8', // Bright Blue
          500: '#0ea5e9', // Vivid Blue
          600: '#0284c7', // Deep Blue
          700: '#0369a1', // Darker Blue
          800: '#075985', // Navy Blue
          900: '#0c4a6e', // Deepest Navy
          950: '#082f49', // Ultra Dark Navy
        },
        accent: {
          50: '#f0fdfa',  // Mint Ice
          100: '#ccfbf1', // Pale Mint
          200: '#99f6e4', // Soft Teal
          300: '#5eead4', // Bright Teal
          400: '#2dd4bf', // Vivid Teal
          500: '#14b8a6', // Teal
          600: '#0d9488', // Deep Teal
          700: '#0f766e', // Dark Teal
          800: '#115e59', // Darkest Teal
          900: '#134e4a', // Midnight Teal
          950: '#042f2e', // Deepest Teal
        },
        brand: {
          dark: '#0a192f',  // Main Dark Background
          light: '#f8fafc', // Main Light Background
          textLight: '#e2e8f0', // Light Text
          textDark: '#1e293b',  // Dark Text
          cardDark: '#112240',  // Card Background Dark
          cardLight: '#ffffff', // Card Background Light
        }
      },
      fontFamily: {
        sans: ['"Outfit"', 'sans-serif'],
        display: ['"Calibre"', 'sans-serif'], // Optional for headings if added
        mono: ['"SF Mono"', '"Fira Code"', 'monospace'],
      },
      dropShadow: {
        glow: '0 0 10px rgba(45, 212, 191, 0.5)',
        glowBlue: '0 0 10px rgba(56, 189, 248, 0.5)',
        neon: '0 0 20px rgba(45, 212, 191, 0.8)', // Intense Teal Glow
        neonBlue: '0 0 20px rgba(56, 189, 248, 0.8)', // Intense Blue Glow
      },
      boxShadow: {
        'glow-sm': '0 0 10px rgba(45, 212, 191, 0.3)',
        'glow-md': '0 0 20px rgba(45, 212, 191, 0.5)',
        'glow-lg': '0 0 30px rgba(45, 212, 191, 0.6)',
        'neon': '0 0 20px rgba(45, 212, 191, 0.8)', // Intense Teal Glow
        'neon-strong': '0 0 50px -12px rgba(45, 212, 191, 0.8)', // Super strong glow
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'float': 'float 6s ease-in-out infinite',
      },
      keyframes: {
        fadeInUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      }
    },
  },
  plugins: [],
}
