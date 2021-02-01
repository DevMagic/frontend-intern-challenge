function callFunctions() {
  $.getJSON("urls.json", function (urls) {
    contHits(urls);
    selectTop5(urls);
  });
}

function selectTop5(urls) {
  let top = [];
    urls.forEach((url) => {
    if (top[0] == undefined || url.hits > top[0].hits ) {
       top[0] = url;
    } else if (top[1] == undefined || url.hits > top[1].hits) {
       top[1] = url;
    } else if (top[2] == undefined || url.hits > top[2].hits) {
       top[2] = url;
    } else if (top[3] == undefined || url.hits > top[3].hits) {
       top[3] = url;
    } else if (top[4] == undefined || url.hits > top[4].hits) {
       top[4] = url;
    }
  });
  for(let i = 0; i<5; i++){
      i == 4 ?  $("table").append(`<tr> <td class="ultimo">${top[i].shortUrl}</td><td class=" ultimo quant">${top[i].hits}</td></tr> `) :
       $("table").append(`<tr> <td>${top[i].shortUrl}</td><td class="quant">${top[i].hits}</td></tr> `);
      
  }  
}

function contHits(urls) {
  const totalHits = urls.reduce((hits, url) => {
    return url.hits + hits;
  }, 0);
  $("#totalHits").val(totalHits);
}

function shortenLinks(){
  const bigUrl  = $("#inputLink").val();
  if(bigUrl != ''){
   
    $.getJSON("urls.json", function (urls) {
     
      const shorten = urls.filter((url)=>{
        if(url.url == bigUrl){
          return url.shortUrl;
        }
      });
      if(shorten.length>0){
        $('#button').val('COPIAR')
        $('#inputLink').css('border-color', '#ff6e14')
        $('#inputLink').css('color', '#fff')
        $('#inputLink').val(`${shorten[0].shortUrl}`)
      }else{
        $('#inputLink').val('');
        alert("Link não encontrado")
       
      }
   });
  }

}

callFunctions();

