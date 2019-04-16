import http from "./httpService";

const apiEndopoint = "http://localhost:3900/api/movies";
export function getMovies() {
  return http.get(apiEndopoint);
}

export function deleteMovie(movieId) {
  return http.delete(apiEndopoint + "/" + movieId);
}
