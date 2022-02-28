const URL_BASE = "https://swapi.dev/api";

export function fetchPeople() {
  return fetch(`${URL_BASE}/people`);
}
