var txt = '{"sites":[' +
'{ "id": "23094", "hits": 1003, "url": "http://globo.com", "shortUrl": "http://chr.dc/9dtr4"},' + 
'{ "id": "76291", "hits": 1922, "url": "http://google.com", "shortUrl": "http://chr.dc/aUx71"},' +
'{ "id": "66761", "hits": 765, "url": "http://terra.com.br", "shortUrl": "http://chr.dc/u9jh3"},' +
'{ "id": "70001", "hits": 1519, "url": "http://facebook.com", "shortUrl": "http://chr.dc/qy61p"},' +
'{ "id": "21220", "hits": 311, "url": "http://diariocatarinense.com.br", "shortUrl": "http://chr.dc/87itr"},' +
'{ "id": "10743", "hits": 722, "url": "http://uol.com.br", "shortUrl": "http://chr.dc/y81xc"},' +
'{ "id": "19122", "hits": 1320, "url": "http://chaordic.com.br", "shortUrl": "http://chr.dc/qy5k9"},' +
'{ "id": "55324", "hits": 997, "url": "http://youtube.com", "shortUrl": "http://chr.dc/1w5tg"},' +
'{ "id": "70931", "hits": 487, "url": "http://twitter.com", "shortUrl": "http://chr.dc/7tmv1"},' +
'{ "id": "87112", "hits": 130, "url": "http://bing.com", "shortUrl": "http://chr.dc/9opw2"} ]}';


var obj = JSON.parse(txt);
document.getElementById("top1link").innerHTML =
obj.sites[1].shortUrl;
document.getElementById("top1").innerHTML =
obj.sites[1].hits;

document.getElementById("top2link").innerHTML =
obj.sites[3].shortUrl;
document.getElementById("top2").innerHTML =
obj.sites[3].hits;

document.getElementById("top3link").innerHTML =
obj.sites[6].shortUrl;
document.getElementById("top3").innerHTML =
obj.sites[6].hits;

document.getElementById("top4link").innerHTML =
obj.sites[0].shortUrl;
document.getElementById("top4").innerHTML =
obj.sites[0].hits;

document.getElementById("top5link").innerHTML =
obj.sites[7].shortUrl;
document.getElementById("top5").innerHTML =
obj.sites[7].hits;


    function funcao() {
        document.getElementById("ENCURTAR").innerHTML = "COPIAR";
        document.getElementById('linkagem').select();
        document.execCommand('copy');
    }
    

    var site = [
    { "id": "23094", "hits": 1003, "url": "http://globo.com", "shortUrl": "http://chr.dc/9dtr4"},  
    { "id": "76291", "hits": 1922, "url": "http://google.com", "shortUrl": "http://chr.dc/aUx71"}, 
    { "id": "66761", "hits": 765, "url": "http://terra.com.br", "shortUrl": "http://chr.dc/u9jh3"}, 
    { "id": "70001", "hits": 1519, "url": "http://facebook.com", "shortUrl": "http://chr.dc/qy61p"}, 
    { "id": "21220", "hits": 311, "url": "http://diariocatarinense.com.br", "shortUrl": "http://chr.dc/87itr"}, 
    { "id": "10743", "hits": 722, "url": "http://uol.com.br", "shortUrl": "http://chr.dc/y81xc"}, 
    { "id": "19122", "hits": 1320, "url": "http://chaordic.com.br", "shortUrl": "http://chr.dc/qy5k9"}, 
    { "id": "55324", "hits": 997, "url": "http://youtube.com", "shortUrl": "http://chr.dc/1w5tg"}, 
    { "id": "70931", "hits": 487, "url": "http://twitter.com", "shortUrl": "http://chr.dc/7tmv1"}, 
    { "id": "87112", "hits": 130, "url": "http://bing.com", "shortUrl": "http://chr.dc/9opw2"} ];
    
    function mostrar(){
       var texto = document.body.querySelector("#linkagem").value;
       var texto_array = texto.split(",").map(function(i){
          return i.trim().toLowerCase();
       });
       var ver = site.filter(function(e){
          return ~texto_array.indexOf(e.url.toLowerCase());
       });
       var res = document.body.querySelector("#linkagem");
       res.innerHTML = '';
       for(var item of ver){
          res.innerHTML = document.getElementById("linkagem").value = item.shortUrl;
       }
    }
