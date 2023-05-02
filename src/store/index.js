import { createStore } from "vuex";
import { store as products } from "../views/products";
import { store as categories } from "../views/categories";

const store = createStore({
  modules: {
    categories,
    products,
  },
});

export default store;
