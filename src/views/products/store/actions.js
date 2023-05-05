import * as types from "./mutation-types";

import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("http://localhost:8080/products").then((res) => {
    commit(types.GET_PRODUCTS, res.data);
  });""
};

export const addProducts = ({ commit }, add) => {
  axios.post("http://localhost:8080/products", add).then((res) => {
    commit(types.ADD_PRODUCTS, res.data);
  })
}
