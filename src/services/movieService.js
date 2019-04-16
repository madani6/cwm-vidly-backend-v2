import http from "./httpService";
import { apiUrl } from "../config.json";

const apiEndopoint = apiUrl + "/movies";

export function getMovies() {
  return http.get(apiEndopoint);
}

export function getMovie(movieId) {
  return http.get(apiEndopoint + "/" + movieId);
}

export function saveMovie(movie) {}

export function deleteMovie(movieId) {
  return http.delete(apiEndopoint + "/" + movieId);
}
