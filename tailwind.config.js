module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      rubik: ['Rubik', 'sans-serif'],
    },
    container: {
      center: true,
      padding: '4rem',
    },
    extend: {},
  },

  plugins: [require('flowbite/plugin')],
};
