
var link
var shortlink

function randomlink() {
  shortlink = "http://chr.dc/" + Math.random().toString(36).substr(2, 5);
  link = document.getElementById("text").value;
  document.getElementById("text").value = shortlink
  document.getElementById("botao").value = "COPIAR"
}

function copy() {
  document.getElementById("text").select();
  document.execCommand("copy");
  document.getElementById("botao").value = "ENCURTAR";
  document.getElementById("text").value = "";
}

document.addEventListener("DOMContentLoaded", () => {
  var input = document.getElementById("botao")

  input.addEventListener("click", (event) => {


    if (document.getElementById("botao").value == "ENCURTAR") {
      randomlink()
    }
    else if (document.getElementById("botao").value == "COPIAR") {
      copy()
    }
  })
})

