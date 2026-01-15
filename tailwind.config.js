/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#ffeb3b',
        secondary: '#4ecdc4',
        accent: '#ff6b6b',
        dark: '#222',
      },
    },
  },
  plugins: [],
}

