import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndopoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndopoint);
}

export function getMovie(movieId) {
  return http.get(apiEndopoint + "/" + movieId);
}

export function saveMovie(movie) {
  if (movie._id) {
    const body = { ...movie };
    delete body._id;
    return http.put(apiEndopoint + "/" + movie._id, body);
  }

  return http.post(apiEndopoint, movie);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndopoint + "/" + movieId);
}
