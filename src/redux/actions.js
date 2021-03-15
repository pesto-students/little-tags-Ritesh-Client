import * as actions from "./actionTypes";

// user
export const setUser = data => {
  return {
    type: actions.SET_USER,
    data,
  };
};
// wishlist functions
export const addToWishList = data => {
  return {
    type: actions.ADDED_TO_WISHLIST,
    payload: { data },
  };
};
export const removeFromWishList = id => {
  return {
    type: actions.REMOVE_FROM_WISHLIST,
    payload: { id },
  };
};

// cart functions
export const addToCart = data => {
  return {
    type: actions.ADDED_TO_CART,
    payload: { data },
  };
};

export function removeFromCart(id) {
  return {
    type: actions.REMOVE_FROM_CART,
    payload: { id },
  };
}

export const changeLanguage = payload => {
  return {
    type: actions.CHANGE_LANGUAGE,
    payload,
  };
};
