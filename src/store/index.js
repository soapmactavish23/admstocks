import { createStore } from "vuex";
import { store as products } from "./../views/products";

const categories = {
  state: {
    categories: [],
  },
};

const store = createStore({
  modules: {
    categories,
    products,
  },
});

export default store;
