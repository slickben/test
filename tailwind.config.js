module.exports = {
  purge: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fontFamily: {
      'sans': ['"Poppins"', 'sans-serif;',],
    },
    screens: {
      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1620px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      zIndex: {
        '-10': '-10',
        '-9': '-9',
      },
      fontSize: {
        thin: '0.5rem',
      },
      height: {
        'lg-screen': '1280px',
        '98': '24.5rem',
        '75': '18.75rem',
        '100': '25rem',
        '50':'12.5rem',
        '90-vh':'90vh',
        '70-vh':'70vh',
       },
       width: {
        'lg-screen': '1280px',
        '98': '24.5rem',
        '100': '25rem',
        '50':'12.5rem',
      },
      maxWidth: {
        '50':'12.5rem',
        '98': '24.5rem',
        '100': '25rem',
        '249': '62.25rem',
        'lg-screen': '1280px',
       },
       minWidth: {
        '105': '26.25rem',
        '150': '37.5rem',
        '10': '2.5rem',
        '28': '7rem',
       },
       minHeight: {
        '105': '26.25rem',
        '150': '37.5rem',
        '64': '16rem',
        '10': '2.5rem',
        '28': '7rem',
       },
       maxHeight: {
        '50':'12.5rem',
        '98': '24.5rem',
        '75': '18.75rem',
        '100': '25rem',
        'lg-screen': '1280px',
       },
      colors: {
        primary: {
          '100': '#E6ECFE',
          '200': '#CED9FD',
          '300': '#9CB4FC',
          '400': '#6B8EFA',
          '500': '#3968F9',
          '600': '#0842F7',
          '700': '#0635C6',
          '800': '#052894',
          '900': '#031A61',
        },
        tertiary: {
          '100': '#F0F0F0',
          '200': '#D6D6D6',
          '300': '#BDBDBD',
          '400': '#A3A3A3',
          '500': '#8A8A8A',
          '600': '#707070',
          '700': '#575757',
          '800': '#3D3D3D',
          '900': '#242424',
        },
        action: {
          success: '#116E02',
          'success-light': '#DCFED7',
          warning: '#D6B300',
          'warning-light': '#FFF8D6',
          danger: '#9E0505',
          'danger-light': '#FED7D7',
        },
        dashboard: {
          icons: {
            one: '#E60404',
            two: '#22AA58',
            three: '#D1A302',
            four: '#30B800',
            five: '#00B5AA',
            six: '#7BAB14',
            seven: '#A90C86',
            eight: '#428B9B',
            nine: '#B65903',
            ten: '#E40C74',
          },
          
        },
      }
    },
  },
  variants: {
    extend: {
      margin: ['hover', 'focus'],
      borderWidth: ['hover', 'focus'],
      flex: ['hover', 'focus', 'group-hover'],
      scale: ['active', 'group-hover'],
    },
  },
  plugins: [
    require('tailwind-scrollbar'),
  ],
}
