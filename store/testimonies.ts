import { getterTree, mutationTree, actionTree } from 'nuxt-typed-vuex';

export const state = () => ({
    data: {}
})

export const getters = getterTree(state, {})

export const mutations = mutationTree(state, {
  setData(state, data) {
    state.data = data;
  }
})

export const actions = actionTree(
  {state, getters, mutations}, 
  {
    getData({ commit }) {
      return new Promise((resolve, reject) => {
        this.$axios({
          method: 'get',
          url: `/home`
        }).then((response) => {
          commit('setData', response.data.data);
          resolve(response.data)
        }).catch((err) => {
          reject(err)
        });
      })
    }
  }
)