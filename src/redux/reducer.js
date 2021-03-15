import * as actions from "./actionTypes";

const locale = "en";

const initialState = { locale };

const initialStateForUser = {
  userData: "",
};

export const userReducer = (state = initialStateForUser, action) => {
  console.log(action.data);
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

export const wishlistReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADDED_TO_WISHLIST:
      return [...state, action.payload.data];
    default:
      return state;
  }
};

export const cartListReducer = (state = [], action) => {
  switch (action.type) {
    case actions.ADDED_TO_CART:
      return [...state, action.payload.data];
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
