//Instantiation of Table Components.
var links = [document.getElementById("link1"), document.getElementById("link2"),
document.getElementById("link3"), document.getElementById("link4"), 
document.getElementById("link5")]

var clicks = [document.getElementById("clicks1"), document.getElementById("clicks2"),
document.getElementById("clicks3"), document.getElementById("clicks4"), 
document.getElementById("clicks5")]

//Instantiation of Shoterner Components.
var shortButton = document.getElementById("shortButton");
var shortInput = document.getElementById("shortInput");
var resetInput = document.getElementById("resetInput");

//Initialization o Json.
var siteData = [{
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
                }]


//Top hits bubblu sort function.
function topSite(){
  var aux;
  for(var s1 = 0; s1 < siteData.length; s1++){ 
    for(var s2 = s1+1; s2 < siteData.length; s2++){
      if(siteData[s2].hits > siteData[s1].hits){
        aux = siteData[s1];
        siteData[s1] = siteData[s2];
        siteData[s2] = aux;
      }
    }
  }
};
topSite();

//Aggregation of top hits in the table.
for(var ind = 0; ind < links.length; ind++){
  links[ind].innerHTML = siteData[ind].shortUrl;
  clicks[ind].innerHTML = siteData[ind].hits;
}

//Instantiation of auxiliar attributes.
var inputSite;
var resultLink;
var auxSite;
var buttonMode = "shorten";

//Function of comparation and devolution of a shortUrl
function getShortLink(inputSite){
  for(var count = 0; count < siteData.length; count++){
    auxSite = siteData[count].url.replace("http://","");
    if(inputSite == auxSite || inputSite == "http://"+auxSite || inputSite == "www."+auxSite || inputSite == "http://www."+auxSite){
      return siteData[count].shortUrl;
    }
  }
  return "Não encontrado";
}


//button function on click to trade input link for short link, also trade function button for copy.
shortButton.addEventListener('click', () => {
  switch(buttonMode){

    case "shorten":
      inputSite = shortInput.value;
      resultLink = getShortLink(inputSite);
      shortInput.value = resultLink;
      shortInput.style.color = "white";
      shortButton.innerHTML = "COPIAR";
      buttonMode = "copy";
      resetInput.style.visibility = "visible";
      resetInput.style.width = "14px";
      shortInput.style.width = "756px";
      break;

    case "copy":
      shortInput.select();
      document.execCommand('copy');
      break;

  }
});


//Button function to reset shortener componentes.
resetInput.addEventListener('click', () => {
  shortInput.value = "";
  shortInput.style.color = "rgb(255, 87, 27)";
  shortButton.innerHTML = "ENCURTAR";
  buttonMode = "shorten";
  resetInput.style.visibility = "hidden";
  resetInput.style.width = "0px";
  shortInput.style.width = "770px";
});

