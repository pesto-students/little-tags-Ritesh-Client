import { combineReducers } from "redux";
import * as actions from "./actionTypes";

const locale = "en";

const initialWishlist = { items: [] };
const initialCart = { items: [] };
const initialState = { locale };
const initialStateForUser = {
  userData: "",
};
const removeItem = (array, action) =>
  array.filter(item => item.id !== action.payload.id);

const wishlistReducer = (state = initialWishlist, action) => {
  console.log(action);
  switch (action.type) {
    case actions.ADDED_TO_WISHLIST:
      return { ...state, items: [...state.items, action.payload.data] };
    case actions.REMOVE_FROM_WISHLIST: {
      return {
        ...state,
        items: removeItem(state.items, action),
      };
    }
    default:
      return state;
  }
};

const cartListReducer = (state = initialCart, action) => {
  console.log(action);
  switch (action.type) {
    case actions.ADDED_TO_CART:
      return { ...state, items: [...state.items, action.payload.data] };
    case actions.REMOVE_FROM_CART: {
      return {
        ...state,
        items: removeItem(state.items, action),
      };
    }
    default:
      return state;
  }
};

const languageReducer = (state = initialState, action) => {
  switch (action.type) {
    case actions.CHANGE_LANGUAGE:
      return {
        ...state,
        locale: action.payload.locale,
      };
    default:
      return state;
  }
};

const userReducer = (state = initialStateForUser, action) => {
  switch (action.type) {
    case actions.SET_USER:
      return {
        ...state,
        userData: action.data,
      };
    default:
      return { ...state };
  }
};

export const rootReducer = combineReducers({
  userReducer,
  wishlistReducer,
  cartListReducer,
  languageReducer,
});
