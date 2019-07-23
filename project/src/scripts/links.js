const links = [
  {
    id: "23094",
    hits: 1003,
    url: "http://globo.com",
    shortUrl: "http://chr.dc/9dtr4"
  },
  {
    id: "76291",
    hits: 1922,
    url: "http://google.com",
    shortUrl: "http://chr.dc/aUx71"
  },
  {
    id: "66761",
    hits: 765,
    url: "http://terra.com.br",
    shortUrl: "http://chr.dc/u9jh3"
  },
  {
    id: "70001",
    hits: 1519,
    url: "http://facebook.com",
    shortUrl: "http://chr.dc/qy61p"
  },
  {
    id: "21220",
    hits: 311,
    url: "http://diariocatarinense.com.br",
    shortUrl: "http://chr.dc/87itr"
  },
  {
    id: "10743",
    hits: 722,
    url: "http://uol.com.br",
    shortUrl: "http://chr.dc/y81xc"
  },
  {
    id: "19122",
    hits: 1320,
    url: "http://chaordic.com.br",
    shortUrl: "http://chr.dc/qy5k9"
  },
  {
    id: "55324",
    hits: 997,
    url: "http://youtube.com",
    shortUrl: "http://chr.dc/1w5tg"
  },
  {
    id: "70931",
    hits: 487,
    url: "http://twitter.com",
    shortUrl: "http://chr.dc/7tmv1"
  },
  {
    id: "87112",
    hits: 130,
    url: "http://bing.com",
    shortUrl: "http://chr.dc/9opw2"
  }
];

function compare(a, b) {
  if (a.hits < b.hits) return -1;
  if (a.hits > b.hits) return 1;
  return 0;
}
links.sort(compare);

const topLinks1 = document.getElementById("link01");
topLinks1.innerText = links[0].shortUrl;
const topLinks2 = document.getElementById("link02");
topLinks2.innerText = links[1].shortUrl;
const topLinks3 = document.getElementById("link03");
topLinks3.innerText = links[2].shortUrl;
const topLinks4 = document.getElementById("link04");
topLinks4.innerText = links[3].shortUrl;
const topLinks5 = document.getElementById("link05");
topLinks5.innerText = links[4].shortUrl;

const topHits1 = document.getElementById("hits01");
topHits1.innerText = links[0].hits;
const topHits2 = document.getElementById("hits02");
topHits2.innerText = links[1].hits;
const topHits3 = document.getElementById("hits03");
topHits3.innerText = links[2].hits;
const topHits4 = document.getElementById("hits04");
topHits4.innerText = links[3].hits;
const topHits5 = document.getElementById("hits05");
topHits5.innerText = links[4].hits;

let totalClicks = 0;

for (var i = 0; i < links.length; i++) {
  totalClicks += parseFloat(links[i].hits);
}

const todosClicks = (document.getElementById(
  "clicks-total"
).innerText = totalClicks);
