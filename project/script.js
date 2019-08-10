let wasShortened = false; //Variável para determinar se link já foi encurtado ou não

//Seção do Top 5
function load() {  //Começa processo de preencher os Top 5 quando a página carregar
   getUrls();
}

function getUrls(){ //Obtem a JSON do github através do XMLHttpRequest e armazena na variável urls
   let url = "https://raw.githubusercontent.com/gabrbfreire/frontend-intern-challenge/master/Assets/urls.json";
   let request = new XMLHttpRequest();
   request.open('GET', url);
   request.responseType = 'json';
   request.send();
   request.onload = function() {
      let urls = request.response;
      fillsTop5(urls);
   }
}

function fillsTop5(urls){ //Preenche os Top 5 com os links e hits
   bubbleSort(urls);
   let reversedUrls = urls.reverse(); //Inverte a ordem dos links para decrescente
   for(let i = 0;i < 5; i++){
      document.getElementById('top-'+ i +'-link').textContent = urls[i].shortUrl;
      document.getElementById('clicks-' + i).textContent = reversedUrls[i].hits;
   }
}

function bubbleSort(urls){ //Organiza os links em ordem crescente
   for(let j = urls.length - 1;j > 0;j--){
      for(let i = 0;i < j; i++){
         if(urls[i].hits > urls[i+1].hits){
            let tmp = urls[i];
            urls[i] = urls[i+1];
            urls[i+1] = tmp;
         }
      }
   }
}


//Seção do botão encurtar
document.getElementById('shorten-button').addEventListener('click', buttonClick);
document.getElementById('x').addEventListener('click', deleteInput);

function getLink(){ //
   return document.getElementById('original-link').value;
}

function buttonClick(){ //Encurta ou copia o link do input  
   if(validatesLink() && !wasShortened){
      let r = Math.random().toString(36).slice(2, 8);
      fadeOut(r);
      wasShortened = true;
   }else if(wasShortened){
      copyLink();
   }
}

 function validatesLink(){ //Valida o link original fornecido pelo usuário
   if(!document.getElementById('original-link').checkValidity()){
      document.getElementById('original-link').reportValidity();
   }
   else{
      return true;
   }
}

function copyLink(){ //Copia conteúdo do input
   let shortLink = document.getElementById('original-link');
   shortLink.select();
   document.execCommand("copy");
}

function fadeOut(r){ //Fade out do link entrado pelo usuário no input e do texto "ENCURTAR" no botão.
   document.getElementById('original-link-2').style.visibility = 'visible';
   document.getElementById('button-txt').style.opacity = "0";
   document.getElementById('original-link').style.opacity = "0";
   setTimeout(function(){
      document.getElementById('original-link').value = "http://chr.dc/"+ r;
      fadeIn();
   }, 1000);
}

function fadeIn(){ //Fade in no input do link gerado e do texto "COPIAR" no botão
   document.getElementById('x').style.opacity = '1'
   document.getElementById('button-txt').innerText = 'COPIAR';
   document.getElementById('button-txt').style.visibility = 'visible';
   document.getElementById('button-txt').style.opacity = '1';
   document.getElementById('original-link').style.color = '#EEE';
   document.getElementById('original-link').style.opacity = '1';
   document.getElementById('original-link-2').style.visibility = 'hidden';
}

function deleteInput(){
   document.getElementById('original-link').style.color = 'orange';
   document.getElementById('x').style.opacity = '0';
   document.getElementById('original-link').value = '';
   document.getElementById('button-txt').innerText = 'ENCURTAR';
   wasShortened = false;
}
