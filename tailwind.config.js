module.exports = {
  content: [
    "./**/*.{html,js}",
    "./CSS/**/*.css"
  ],
  theme: {
    extend: {
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
      width: {
        '82': '20.5rem',
        '90': '22.5rem',
        '120': '30rem',
      },
      height: {
        '140': '35rem',
      },
    },
  },
  plugins: [],
}
