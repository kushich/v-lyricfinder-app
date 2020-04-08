import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tracks: null
  },
  mutations: {
    updateTopTracks(state, tracks) {
      state.tracks = tracks
    }
  },
  actions: {
    async fetchTopTracks({commit}) {
      const res = await fetch(`https://cors-anywhere.herokuapp.com/https://api.musixmatch.com/ws/1.1/chart.tracks.get?chart_name=top&page=1&page_size=10&country=uk&f_has_lyrics=1&apikey=aaf5a324e5fcd74ae4d461d96b64ad74`)
      const tracks = await res.json()
      commit('updateTopTracks', tracks.message.body.track_list)
    },
  },
  getters: {
    topTracks(state) {
      return state.tracks
    }
  },
  modules: {},
})
