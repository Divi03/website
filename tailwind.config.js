/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      keyframes: {
        scrollUp: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-1000px)' }, // Adjust based on total height of images
        },
        scrollDown: {
          '0%': { transform: 'translateY(-1000px)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'scroll-up-slow': 'scrollUp 30s linear infinite', // Slow scroll up
        'scroll-up-fast': 'scrollUp 20s linear infinite', // Fast scroll up
        'scroll-down-fast': 'scrollDown 20s linear infinite', // Fast scroll down
      },
      colors:{
        primary:'#04A89B'
      },
    },
  },
  plugins: [],
}
