import { CLEAR_FILM, FOUNDED_FILM } from "./actionTypes";

const initialState = {
  film: {},
};

export const filmsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOUNDED_FILM:
      return { ...state, film: { ...action.film } };
    case CLEAR_FILM:
      return { ...state, film: {} };
    default:
      return state;
  }
};
