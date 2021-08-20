export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Trems',
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
  plugins: [
    // { src: '~/plugins/plugins_vue-chartjs', mode: 'client' }
    // '~/plugins/vuelidate'
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    // '@nuxtjs/eslint-module',
    '@nuxtjs/tailwindcss',
    '@nuxtclub/feathericons',
    '@nuxtjs/moment',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    '@nuxtjs/auth-next',
    '@nuxtjs/toast',
    'nuxt-route-meta',
  ],

  // after i read the nuxt auth doc this is what i find but i don't really understand is
  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    baseURL:
      process.env.NODE_ENV === 'production'
        ? 'https://demo.trems.ng/api/v1'
        : 'http://localhost:8000/api/v1',
    // proxy: true,
      withCredentials: true,
  },
  // proxy: {
  //   '/nuxt': {
  //     target: 'http://localhost:3000/',
  //     pathRewrite: { '^/nuxt': '/' }
  //   }
  // },
  // http://demo.trems.ng
  // http://localhost:8000/api/v1
  // http://trems-api.local/
  auth: {
    strategies: {
      laravelSanctum: {
        provider: 'laravel/sanctum',
        url:
          process.env.NODE_ENV === 'production'
            ? 'https://demo.trems.ng'
            : 'http://localhost:8000',
        endpoints: {
          login: {
            url: '/api/v1/login',
            method: 'post',
          },
          user: {
            url: '/api/v1/user',
            method: 'get',
          },
          logout: {
            url: '/api/v1/logout',
            method: 'post',
          },
        },
      },
    },
  },

  router: {
    middleware: ['auth'],
  },

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    manifest: {
      lang: 'en',
    },
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    babel: {
      plugins: [['@babel/plugin-proposal-private-methods', { loose: true }]],
    },
  },
}
