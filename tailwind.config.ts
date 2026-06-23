import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'navy-deep': '#0D2342',
        'navy-mid': '#1b3659',
        'blue-vibrant': '#2563EB',
        'blue-neon': '#60A5FA',
        'graphite': '#1a1b1c',
        'white-off': '#f5faff',
        'yellow-neon': '#FFD700',
        'orange-accent': '#FF6B35',
        'red-diag': '#FF3333',
        'red-manual': '#D92B2B',
        'green-valid': '#4CAF50',
      },
      fontFamily: {
        bebas: ['var(--font-bebas)', 'sans-serif'],
        parisienne: ['var(--font-parisienne)', 'cursive'],
        poppins: ['var(--font-poppins)', 'sans-serif'],
      },
      letterSpacing: {
        bebas: '0.15em',
        'bebas-wide': '0.25em',
      },
      backgroundImage: {
        'tech-grid': `repeating-linear-gradient(
          0deg,
          transparent,
          transparent 59px,
          rgba(96, 165, 250, 0.07) 59px,
          rgba(96, 165, 250, 0.07) 60px
        ),
        repeating-linear-gradient(
          90deg,
          transparent,
          transparent 59px,
          rgba(96, 165, 250, 0.07) 59px,
          rgba(96, 165, 250, 0.07) 60px
        )`,
      },
    },
  },
  plugins: [],
}

export default config
