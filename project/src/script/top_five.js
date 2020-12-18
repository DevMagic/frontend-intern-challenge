// Lógica para a listagem do TOP 5
// Automatizando meu FETCH
const onLoad = async (url) => {
  const response = await fetch(url);
  return await response.json();
};
// Declarando a URL
const manipulateData = async () => {
  let data = await onLoad('../../Assets/urls.json');
  return data;
};

// Criando a lógica para ordenar o JSON
const sortingJson = async () => {
  // recebendo o arquivo JSON
  const data = await manipulateData();
  // Ordenando o arquivo json com base nos hits
  const dataArray = data
    .sort((a, b) => (a.hits < b.hits ? -1 : a.hits > b.hits ? 1 : 0))
    // Uso o reverse para deixar os mais clicados em primeiro
    .reverse();
  return dataArray;
};

// Criando a listagem
const setListing = async () => {
  const data = await sortingJson();
  const ul = document.querySelector('.listing');

  // Definindo o laço para filtrarmos os 5 mais clicados
  for (let i = 0; i < 5; i++) {
    const li = `<li>
      <p>${data[i].shortUrl}</p>
      <span>${data[i].hits}</span>
      </li>`;
    ul.innerHTML += li;
  }
};

setListing();
