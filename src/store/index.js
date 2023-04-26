import { createStore } from "vuex";

export default createStore({
  state: {
    count: 0,
    products: [],
  },
  getters: {},
  mutations: {
    increments(state) {
      state.count++;
    },
    addProducts(state, payload) {
      state.products.push(payload);
    },
  },
  actions: {
    addProdutos(context) {
      context.commit("addProducts");
    },
  },
  modules: {},
});
