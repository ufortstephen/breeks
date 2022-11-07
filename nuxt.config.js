export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'breeks',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
      
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { rel: "stylesheet", href: "https://unpkg.com/flowbite@1.4.5/dist/flowbite.min.css" },
      { rel: "stylesheet", href:"https://fonts.googleapis.com/css2?family=Familjen+Grotesk:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,700&display=swap" }
    ],
    script: [
      { src: 'https://unpkg.com/flowbite@1.4.5/dist/flowbite.js' },
      { src: 'https://cdn.jsdelivr.net/npm/apexcharts' }
  ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: ['~/assets/css/styles.css'
  ],
  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
    { src : '~/plugins/vue-apexchart.js', ssr : false }
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxt/postcss8'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/bootstrap
    'bootstrap-vue/nuxt',
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {
    // Workaround to avoid enforcing hard-coded localhost:3000: https://github.com/nuxt-community/axios-module/issues/308
    baseURL: '/',
  },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
    vendor : ['vue-apexchart'],
    postcss: {
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  }
}
