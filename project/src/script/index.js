// Consumindo arquivo JSON para a listagem do TOP 5

// Automatizando meu FETCH
const onLoad = async (url) => {
  const response = await fetch(url);
  return await response.json();
};

const manipulateData = async () => {
  let data = await onLoad(
    'https://run.mocky.io/v3/2752fcb7-2a4e-4e61-86fd-e8dd09bb8789'
  );
  return data;
};

const newData = async () => {
  // recebendo o arquivo JSON
  const data = await manipulateData();
  // Ordenando o arquivo json com base nos hits
  const dataArray = data
    .sort((a, b) => {
      if (a.hits < b.hits) return -1;
      if (a.hits > b.hits) return 1;
    })
    // Uso o reverse para deixar os mais hitados em primeiro
    .reverse();
  return dataArray;
};

const setListing = async () => {
  const data = await newData();
  const ul = document.querySelector('.listing');

  for (let i = 0; i <= 4; i++) {
    const li = `<li>
      <p>${data[i].shortUrl}</p>
      <span>${data[i].hits}</span>
      </li>`;
    ul.innerHTML += li;
  }
};
setListing();
