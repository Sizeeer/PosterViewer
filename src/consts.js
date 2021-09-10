export const imdbUrl = (title) =>
  `https://www.omdbapi.com/?t=${title}&apikey=${process.env.REACT_APP_IMDB_API_KEY}`;

export const POSTER_NOT_FOUND = "N/A";
export const FILM_RESPONSE_FALSE = "False";
export const queries = {
  small: "(max-width: 368px)",
  small_medium: "(max-width: 600px)",
  medium: "(min-width: 600px) and (max-width: 1199px)",
  large: "(min-width: 1200px)",
};
