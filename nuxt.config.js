const axios = require('axios');

export default {
  mode: 'spa',
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
    middleware: 'setCacheVersion',
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
    '~/plugins/vuelidate',
    '~/plugins/components.js',
    '~/plugins/helper.js',
    '~/plugins/rich-text-renderer.js',
    '~/plugins/google-maps',
    { mode: 'client', src: '~plugins/vue-router-back-button.js' },
    ],
  /*
  ** Nuxt.js dev-modules
  */
  buildModules: [
    '@nuxtjs/global-components',
    ['@nuxtjs/global-components', { /* module options */ }]
  ],

  globalComponents: {
    /* module options */
  },

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
    '@nuxtjs/global-components',
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
  // generate: {
  //    routes: function (callback) {
  //     const token = `ZkIEqD1i8FVF628krYkPhAtt`
  //     const version = 'published'
  //     let cache_version = 0

  //     let toIgnore = ['home', 'en/settings']

  //      // other routes that are not in Storyblok with their slug.
  //     let routes = ['/'] // adds / directly

  //      // Load space and receive latest cache version key to improve performance
  //     axios.get(`https://api.storyblok.com/v1/cdn/spaces/me?token=${token}`).then((space_res) => {

  //        // timestamp of latest publish
  //       cache_version = space_res.data.space.version
  //       console.log("content---------------", space_res)

  //        // Call for all Links using the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
  //       axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&cv=${cache_version}&per_page=100`).then((res) => {
  //         Object.keys(res.data.links).forEach((key) => {
  //           if (!toIgnore.includes(res.data.links[key].slug)) {
  //             routes.push('/' + res.data.links[key].slug)
  //           }
  //         })
  //         callback(null, routes)
  //       })
  //     }) 
  //   }
  //   // exclude: [
  //   //   /^(?=.*\bignore\b).*$/
  //   // ],
  //   // // subFolders: false, 
    
  //   // routes: function () {
  //   //   return axios.get("https://api.storyblok.com/v1/cdn/stories?version=published&token=ZkIEqD1i8FVF628krYkPhAtt&starts_with=home&cv=" +
  //   //   Math.floor(Date.now() / 1e3)
  //   //   )
  //   //   .then ( res=> {
  //   //     const pages = res.data.stories.map(pg => pg.full_slug)
  //   //       return [
  //   //         '/',
  //   //         ...pages
  //   //       ]
  //   //     }
  //   //   )
  //   // },
  //   },   
   
    // routes: function (callback) {
    //   const token = `ZkIEqD1i8FVF628krYkPhAtt`
    //   const per_page = 100
    //   const version = `draft`
      
    //   let page = 1
    //   let routes = []

    //   // Call first Page of the Links API: https://www.storyblok.com/docs/Delivery-Api/Links
    //   axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&per_page=${per_page}&page=${page}`).then((res) => {
    //     Object.keys(res.data.links).forEach((key) => {
    //       if (res.data.links[key].slug != 'home') {
    //         console.log("res", res)
    //         routes.push('/' + res.data.links[key].slug)
    //       }
    //     })

    //     // Check if there are more pages available otherwise execute callback with current routes.
    //     const total = res.headers.total
    //     const maxPage = Math.ceil(total / per_page)
    //     if(maxPage <= 1) {
    //       callback(null, routes)
    //     }

    //     // Since we know the total we now can pregenerate all requests we need to get all Links
    //     let contentRequests = [] 
    //     for (let page = 2; page <= maxPage; page++) {
    //       contentRequests.push(axios.get(`https://api.storyblok.com/v1/cdn/links?token=${token}&version=${version}&per_page=${per_page}&page=${page}`))
    //     }

    //     // Axios allows us to execute all requests using axios.spread we will than generate our routes and execute the callback
    //     axios.all(contentRequests).then(axios.spread((...requests) => {
    //       requests.forEach((request) => {
    //         Object.keys(request.data.links).forEach((key) => {
    //           if (request.data.links[key].slug != 'home') {
    //             routes.push('/' + request.data.links[key].slug)
    //           }
    //         })
    //       })
        
    //       callback(null, routes)
    //     })).catch(callback)
    //   })
    // }
  // },
  /*
  ** Build configuration
  */
 build: {
    /*
    ** You can extend webpack config here
    */
  //  performance: {
  //   maxEntrypointSize: 512000,
  //   maxAssetSize: 512000
  // },
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
