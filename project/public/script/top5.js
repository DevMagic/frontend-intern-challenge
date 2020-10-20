init()

function init() {
  const dataJson = require('../../Assets/top5.json');

  //order by hits
  
  dataJson.sort(function (a, b) {
    if (a.hits < b.hits) {
      return 1;
    }
    if (a.hits > b.hits) {
      return -1;
    }
    return 0;
  });

  createHTML(dataJson)
}

function createHTML(dataJson) {
  let html = ''
  for (let i = 0; i < 5; i++) {
    if(i <= 3) {
      html = html +
        `<tr class="row">
        <td>${dataJson[i].shortUrl}</td>
        <td>${dataJson[i].hits}</td>
      </tr>`
    } else {
      html = html +
      `<tr>
        <td>${dataJson[i].shortUrl}</td>
        <td>${dataJson[i].hits}</td>
      </tr>`
    }
  }

  const tbody = document.getElementById('tbody-top5')
  tbody.innerHTML = html
}