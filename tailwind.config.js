/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}", // Include all JS, TS, JSX, and TSX files in the src folder
  ],
  theme: {
    extend: {
      animation: {
        moveLeft: 'moveLeft 20s linear infinite',
        moveRight: 'moveRight 20s linear infinite',
      },
      keyframes: {
        moveLeft: {
          '100%': { transform: 'translateX(0)' },
          '0%': { transform: 'translateX(-100%)' },
        },
        moveRight: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(100%)' },
        },
      },
    },
  },
  plugins: [],
}


