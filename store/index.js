export const state = () => ({
  cacheVersion: '',
  games: 'vic',
  menu: {
    main_navi: []
  }
})

export const mutations = {
  setMenu(state, menu) {
    state.menu = menu
  },
  setgames(state, games) {
    state.games = games
  },
  setCacheVersion(state, version) {
    state.cacheVersion = version
  }
}

export const actions = {
  loadMenu({ commit }, context) {
    return this.$storyapi.get(`cdn/stories/${context.games}/menu`, {
      version: context.version
    }).then((res) => {
      commit('setMenu', res.data.story.content)
    })
  },
  loadCacheVersion ({ commit }) {
        return this.$storyapi.get(`cdn/spaces/me`).then((res) => {
          commit('setCacheVersion', res.data.space.version)
        })
      }
}
