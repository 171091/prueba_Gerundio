import {
  ADD_FRUITS,
  ADD_VEGETABLES,
  PRICE,
  ALPHABETIC_ORDER,
  GET_ALL_FRUITS,
  GET_ALL_VEGETABLES,
  SET_LOADING,
  CLEAN_STATES,
  GET_FRUITS,
  GET_VEGETABLES,
} from "./actions-types";
import axios from "axios";

export const setLoading = (isLoading) => {
  return {
    type: SET_LOADING,
    payload: isLoading,
  };
};
export const addFruits = (fruits) => {
  return async function (dispatch) {
    try {
      console.log(fruits);
      const response = await axios.post("http://localhost:27017", fruits);
      console.log(response);
      alert("Fruits created successfully!");
      return dispatch({ type: ADD_FRUITS, payload: response.data });
    } catch (error) {
      console.log(error.message);
      alert("No se pudo crear la fruta");
    }
  };
};
export const addVegetables = (vegetables) => {
  return async function (dispatch) {
    try {
      console.log(vegetables);
      const response = await axios.post("http://localhost:27017", vegetables);
      console.log(response);
      alert("Vegetables created successfully!");
      return dispatch({ type: ADD_VEGETABLES, payload: response.data });
    } catch (error) {
      console.log(error.message);
      alert("No se pudo crear la verdura");
    }
  };
};

export const getAllFruits = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));
      console.log("ejecutando action");
      const response = await axios.get("http://localhost:27017/fruits");
      console.log("ejecutando action 2");
      dispatch({ type: GET_ALL_FRUITS, payload: response.data });
      dispatch(setLoading(false));
    } catch (error) {
      alert("No se encontraron las frutas");
    }
  };
};

export const getAllVegetables = () => {
  return async function (dispatch) {
    try {
      dispatch(setLoading(true));
      console.log("ejecutando action");
      const response = await axios.get("http://localhost:27017/vegetables");
      console.log("ejecutando action 2");
      dispatch({ type: GET_ALL_VEGETABLES, payload: response.data });
      dispatch(setLoading(false));
    } catch (error) {
      alert("No se encontraron las verduras");
    }
  };
};

export const getFruits = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:27017/fruits");
      dispatch({ type: GET_FRUITS, payload: response.data });
    } catch (error) {
      alert("Mi base de datos no tiene las frutas solicitadas");
    }
  };
};

export const getVegetables = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get("http://localhost:27017/vegetables");
      dispatch({ type: GET_VEGETABLES, payload: response.data });
    } catch (error) {
      alert("Mi base de datos no tiene las verduras solicitadas");
    }
  };
};

export const orderAlphabetic = (option) => {
  return {
    type: ALPHABETIC_ORDER,
    payload: option,
  };
};

export const price = (score) => {
  return {
    type: PRICE,
    payload: score,
  };
};
export const deleteFilters = () => {
  return {
    type: "DELETE_FILTERS",
  };
};
export const cleanStates = () => {
  return {
    type: CLEAN_STATES,
  };
};
