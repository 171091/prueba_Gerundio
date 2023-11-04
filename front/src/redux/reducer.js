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

const initialState = {
  myFruits: [],
  myVegetables: [],
  loading: false,
  detail: {},
  fruits: [],
  vegetables: [],
  allFruits: [],
  allVegetables: [],
};
const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SET_LOADING:
      return {
        ...state,
        loading: payload,
      };
    case ADD_FRUITS:
      return {
        ...state,
        myFruits: [...state.myFruits, payload],
        allFruits: [...state.allFruits, payload],
      };
    case ADD_VEGETABLES:
      return {
        ...state,
        myVegetables: [...state.myVegetables, payload],
        allVegetables: [...state.allVegetables, payload],
      };
    case GET_ALL_FRUITS:
      return {
        ...state,
        myFruits: payload,
        allFruits: payload,
      };
    case GET_ALL_VEGETABLES:
      return {
        ...state,
        myVegetables: payload,
        allVegetables: payload,
      };
    case GET_FRUITS:
      return {
        ...state,
        fruits: payload,
      };
    case GET_VEGETABLES:
      return {
        ...state,
        vegetables: payload,
      };
    case ALPHABETIC_ORDER:
      return {
        ...state,
        myFruits:
          payload === "A-Z"
            ? state.myFruits.sort((a, b) => a.title.localeCompare(b.title))
            : state.myFruits.sort((a, b) => b.title.localeCompare(a.title)),
        myVegetables:
          payload === "A-Z"
            ? state.myVegetables.sort((a, b) => a.title.localeCompare(b.title))
            : state.myVegetables.sort((a, b) => b.title.localeCompare(a.title)),
      };
    case PRICE:
      return {
        ...state,
        myFruits:
          payload === "Ascendente"
            ? state.myFruits.sort((a, b) => (a.price < b.price ? -1 : 1))
            : state.myFruits.sort((a, b) => (a.price > b.price ? -1 : 1)),
        myVegetables:
          payload === "Ascendente"
            ? state.myVegetables.sort((a, b) => (a.price < b.price ? -1 : 1))
            : state.myFruits.sort((a, b) => (a.price > b.price ? -1 : 1)),
      };

    case CLEAN_STATES: //Limpia el estado detail restableciéndolo a un objeto vacío
      return {
        ...state,
        detail: {},
      };
    default:
      return { ...state };
  }
};

export default reducer;
