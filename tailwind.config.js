/** @type {import('tailwindcss').Config} */
module.exports = {
  mode: 'jit',
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        darkOrange: '#ff532f',
        lightOrange: '#fab839',
        brightPink: '#ff52dc',
      },
      boxShadow: {
        productGlow: '0 8px 18px -2px rgb(225 225 225 / 0.5), 0 4px 12px -4px rgb(255 255 255 / 0.3)'
      }
    },
  },
  plugins: [],
}

