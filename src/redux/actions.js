import * as actions from "./actionTypes";

// wishlist functions
export const addToWishList = data => {
  return {
    type: actions.ADDED_TO_WISHLIST,
    payload: { data },
  };
};

// cart functions
export const addToCart = data => {
  return {
    type: actions.ADDED_TO_CART,
    payload: { data },
  };
};

export const changeLanguage = payload => {
  return {
    type: actions.CHANGE_LANGUAGE,
    payload,
  };
};
