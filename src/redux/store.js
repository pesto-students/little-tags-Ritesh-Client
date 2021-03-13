import { createStore } from "redux";
import { wishlistReducer, languageReducer } from "./reducer.js";

export const wishlistStore = createStore(wishlistReducer);

export const languageStore = createStore(languageReducer);
