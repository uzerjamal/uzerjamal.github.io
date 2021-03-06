module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      white: '#FFF',
      black: '#030c17',
      blue: '#072141',
      pink: '#ff4d5a',
      gray: '#9ca3af',
      midgray: '#6b7280',
      darkgray: '#161f32'
    },
    extend: {
      backgroundImage: theme => ({
        'earth-map': "url('./images/map.png')",
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
