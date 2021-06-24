export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'itams',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtclub/feathericons',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
  ],

  // proxy: {
  //   '/laravel': {
  //     target: 'https://laravel-auth.nuxtjs.app',
  //     pathRewrite: { '^/laravel': '/' }
  //   }
  // },

  auth: {
    strategies: {
      'laravelSanctum': {
        provider: 'laravel/sanctum',
        url: 'http://demo.trems.ng/api/v1',
        endpoints: {
          login: {
            url: '/login', method: 'post'
          },
          user: {
            url: '/user', method: 'get'
          },
          logout: {
            url: '/logout', method: 'post'
          }
        }
      },
    }
  },

  router: {
    middleware: ['auth']
  },
  
  

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL: 'http://demo.trems.ng/api/v1',
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {},
}
