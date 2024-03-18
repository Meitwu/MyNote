import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{html,tsx}'],
  theme: {
    extend: {},
    colors: {
      font20: '20px',
      fontColor: '#1f1f1f'
    }
  },
  plugins: []
} satisfies Config
