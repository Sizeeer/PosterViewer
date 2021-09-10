import { SHOW_LOADER, HIDE_LOADER, SHOW_ERROR } from "./actionTypes";

const initialState = {
  loading: false,
  error: "",
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case SHOW_LOADER:
      return { ...state, loading: true };
    case HIDE_LOADER:
      return { ...state, loading: false };
    case SHOW_ERROR:
      return { ...state, error: action.error };
    default:
      return state;
  }
};
