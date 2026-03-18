/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#ffffff",
        accent1: {
          DEFAULT: "#0052cc", // Vibrant Cobalt Blue
          light: "#337ae6",
          dark: "#003d99"
        },
        accent2: {
          DEFAULT: "#800000", // Maroon
          light: "#b30000",
          dark: "#4d0000"
        },
        dark: "#1a1a1a", // For text
        gray: {
          50: '#f9fafb',
          100: '#f3f4f6',
          200: '#e5e7eb',
          800: '#1f2937',
          900: '#111827',
        }
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
