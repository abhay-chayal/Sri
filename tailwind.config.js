/** Design tokens live here and in src/index.css. Change a colour once, it updates everywhere. */
export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ivory: { DEFAULT: '#FAF5EC', deep: '#F1E9DA' },
        ink: { DEFAULT: '#2A2220', soft: '#5B4F49' },
        dusk: { DEFAULT: '#2F4558', deep: '#22333F' },
        copper: { DEFAULT: '#A8552F', dark: '#8A4222', light: '#D9A27F' },
        taupe: '#E4D9C6',
      },
      fontFamily: {
        serif: ['"Cormorant Garamond"', 'Georgia', 'serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      maxWidth: { page: '72rem', prose: '38rem' },
    },
  },
  plugins: [],
}
