
var link = document.getElementById('link-text');
var buttonEncurtar = document.getElementById('encurtar');
var buttonReset = document.getElementById('resetText');
var dataJson;

recebeJson();

//Função para receber os dados do arquivo .json
function recebeJson(){

  let getJSON = function(url, callback) {
    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.onreadystatechange = function() {
      let status = xhr.status;
      if (status === 200) {
        callback(null, xhr.response);
      } else {
        callback(status, xhr.response);
      }
    };
    xhr.send();
  };

  getJSON('../Assets/urls.json', function(err, data) {
    if (err !== null) {
      console.log('Ocorreu um erro' + err);
    } else if(data != null){
      dataJson = data;
      topFive();
    }
  });
}

// Recebe o link completo e manda o link encurtado
function encurtar(){

  let existLink = false;

  dataJson.forEach(element => {

    elementUrl = element.url;
    if(link.value == elementUrl || link.value == elementUrl.substr(7) || link.value == 'www.'+elementUrl.substr(7)){
      
      element.hits++;
      link.value = element.shortUrl;
      link.style.color = "white";
      buttonEncurtar.innerHTML = "COPIAR";
      buttonEncurtar.setAttribute('onclick','copiar()');
      buttonReset.style.display = "inline-block";
      buttonReset.removeAttribute('disabled');
      existLink = true;
      topFive();
      event.preventDefault();
    }
  });

  if(!existLink){
    link.value = "Erro";
  }
}

// Identificar e colocar o top5 na página
function topFive(){

  let top = [];
  
  dataJson.forEach(element => {

    top.push([element.shortUrl, element.hits]);
  });

  top.sort(function(a,b){
  if(a[1] === b[1]){
    return 0;
  } else {
    return (a[1] > b[1] ? -1 : 1);
  }
  });

  for (let cont = 0; cont < 5; cont++) {
    document.getElementById('linkTop'+(cont+1)).innerHTML = top[cont][0]+` <span>`+top[cont][1]+`</span>`;
    
  }
}


// Copiar o Link
function copiar(){

    let selection = window.getSelection();
    selection.removeAllRanges();

    var range = document.createRange();
    range.selectNode(link);
    selection.addRange(range);
    try{
        let success = document.execCommand("copy");
        let msg = success ? 'sucesso' : 'sem sucesso';

        alert('Cópia feita com '+msg);
    } catch(err){
        console.log('execCommand Error', err);
    }

    selection.removeAllRanges();
    
}

// Botão reset apaga o text no link
buttonReset.addEventListener("click", (event) => {
    link.value = "";
    resetarCampo();
    event.preventDefault();
});

// Apertar o botão de encurtar caso aperte enter no link
link.addEventListener("keydown", (e) =>{
    if(e.key == 'Enter'){
        encurtar();
    }
});

//Mudar a cor/redefinir text/link
link.addEventListener("keyup", (e) => { 
        if(e.key != 'Enter'){
        resetarCampo();
        }
    });

function resetarCampo(){
    if(link.style.color == "white"){
        buttonEncurtar.setAttribute('onclick','encurtar()');
        buttonEncurtar.innerHTML = "Encurtar";
        buttonReset.style.display = "none";
        buttonReset.setAttribute('disabled', 'disabled');
        link.style.color = "#FF8C00";
    }
}

