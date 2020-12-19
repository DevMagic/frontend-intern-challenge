var urls = [{
  "id": "23094",
  "nome": "globo",
  "hits": 1003,
  "url": "http://globo.com",
  "shortUrl": "http://chr.dc/9dtr4"
},
{
  "id": "76291",
  "nome": "google",
  "hits": 1922,
  "url": "http://google.com",
  "shortUrl": "http://chr.dc/aUx71"
},
{
  "id": "66761",
  "nome": "terra",
  "hits": 765,
  "url": "http://terra.com.br",
  "shortUrl": "http://chr.dc/u9jh3"
},
{
  "id": "70001",
  "nome": "facebook",
  "hits": 1519,
  "url": "http://facebook.com",
  "shortUrl": "http://chr.dc/qy61p"
},
{
  "id": "21220",
  "nome": "D.Catarinense",
  "hits": 311,
  "url": "http://diariocatarinense.com.br",
  "shortUrl": "http://chr.dc/87itr"
},
{
  "id": "10743",
  "nome": "uol",
  "hits": 722,
  "url": "http://uol.com.br",
  "shortUrl": "http://chr.dc/y81xc"
},
{
  "id": "19122",
  "nome": "chaordic",
  "hits": 1320,
  "url": "http://chaordic.com.br",
  "shortUrl": "http://chr.dc/qy5k9"
},
{
  "id": "55324",
  "nome": "youtube",
  "hits": 997,
  "url": "http://youtube.com",
  "shortUrl": "http://chr.dc/1w5tg"
},
{
  "id": "70931",
  "nome": "twitter",
  "hits": 487,
  "url": "http://twitter.com",
  "shortUrl": "http://chr.dc/7tmv1"
},
{
  "id": "87112",
  "nome": "bing",
  "hits": 130,
  "url": "http://bing.com",
  "shortUrl": "http://chr.dc/9opw2"
},];

renderLinks()

/*função para encurtar os links e dar um push no array de urls*/

function addShorterLink(){
  let nome = document.getElementById('linkNome').value;
  let url = document.getElementById('linkUrl').value;

  if (nome != '' && url != '') {
    let cod = Math.random().toString(36).substr(2,6);
    let id = Math.random().toString(10).substr(2,6);
  
    let newUrl = 'http://chr.dc/' + cod;
  
    var urlObj = {
      "id" : id,
      "hits": 0,
      "nome": nome,
      "url": url,
      "shortUrl": newUrl,
    }
  
    urls.push(urlObj);
    renderLinks();
  
    document.getElementById('linkNome').value = "";
    document.getElementById('linkUrl').value = "";

  } else {
    return
  }
}

/*Renderização dos links na tela*/
/*Contagem do total de hits*/

function renderLinks(){
  let secArea = document.getElementById('links')

  let urlEl  = ''

  let Urls = urls.sort((a,b) => (b.hits > a.hits) ? 1 : -1)

  for (url of Urls) {
    let urlIt = `<div id="${url.hits}" class="case hide">
                    <label class="link-nome" for="link1">${url.nome}: </label>
                    <a onclick="hitsCount(${url.hits})" class="link count" href="${url.url}" name="link1">${url.shortUrl}</a>
                    <p id="${Urls.indexOf(url)}" class="hits">${url.hits}</p>
                 </div>`

    urlEl += urlIt
  }
  secArea.innerHTML = urlEl;
  

  var allHits = urls.map(url => url.hits).reduce((a,b) => a + b,0)
  document.getElementById('totalH').innerText = allHits;
  top5();
}

/*Top 5 links*/

function top5(){
  var top5 = urls.sort((a, b) => a < b ? 1 : a > b ? -1 : 0).slice(0, 5);

  for (const top of top5) {
    const match = document.getElementById(top.hits)

    if (match.classList.contains("hide")) {
      match.classList.remove("hide");
    } else {
      return console.log('algo errado');
    }
  }
}

/*Mostrar todos os links*/

document.getElementById('showAll').onclick = function showAll() {
  let allLinks = urls.sort((a,b) => (b.hits > a.hits) ? 1 : -1)

  let title = document.getElementById('top')

  for (const link of allLinks) {
    const match = document.getElementById(link.hits)

    if (!match.classList.contains("hide")) {
      match.classList.add("hide");
      title.innerText = "TOP 5"
    } else {
      match.classList.remove("hide")
      title.innerText = "LINKS"
    }
  }
  top5()
  console.log(allLinks);
}

/*Contagem de hits individual*/

function hitsCount(hit) {
  var testes = urls.map(url => url.hits)

  for (const teste  of testes) {

    if (teste === hit) {

      hit ++

      var link = document.getElementById(testes.indexOf(teste)) 
      link.innerText = hit;

      return
    } else{
      console.log('Erro na atualização de click');
    }
  }
}
