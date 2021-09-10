import { combineReducers } from "redux";
import { appReducer } from "./appReducer";
import { filmsReducer } from "./filmsReducers";

export const rootReducer = combineReducers({
  films: filmsReducer,
  app: appReducer,
});
