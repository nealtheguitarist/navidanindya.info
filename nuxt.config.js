export default {
  // Target: https://go.nuxtjs.dev/config-target
  target: 'static',

  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Navid Anindya',
    titleTemplate: '%s | I make and explore things.',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Personal site for Navid Anindya. I make and explore things. I also write about things sometimes.' },
      { hid: 'og:image', property: 'og:image', content: '/og.png' },
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
      { hid: "canonical", rel: "canonical", href: "https://navidanindya.info", },
    ]
  },

  // Global CSS: https://go.nuxtjs.dev/config-css
  css: [
  ],

  // Plugins to run before rendering page: https://go.nuxtjs.dev/config-plugins
  plugins: [
  ],

  // Auto import components: https://go.nuxtjs.dev/config-components
  components: true,

  // Modules for dev and build (recommended): https://go.nuxtjs.dev/config-modules
  buildModules: [
    // https://go.nuxtjs.dev/eslint
    '@nuxtjs/eslint-module',
    // https://go.nuxtjs.dev/tailwindcss
    '@nuxtjs/tailwindcss',
    // https://google-fonts.nuxtjs.org/
    '@nuxtjs/google-fonts'
  ],

  // Modules: https://go.nuxtjs.dev/config-modules
  modules: [
    // https://go.nuxtjs.dev/axios
    '@nuxtjs/axios',
    // https://go.nuxtjs.dev/pwa
    '@nuxtjs/pwa',
    // https://go.nuxtjs.dev/content
    '@nuxt/content',
    // https://firebase.nuxtjs.org/
    // '@nuxtjs/firebase'
  ],

  // Axios module configuration: https://go.nuxtjs.dev/config-axios
  axios: {},

  // PWA module configuration: https://go.nuxtjs.dev/pwa
  pwa: {
    icon: {
      source: './static/icon.png'
    },
    manifest: {
      background_color: '#111827',
      description: 'Personal site for Navid Anindya. I make and explore things. I also write about things sometimes.',
      lang: 'en'
    },
    meta: {
      description: 'Personal site for Navid Anindya. I make and explore things. I also write about things sometimes.',
    }
  },

  // Content module configuration: https://go.nuxtjs.dev/config-content
  content: {
    markdown: {
      prism: {
        theme: 'prism-themes/themes/prism-nord.css'
      }
    }
  },

  // Google Web fonts
  googleFonts: {
    display: 'auto',
    families: {
      'Roboto+Slab': [900],
      'Roboto+Mono': {
        wght: [400],
        ital: [600]
      },
    }
  },

  // Firebase Cloud Firestore
  // firebase: {
  //   config: {
  //     apiKey: process.env.FIREBASE_API_KEY,
  //     authDomain: process.env.FIREBASE_AUTH_DOMAIN,
  //     projectId: process.env.FIREBASE_PROJECT_ID,
  //     storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
  //     messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
  //     appId: process.env.FIREBASE_APP_ID,
  //     measurementId: process.env.FIREBASE_MEASUREMENT_ID
  //   },
  //   lazy: true,
  //   services: {
  //     firestore: {
  //       enablePersistence: {
  //         synchronizeTabs: true
  //       }
  //     }
  //   },
  //   terminateDatabasesAfterGenerate: true
  // },

  // Build Configuration: https://go.nuxtjs.dev/config-build
  build: {
  }
}
