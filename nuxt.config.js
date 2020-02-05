// import VuetifyLoaderPlugin from 'vuetify-loader/lib/plugin'
import colors from 'vuetify/es5/util/colors'

// import vuetify from '@/plugins/vuetify'
// import vuetify from './plugins/vuetify'

export default {
  mode: 'universal',

  /*
   ** Headers of the page
   */
  head: {
    title: `Opeyemi David - Full Stack Developer's Portfolio`,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      {
        hid: 'description',
        name: 'description',
        content: process.env.npm_package_description || ''
      },
      {
        hid: 'msapplication-TileColor',
        name: 'msapplication-TileColor',
        content: '#da532c'
      },
      {
        hid: 'msapplication-config',
        name: 'msapplication-config',
        content: '/img/favicon/browserconfig.xml'
      },
      {
        hid: 'theme-color',
        name: 'theme-color',
        content: '#35237D'
      },
      {
        hid: 'og-title',
        name: 'og-title',
        content: 'Opeyemi David'
      },
      {
        hid: 'og-type',
        name: 'og-type',
        content: 'website'
      },
      {
        hid: 'og-image',
        name: 'og-image',
        content: '/img/opeyemi-david/opeyemi-david-face.jpg'
      }
    ],

    link: [
      {
        rel: 'apple-touch-icon',
        sizes: '180x180',
        href: '/img/favicon/apple-touch-icon.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '32x32',
        href: '/img/favicon/favicon-32x32.png'
      },
      {
        rel: 'icon',
        type: 'image/png',
        sizes: '16x16',
        href: '/img/favicon/favicon-16x16.png'
      },
      {
        rel: 'manifest',
        href: '/img/favicon/site.webmanifest'
      },
      {
        rel: 'mask-icon',
        href: '/img/favicon/safari-pinned-tab.svg',
        color: '#4330da'
      },
      {
        rel: 'shortcut icon',
        href: '/img/favicon/favicon.ico'
      }
    ]
  },

  /*
   ** Customize the progress-bar color
   */
  loading: { color: '#F1AF42' },

  /*
   ** Global CSS
   */
  css: ['~/assets/styles/main.scss'],

  /*
   ** Plugins to load before mounting the App
   */
  plugins: ['@/plugins/v-observe-visibility.js'],

  /*
   ** Nuxt.js modules
   */
  modules: [
    // Doc: https://axios.nuxtjs.org/usage
    '@nuxtjs/axios',
    'nuxt-webfontloader'
  ],

  buildModules: [
    '@nuxtjs/eslint-module',
    '@nuxtjs/vuetify',
    [
      '@nuxtjs/google-analytics',
      {
        id: 'UA-149018249-1'
      }
    ],

    /* make sure @nuxtjs/sitemap module is always at the bottom of the modules */
    '@nuxtjs/sitemap'
  ],

  /*
   ** Axios module configuration
   */
  axios: {
    // See https://github.com/nuxt-community/axios-module#options
  },

  /*
   ** vuetify module configuration
   ** https://github.com/nuxt-community/vuetify-module
   */
  vuetify: {
    theme: {
      dark: true,

      themes: {
        dark: {
          primary: '#35237D',
          accent: '#4330DA',
          secondary: '#520D93',
          orange: colors.orange,
          red: '#e91e63',
          info: colors.lightBlue.darken1,
          warning: colors.amber.base,
          error: colors.deepOrange.accent4,
          success: colors.green.accent3
        }
      },

      options: {
        customProperties: true
      }
    },

    customVariables: ['~/assets/styles/variables.scss'],

    defaultAssets: false,

    treeShake: true,

    icons: {
      iconfont: 'mdiSvg'
    }
  },

  webfontloader: {
    google: {
      families: ['Muli:400, 500', 'Comfortaa:400, 700'] // Loads Lato font with weights 400 and 700
    }
  },

  modern: 'client',

  sitemap: {
    hostname: 'https://opeyemidavid.netlify.com',
    gzip: true
  },

  /*
   ** Build configuration
   */
  build: {
    loaders: {
      scss: {
        prependData: `
          @import "~/assets/styles/variables.scss";
        `
      }
    },
    /*
     ** You can extend webpack config here
     */
    extend(config, ctx) {}
  }
}
