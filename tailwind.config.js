
module.exports = {
  purge: [],
  theme: {
    extend: {
      backgroundImage: theme => ({
  'hero-pattern': "url('/images/bgbw.jpg')",
  'weather-card':"url('/images/weather.jpg')"
  })
    },
  },
  variants: {},
  plugins: [],
  future:{
    removeDeprecatedGapUtilities: true,
    purgeLayersByDefault: true
  }
}