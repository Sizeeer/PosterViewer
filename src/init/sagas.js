import { message } from "antd";
import { call, put, takeEvery } from "redux-saga/effects";
import { FILM_RESPONSE_FALSE, imdbUrl } from "../consts";
import { clearFilm, foundedFilm, hideLoader, showLoader } from "./actions";
import { SEARCH_FILM } from "./actionTypes";

export function* searchFilmWatcher() {
  yield takeEvery(SEARCH_FILM, searchFilmWorker);
}

function* searchFilmWorker(action) {
  try {
    yield put(showLoader());
    yield put(clearFilm());
    const film = yield call(requestToFilm, action.title);
    if (film.Response !== FILM_RESPONSE_FALSE) {
      yield put(foundedFilm(film));
    }
  } catch (e) {
    message.error("Произошла ошибка при запросе фильма, повторите попытку!");
  } finally {
    yield put(hideLoader());
  }
}

async function requestToFilm(title) {
  const response = await fetch(imdbUrl(title));
  return await response.json();
}
