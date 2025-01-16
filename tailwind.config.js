/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    
    extend: {
      colors: {
        'black-main': '#232323',
        'green-main': '#CFEF00',
        'White-main': '#EFEFEF'
      },
      fontFamily: {
          smoothpixel: ["SmoothPixel", "sans-serif"],
          dotgothic: ["DotGothic16","sans-serif"]
      },
      backgroundImage: {
        'cert-pattern': "url('/src/assets/images/Cert_bg.png')",
      },
      cursor: {
        'round_black': 'url(/src/assets/Cursors/cur_black.svg),default',
        'round_white': 'url(/src/assets/Cursors/cur_white.svg),default',
        'round_green': 'url(/src/assets/Cursors/cur_green.svg),default',
        'drag_black': 'url(/src/assets/Cursors/cur_drag_black.svg),default',
        'drag_green': 'url(/src/assets/Cursors/cur_drag_green.svg),default',
      },

      animation: {
        orbit: "orbit calc(var(--duration)*1s) linear infinite",
      },
      keyframes: {
        orbit: {
          "0%": {
            transform:
              "rotate(0deg) translateY(calc(var(--radius) * 1px)) rotate(0deg)",
          },
          "100%": {
            transform:
              "rotate(360deg) translateY(calc(var(--radius) * 1px)) rotate(-360deg)",
          },
        },
      },
    },
  },
  plugins: [],
}

