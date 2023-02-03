export default {
  // Global page headers: https://go.nuxtjs.dev/config-head

  target: 'static',

  image: {

  },

  render: {
    resourceHints: false
  },
  router: {
    prefetchLinks: false
  },
  head: {
    title: 'Justin Shi',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [

      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: "Justin Shi's developer and designer portfolio" },
      { name: 'format-detection', content: 'telephone=no' },
      { hid: 'keywords', name: 'keywords', content: 'justin shi, software engineering, software engineer, computer science, developer, designer, portfolio' },

      {
        hid: 'og:title',
        property: 'og:title',
        content: 'Justin Shi | Home'
      },
      {
        hid: 'og:description',
        property: 'og:description',
        content: 'Justin Shi\'s developer and designer portfolio'
      },
      {
        hid: 'og:type',
        property: 'og:type',
        content: 'website',
      },
      {
        hid: 'og:image',
        property: 'og:image',
        content: 'static/logo.png'
      },
      {
        hid: 'og:url',
        property: 'og:url',
        content: 'https://justinshi.io/'
      },


    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src: '~/plugins/vue-gtag' },
    { src: '~/plugins/vue-analytics' },
    { src: '~/plugins/errors' },
    // { src: '~/plugins/model-viewer', mode: "client" },

  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module', '@nuxtjs/html-validator', '@nuxt/image'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    '@nuxtjs/sitemap',
    '@nuxt/image'
  ],

  sitemap: {
    gzip: true,
    hostname: 'https://justinshi.io'
  },

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/'
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build

  server: {
    host: "0.0.0.0"
  },


  build: {
    extend(config, { isDev, isClient }) {

      config.node = {
        fs: 'empty'
      }

      // ....
    }
  }

}
