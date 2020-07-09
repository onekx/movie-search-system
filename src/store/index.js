import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

const store = new Vuex.Store({
    state: {
        tag: '热门',
        movies: []
    },
    mutations: {
        updateTag(state, payload) {
            state.tag = payload.tag
        },
        setMovies(state, payload) {
            state.movies = payload
        }
    },
    actions: {
        getMovies({ commit }) {
            axios.get(`/api/search_subjects?tag=${this.state.tag}`)
                .then(res => commit('setMovies', res.data.subjects))
                .catch(err => console.log(err))
        }
    }
})

export default store
