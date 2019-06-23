
const randomLink = (length) => {
  var result = '';
  var characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  var charactersLength = characters.length;
  for (var i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * charactersLength));
  }
  return result;
}

const urlEnc = () => {

  let newUrl = document.getElementById("input-link");
  newUrl.value = 'http://chr.dc/' + randomLink(5);

}


const changeColor = () => {
  let inputClick = document.getElementById("input-link");
  inputClick.style.color = "white";
  urlEnc();

};

let buttonClick = document.getElementById("button-link");

const changeText = () => {
  buttonClick.innerHTML = "COPIAR";
  buttonClick.value = "COPIAR";
};

const copyUrl = () => {
  
  let url = document.getElementById("input-link");
  url.select();
	document.execCommand("copy");

  // link = document.getElementById('input-link').value;
  // link.execCommand('copy');

}

const resolveClick = () => {
  if(buttonClick.value === "ENCURTAR"){
    changeText();
    changeColor();
    console.log('encurtar');
  }else{
    copyUrl();
    console.log('copiar');
  }

};

