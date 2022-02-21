const path = require('path')
const defaultTheme = require('tailwindcss/defaultTheme')
const fromRoot = p => path.join(__dirname, p)

module.exports = {
  // the NODE_ENV thing is for https://github.com/Acidic9/prettier-plugin-tailwind/issues/29
  // mode: process.env.NODE_ENV ? 'jit' : undefined,
  mode: 'jit',
  darkMode: 'class',
  theme: {
    screens: {
      sm: '400px',
      md: '640px',
      lg: '1024px',
      xl: '1500px', // this is the "design resolution"
    },

    extend: {
      colors: {
        blue: {
          DEFAULT: 'var(--color-blue-500)',
          hover: '#0044CC',
          active: 'var(--color-team-blue)',
        },
        gray: {
          100: 'var(--color-gray-100)',
          200: 'var(--color-gray-200)',
          300: 'var(--color-gray-300)',
          400: 'var(--color-gray-400)',
          500: 'var(--color-gray-500)',
          600: 'var(--color-gray-600)',
          700: 'var(--color-gray-700)',
          800: 'var(--color-gray-800)',
          900: 'var(--color-gray-900)',
        },
        team: {
          unknown: 'var(--color-team-unknown)',
          current: 'var(--color-team-current)',
          yellow: 'var(--color-team-yellow)',
          blue: 'var(--color-team-blue)',
          red: 'var(--color-team-red)',
        },
      },
      zIndex: {
        '-10': '-10',
      },
      fontFamily: {
        // sans: ['Matter', ...defaultTheme.fontFamily.sans],
        sans: ['Playfair Display', ...defaultTheme.fontFamily.sans],
        rowdies: ['Rowdies', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xl: '1.375rem', // 22px
        '2xl': '1.5625rem', // 25px
        '3xl': '1.875rem', // 30px
        '4xl': '2.5rem', // 40px
        '5xl': '3.125rem', // 50px
        '6xl': '3.75rem', // 60px
        '7xl': '4.375rem', // 70px
      },
      gridTemplateRows: {
        'max-content': 'max-content',
      },
      spacing: {
        '5vw': '5vw', // pull featured sections and navbar in the margin
        '8vw': '8vw', // positions hero img inside the margin
        '10vw': '10vw', // page margin
      },
      height: {
        hero: 'min(60rem, calc(100vh - 10rem))', // screen - navbar height (lg: only)
      },
      maxWidth: {
        '8xl': '96rem',
      },
      maxHeight: {
        '50vh': '50vh', // max height for medium size hero images
        '75vh': '75vh', // max height for giant size hero images
      },
      rotate: {
        '-135': '-135deg',
        135: '135deg',
      },
    },
  },
  content: [fromRoot('./app/**/*.+(js|ts|tsx|mdx|md)')],
  plugins: [
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('@tailwindcss/line-clamp'),
  ],
}
