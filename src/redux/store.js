import { createStore } from "redux";
import {
  wishlistReducer,
  cartListReducer,
  languageReducer,
  userReducer,
} from "./reducer.js";

export const userStore = createStore(userReducer);

export const wishListStore = createStore(wishlistReducer);

export const cartListStore = createStore(cartListReducer);

export const languageStore = createStore(languageReducer);
