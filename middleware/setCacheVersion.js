// export default function ({ app, isServer, route, store, isDev }) {
//   let version = route.query._storyblok || isDev ? 'draft' : 'published'

//   if (isServer) {
//     store.commit('setCacheVersion', app.$storyapi.cacheVersion)
//   }

  // if (!store.state.menu._uid || games !== store.state.games) {
  //   store.commit('setgames', games)

  //   return store.dispatch('loadMenu', {version: version, games: games})
  // }
// }
import Vue from 'vue'

export default function ({ store }) {
  if (!store.state.cacheVersion) {
    store.dispatch('loadCacheVersion')
  }
}
