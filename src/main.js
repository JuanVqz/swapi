import "./css/style.css";

const URL_BASE = "https://swapi.dev/api";

async function renderPeople() {
  const response = await fetch(`${URL_BASE}/people`);
  const { results } = await response.json();
  console.log(results);

  let people = document.querySelector("#people");
  let fragment = new DocumentFragment();

  results.forEach(function ({ name, height }) {
    let tr = document.createElement("tr");
    tr.innerHTML = `
      <td>${name}</td>
      <td>${height}</td>
    `;
    fragment.appendChild(tr);
  });

  people.replaceChildren(fragment);
}

renderPeople();
