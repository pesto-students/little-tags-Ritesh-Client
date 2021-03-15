import { createStore } from "redux";
import {
  wishlistReducer,
  cartListReducer,
  languageReducer,
} from "./reducer.js";

export const wishListStore = createStore(wishlistReducer);

export const cartListStore = createStore(cartListReducer);

export const languageStore = createStore(languageReducer);
