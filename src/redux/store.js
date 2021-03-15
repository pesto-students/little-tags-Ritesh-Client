import { createStore, applyMiddleware } from "redux";
import { rootReducer } from "../redux/reducer";
import thunk from "redux-thunk";

export const store = createStore(rootReducer, applyMiddleware(thunk));
