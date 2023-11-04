import {
  GET_ALL_FRUITS,
  GET_FRUITS,
  POST_NEW_FRUITS,
  GET_ALL_VEGETABLES,
  GET_VEGETABLES,
  POST_NEW_VEGETABLES,
  GET_ALL_LOCATION,
} from "./actions-types";

const initialState = {
  allFruits: [],
  allVegetables: [],
  allLocations: [],
  fruits: [],
  vegetables: [],
  postFruits: [],
  postVegetables: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ALL_FRUITS:
      return {
        ...state,
        allFruits: action.payload,
      };
    case GET_ALL_VEGETABLES:
      return {
        ...state,
        allVegetables,
      };
    case GET_ALL_LOCATION:
      return {
        ...state,
        allLocations: action.payload,
      };
    case GET_FRUITS:
      return {
        ...state,
        fruits: action.payload,
      };
    case GET_VEGETABLES:
      return {
        ...state,
        vegetables: action.payload,
      };
    case POST_NEW_FRUITS:
      return {
        ...state,
        postFruits: action.payload,
      };
    case POST_NEW_VEGETABLES:
      return {
        ...state,
        postVegetables: action.payload,
      };
  }
};

export default reducer;
