const myLink = document.getElementById("encurtador");

myLink.addEventListener("submit", e => {
  e.preventDefault();

  function getRandom() {
    const random_string =
      Math.random()
        .toString(32)
        .substring(2, 5) +
      Math.random()
        .toString(32)
        .substring(2, 5);
    return random_string;
  }

  const input = document.getElementById("short_link");
  const button = document.getElementById("short_btn");
  const trueLink =
    input.value.startsWith("http://") ||
    input.value.startsWith("https://") ||
    input.value.startsWith("www.");

  if (input.value == "" || !trueLink) {
    window.alert("Verifique a URL!");
  }

  if (button.innerHTML == "Copiar") {
    input.select();
    document.execCommand("copy");
    button.innerHTML = "ENCURTAR";
    input.value = "";
  }

  if (button.innerHTML == "ENCURTAR" && input.value != "" && trueLink) {
    button.innerHTML = "Copiar";
    input.value = `http://chr.dc/${getRandom()}`;
  }
});

const requestData = new XMLHttpRequest();
requestData.open("GET", "js/urls.json");
requestData.onload = function() {
  const receivedData = JSON.parse(requestData.responseText);

  totalClicks = receivedData.map(a => a.hits).reduce((a, b) => a + b);
  document.getElementById("totalclicks").innerHTML = totalClicks;

  clicks = receivedData
    .map(a => a.hits)
    .sort(function(a, b) {
      return a - b;
    })
    .reverse();

  linksIndex = [];

  links = receivedData.map(a => a.shortUrl);

  for (i = 0; i < 5; i++) {
    document.getElementById(`top${i + 1}`).innerHTML = clicks[i];
    linksIndex.push(
      receivedData.findIndex(function(value, index) {
        return value.hits === clicks[i];
      })
    );
    document.getElementById(`link${i + 1}`).innerHTML = links[linksIndex[i]];
  }
};

requestData.send();