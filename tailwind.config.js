// Tokens sampled by eye from the reference screenshots (no CSS access): dark navy, teal-green, mint grey, square corners.
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: { ink: '#0b0f17', green: { DEFAULT: '#1fa688', dark: '#188a71', soft: '#e6f4f0' }, mint: '#f2f6f5', line: '#dde4e2', mute: '#5b6670' },
      fontFamily: { sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'] },
    },
  },
  plugins: [],
}
