import * as types from "./mutation-types";

import axios from "axios";

export const getProducts = ({ commit }) => {
  axios.get("http://localhost:8080/products").then((res) => {
    commit(types.GET_PRODUCTS, res.data);
  });
  ("");
};

export const addProducts = ({ commit }, add) => {
  axios.post("http://localhost:8080/products", add).then((res) => {
    commit(types.ADD_PRODUCTS, res.data);
  });
};

export const findProductById = ({ commit }, id) => {
  axios.get(`http://localhost:8080/products/${id}`).then((res) => {
    commit(types.FIND_PRODUCTS, res.data);
  });
};

export const updateProducts = ({ commit }, add) => {
  axios.put(`http://localhost:8080/products/${add.id}`, add).then((res) => {
    commit(types.UPDATE_PRODUCTS, res.data);
  });
};

export const deleteProducts = ({ commit }, id) => {
  axios.delete(`http://localhost:8080/products/${id}`).then((res) => {
    commit(types.DELETE_PRODUCTS, res);
  });
};
