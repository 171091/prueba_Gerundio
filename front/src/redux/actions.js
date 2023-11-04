import {
  GET_ALL_FRUITS,
  POST_NEW_FRUITS,
  GET_ALL_VEGETABLES,
  POST_NEW_VEGETABLES,
  GET_ALL_LOCATION,
} from "./actions-types";

import { FRUITS, VEGETABLES } from "../redux/actions-types";

import axios from "axios";
import Swal from "sweetalert2";

export const GET_ALL_LOCATION = (PAD) => {
  return async function (dispatch) {
    try {
      let PADLocations;
      switch (PAD) {
        case FRUITS:
          PADLocations = await axios.get("/fruits");
          break;
        case VEGETABLES:
          PADLocations = await axios.get("/vegetables");
          break;
        default:
          return;
      }

      const DataPAD = PADLocations.data;
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const postNewFruits = (payload) => {
  return function (dispatch) {
    try {
      console.log(payload);
      axios
        .post("/fruits", payload)
        .then((data) => {
          Swal.fire("Fruta creada exitosamente");
          return dispatch({
            type: POST_NEW_FRUITS,
            payload: data,
          });
        })
        .catch((error) => {
          Swal.fire(error.response.data.error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
};
export const postNewVegetables = (payload) => {
  return function (dispatch) {
    try {
      console.log(payload);
      axios
        .post("/vegetables", payload)
        .then((data) => {
          Swal.fire("Verdura creada exitosamente");
          return dispatch({
            type: POST_NEW_VEGETABLES,
            payload: data,
          });
        })
        .catch((error) => {
          Swal.fire(error.response.data.error);
        });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const GET_ALL_VEGETABLES = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/vegetables`);
      return dispatch({
        type: GET_ALL_VEGETABLES,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const GET_ALL_FRUITS = () => {
  return async function (dispatch) {
    try {
      const response = await axios.get(`/fruits`);
      return dispatch({
        type: GET_ALL_FRUITS,
        payload: response.data,
      });
    } catch (error) {
      console.log(error.message);
    }
  };
};
