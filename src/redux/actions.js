import * as actions from "./actionTypes";

export const addToWishList = (data) => {
  return {
    type: actions.ADDED_TO_WISHLIST,
    payload: { data },
  };
};

export const changeLanguage = (payload) => {
  return {
    type: actions.CHANGE_LANGUAGE,
    payload,
  };
};
