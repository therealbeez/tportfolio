module.exports = {
  purge: {
    mode:'layers',
    content:['./public/**/*.html/'],
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily:{
        raj: ['Ramaraja']
      },
      colors:{
        beige: {
          light: '#FBF9F5',
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
