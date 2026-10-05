/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        ink: { DEFAULT: '#0E1A26', 2: '#132233', 3: '#0A131C' },
        paper: '#F6F5F1',
        line: '#E2E0D8',
        muted: '#5A6573',
        signal: {
          DEFAULT: '#2A7FBF',
          dark: '#1F659C',
          light: '#8CC4EE',
          soft: '#E7F1F9',
        },
        plum: {
          DEFAULT: '#A2306A',
          dark: '#85245A',
          soft: '#F7E8F0',
        },
      },
      fontFamily: {
        display: ['Archivo', 'Inter', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'ui-monospace', 'monospace'],
      },
      transitionTimingFunction: {
        out: 'cubic-bezier(0.23, 1, 0.32, 1)',
      },
    },
  },
  plugins: [],
}
