let apiInfo = {
  URL: "https://pokeapi.co/api/v2/",
  type: "pokemon",
  id: 400,
};

let apiLink = `${apiInfo.URL}${apiInfo.type}/${apiInfo.id}`;

fetch(apiLink)
  .then((data) => data.json())
  .then((pokemon) => generateHTML(pokemon));

let generateHTML = (data) => {
  console.log(data.name);
  const html = `

<img src=${data.sprites.front_default}>

  `;

  const htmlToo = `
  <div class='name'>${data.name}</div>
  `;

  const pokemonDiv = document.querySelector(".pokemon");
  const pokemonName = document.querySelector(".card-title");

  pokemonDiv.innerHTML = html;
  pokemonName.innerHTML = htmlToo.toUpperCase();
};
