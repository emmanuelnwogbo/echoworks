export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Echo',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      //{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ],
    script: [
      {
        src: "/main.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TweenMax.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/2.0.2/TimelineMax.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/ScrollMagic.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/ScrollMagic/2.0.6/plugins/animation.gsap.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/gsap/3.9.1/gsap.min.js",
      },
      {
        src: "https://cdnjs.cloudflare.com/ajax/libs/three.js/0.148.0/three.min.js",
      },
      {
        src: "/hover-effect-umd.js",
      },
      {
        src: 'https://cdnjs.cloudflare.com/ajax/libs/jquery/3.6.3/jquery.min.js'
      },
      {
        src: 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/16327/ScrollTrigger.min.js'
      }
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
    '~/assets/scss/main.scss'
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    '@nuxtjs/style-resources',
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [],
  styleResources: {
    scss: [
      '~/assets/scss/variables.scss',
      '~/assets/scss/mixins/link.scss',
      '~/assets/scss/animations.scss',
    ],
    hoistUseStatements: true
  },
  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}