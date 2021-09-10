import {
  SHOW_LOADER,
  HIDE_LOADER,
  FOUNDED_FILM,
  SEARCH_FILM,
  SHOW_ERROR,
  CLEAR_FILM,
} from "./actionTypes";

export const showLoader = () => {
  return {
    type: SHOW_LOADER,
  };
};

export const hideLoader = () => {
  return {
    type: HIDE_LOADER,
  };
};

export const foundedFilm = (film) => {
  return {
    type: FOUNDED_FILM,
    film,
  };
};

export const clearFilm = () => {
  return {
    type: CLEAR_FILM,
  };
};

export const showError = (error) => {
  return {
    type: SHOW_ERROR,
    error,
  };
};

export const searchFilm = (title) => {
  return {
    type: SEARCH_FILM,
    title,
  };
};
