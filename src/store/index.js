import { createStore } from 'vuex'

export default createStore({
  state: {
    vez: "X"
  },
  mutations: {
    vezSet(state, vezNova) {
      state.vez = vezNova
    }
  }
})
