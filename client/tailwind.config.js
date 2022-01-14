module.exports = {
  mode: 'jit',
  content: [],
	purge: ['./src/**/*.{js,jsx,ts,tsx,html}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {},
  },
  variants: {
    extend: {
      padding: ['last', 'first']
    },
  },
  plugins: [],
}
