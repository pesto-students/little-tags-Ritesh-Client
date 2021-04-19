import { combineReducers } from "redux";
import * as actions from "./actionTypes";
const locale = "en";
const initialWishlist = { items: [] };
const initialCart = {
  items: localStorage.getItem("cartItem")
    ? JSON.parse(localStorage.getItem("cartItem"))
    : [],
};
const initialState = { locale };
const initialStateForUser = {
  userData: {},
};
const removeItem = (array, action) =>
  array.filter(item => item._id !== action.payload.id);

const wishlistReducer = (state = initialWishlist, action) => {
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
  switch (action.type) {
    case actions.ADDED_TO_CART: {
      const data = { ...state, items: [...state.items, action.payload.data] };
      // console.log(data);
      localStorage.setItem("cartItem", JSON.stringify(data.items));
      return data;
    }
    case actions.REMOVE_FROM_CART: {
      const data = {
        ...state,
        items: removeItem(state.items, action),
      };
      localStorage.setItem("cartItem", JSON.stringify(data.items));
      return data;
    }
    case actions.REMOVE_All_FROM_CART: {
      localStorage.setItem("cartItem", []);
      return initialCart;
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
    case actions.ADD_ADDRESS: {
      if (state.userData.address) {
        state.userData.address.push(action.data);
      } else {
        state.userData.address = [action.data];
      }
      return state;
    }
    case actions.REMOVE_ADDRESS: {
      const temp = state.userData.address.filter(u => {
        return u.id !== action.id;
      });
      state.userData.address = temp;
      return state;
    }
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
