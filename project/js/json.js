let getJSONFile = async () => {
  try {
    let res = await fetch("../public/urls.json");
    if (res.ok) {
      let json = await res.json();
      return json;
    } else {
      throw new Error(`Something went wrong! Check url! Status: ${res.status}`);
    }
  } catch (err) {
    console.log(err);
  }
};

getJSONFile().then(json => {
  json.sort((a, b) => {
    return b.hits - a.hits;
  });

  const topDiv = document.querySelector(".top5__wrapper");

  for (let i = 0; i < 5; i++) {
    let data = json[i];
    let div = `
    <div class="top5__item">
      <a href="${data.shortUrl}">
        <span class="top5__link">${data.shortUrl}</span>
      </a>
      <span class="top5__hits">${data.hits}</span>
    </div>
    `;
    topDiv.innerHTML += div;
  }
});
