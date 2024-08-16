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
      }
    },
  },
  plugins: [],
}

