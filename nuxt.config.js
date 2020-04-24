export default {
  mode: 'universal',
  /*
** Headers of the page
  */
  head: {
    title: process.env.npm_package_name || '',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
    ],
    link: [
      { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
    ]
  },
  /*
  ** Customize the progress-bar color
  */

  loading: { color: '#fff' },

  router: {
    middleware: 'gamesDetection',
    linkPrefetchedClass: 'link',
  },
  /*
  ** Global CSS
  */
  css: [
    '@/assets/scss/styles.scss',
    '@/assets/scss/bootstrap/bootstrap.scss',
  ],

  /*
  ** Plugins to load before mounting the App
  */
  plugins: [
    '~/plugins/components.js',
    '~/plugins/rich-text-renderer.js',
    { mode: 'client', src: '~plugins/vue-router-back-button.js' }
    ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
  ],

  /*
  ** Nuxt.js modules
  */
  modules: [
    // Doc: https://bootstrap-vue.js.org
    'bootstrap-vue/nuxt',
    ['storyblok-nuxt', {
      accessToken: process.env.NODE_ENV == "production" ? "ZkIEqD1i8FVF628krYkPhAtt" : "nroV5bOcaS2CHUosOINLJgtt",
      cacheProvider: 'memory'
    }],
    // Doc: https://github.com/nuxt-community/style-resources-module
    '@nuxtjs/axios',
    // Doc: https://github.com/nuxt-community/dotenv-module
    '@nuxtjs/dotenv',
    // Doc: https://github.com/FortAwesome/vue-fontawesome
    '@nuxtjs/apollo',
    [
      'nuxt-fontawesome', {
        component: 'fa',
        imports: [
         {
           set: '@fortawesome/free-solid-svg-icons',
           icons: ['faAngleRight','faSearch']
         },
         {
            set: '@fortawesome/free-solid-svg-icons',
            icons: ['fas'],
          },
         {
           set:'@fortawesome/free-brands-svg-icons',
           icons: ['fab']
         }
       ]
      }
    ]
  ],
  apollo: {
        clientConfigs: {
          default: {
            httpEndpoint: 'http://gapi-browser.storyblok.com/?token=ZkIEqD1i8FVF628krYkPhAtt&version=published'
          }
        }
      },

   styleResources: {
    scss: [

      ]
  },
  /*
  ** Build configuration
  */
  build: {
    /*
    ** You can extend webpack config here
    */
    cssSourceMap: true,
    extractCSS: true,
    extend (config, ctx) {
    },
    splitChunks: {
      chunks: 'all',
      automaticNameDelimiter: '.',
      name: undefined,
      cacheGroups: {}
    }
  }
}
