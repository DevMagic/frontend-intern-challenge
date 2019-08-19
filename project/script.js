// Utilizado o json no arquivo javascript porque não tenho muito conhecimento de 
// server-side javascript para criar um servidor local e efetuar um fetch do json.
var data = [{
    "id": "23094",
    "hits": 1003,
    "url": "http://globo.com",
    "shortUrl": "http://chr.dc/9dtr4"
},
{
    "id": "76291",
    "hits": 1922,
    "url": "http://google.com",
    "shortUrl": "http://chr.dc/aUx71"
},
{
    "id": "66761",
    "hits": 765,
    "url": "http://terra.com.br",
    "shortUrl": "http://chr.dc/u9jh3"
},
{
    "id": "70001",
    "hits": 1519,
    "url": "http://facebook.com",
    "shortUrl": "http://chr.dc/qy61p"
},
{
    "id": "21220",
    "hits": 311,
    "url": "http://diariocatarinense.com.br",
    "shortUrl": "http://chr.dc/87itr"
},
{
    "id": "10743",
    "hits": 722,
    "url": "http://uol.com.br",
    "shortUrl": "http://chr.dc/y81xc"
},
{
    "id": "19122",
    "hits": 1320,
    "url": "http://chaordic.com.br",
    "shortUrl": "http://chr.dc/qy5k9"
},
{
    "id": "55324",
    "hits": 997,
    "url": "http://youtube.com",
    "shortUrl": "http://chr.dc/1w5tg"
},
{
    "id": "70931",
    "hits": 487,
    "url": "http://twitter.com",
    "shortUrl": "http://chr.dc/7tmv1"
},
{
    "id": "87112",
    "hits": 130,
    "url": "http://bing.com",
    "shortUrl": "http://chr.dc/9opw2"
}];

const inputElement = document.querySelector('#main-section form input');
const buttonElement = document.querySelector('#main-section form button');
const textEncurtar = 'ENCURTAR';
const textCopiar = 'COPIAR';
const dataRow = document.querySelector('#top-five-section table');
const headerTotalHits = document.querySelector('#hits-section div h1');

// Renderiza os itens do JSON e ordena por quantidade de hits
function renderTopFive() {
    dataRow.innerHTML = '';
    const organizedList = data.sort((a, b) => b.hits - a.hits);
    const topFive = organizedList.slice(0, 5);

    for(item of topFive) {
        const tableDataRow = document.createElement('tr');
        const shortUrlDataCell = document.createElement('td');
        const hitsDataCell = document.createElement('td');
        const shortUrlNode = document.createTextNode(item.shortUrl);
        const hitsNode = document.createTextNode(item.hits.toLocaleString('pt-br'));
        
        shortUrlDataCell.appendChild(shortUrlNode);
        hitsDataCell.appendChild(hitsNode);
        tableDataRow.appendChild(shortUrlDataCell);
        tableDataRow.appendChild(hitsDataCell);
        dataRow.appendChild(tableDataRow);
    }
}


// Renderiza o total de hits 
function renderTotalHits() {
    headerTotalHits.innerHTML = '';
    let totalHits = 0;
    data.forEach(item => totalHits += item.hits);
    const headerNode = document.createTextNode(totalHits.toLocaleString('pt-br'));
    headerTotalHits.appendChild(headerNode);
}

renderTopFive();
renderTotalHits();

// Verifica o texto do botão para levar à função correta
function isToShortenOrCopy(e) {
    e.preventDefault();
    if (buttonElement.innerHTML == textEncurtar) shortenLink();
    else copyLink();
    renderTopFive();
    renderTotalHits();
}

// Encurta o link informado e soma os hits (números de cliques
// em links), caso encontre-o na lista
function shortenLink() {
    const text = inputElement.value;
    const item = data.find(item => text.includes(item.url.slice(7)));   
    if (item) {
        item.hits++;
        inputElement.value = item.shortUrl;
        buttonElement.innerHTML = textCopiar;
    }
}

// Reseta o campo e texto do botão
function resetInputAndButton() {
    inputElement.value = '';
    buttonElement.innerHTML = textEncurtar;
}

// Copia a url encurtada para a área de transferência
function copyLink() {
    inputElement.select();
    document.execCommand('copy');
    resetInputAndButton();
}