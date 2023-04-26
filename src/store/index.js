import axios from "axios";
import { createStore } from "vuex";

const categories = {
  state: {
    categories: [],
  },
};

const products = {
  state: {
    products: [],
  },
  mutations: {
    getProductsM(state, payload) {
      state.products = payload;
    },
  },
  actions: {
    getProducts({ commit }) {
      axios.get("http://localhost:8080/products").then((res) => {
        commit("getProductsM", res.data);
      });
    },
  },
};

const store = createStore({
  modules: {
    categories,
    products,
  },
});

export default store;

// export default createStore({
//   state: {
//     count: 0,
//     products: [],
//   },
//   getters: {},
//   mutations: {
//     increments(state) {
//       state.count++;
//     },
//     addProducts(state, payload) {
//       state.products.push(payload);
//     },
//   },
//   actions: {
//     addProdutos(context) {
//       context.commit("addProducts");
//     },
//   },
//   modules: {},
// });
