let status = true;
function doubleClick() {
  if (status == true) {
    gerar();
    status = false;
  } else {
    copiar();
    buttonState != buttonState;
  }
}

function gerar() {
  var a = document.getElementById("link");

  const link = `http://chr.dc/${Math.floor(Math.random() * 999999)}`;

  document.getElementById("link").value = link;

  var button = document.getElementById("generator-link");
  button.innerText = "Copiar";
}

function copiar() {
  $("input").select();
  document.execCommand("copy");
}
