/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: "Poppins",
      },
      fontSize: {
        base: '14px'
      },
      keyframes: {
        fade: {
          '0%': {
            opacity: '1',
          },
          '100%': {
            opacity: '0',
            background: 'rgba(255, 255, 255, 0)'
          }
        }
      }
    },
  },
  plugins: [],
};
