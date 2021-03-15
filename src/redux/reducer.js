import * as actions from "./actionTypes";

const locale = "en";

const initialWishlist = [];
const initialCart = [];
const initialState = { locale };
export const wishlistReducer = (state = initialWishlist, action) => {
  switch (action.type) {
    case actions.ADDED_TO_WISHLIST:
      return [...state, action.payload.data];
    case actions.REMOVE_FROM_WISHLIST:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const cartListReducer = (state = initialCart, action) => {
  switch (action.type) {
    case actions.ADDED_TO_CART:
      return [...state, action.payload.data];
    case actions.REMOVE_FROM_CART:
      return state.filter(item => item.id !== action.payload.id);
    default:
      return state;
  }
};

export const languageReducer = (state = initialState, action) => {
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
