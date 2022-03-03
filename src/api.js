const URL_BASE = "https://swapi.dev/api";

export function fetchPeople() {
  return fetch(`${URL_BASE}/people`);
}

export async function fetchTopics() {
  return fetch(URL_BASE);
}
