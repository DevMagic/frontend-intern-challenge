window.onload = function () {
  let generateButton = document.getElementById('generateBtn');
  let input = document.getElementById('inputLink');
  let icon = document.getElementById('closeIcon');

  icon.addEventListener('click', () => clearInput(input));

  generateButton.addEventListener('click', () =>
    GenerateLink(generateButton, input)
  );

  init();
};

function init() {
  let xobj = new XMLHttpRequest();
  let table = document.querySelector('table');

  xobj.overrideMimeType('application/json');
  xobj.open('GET', '../../Assets/urls.json', true);

  xobj.onreadystatechange = function () {
    if (xobj.readyState == 4 && xobj.status == '200') {
      let json = JSON.parse(xobj.responseText);
      json.map((link) => {
        let tr = document.createElement('tr');
        let shortLink = link.shortUrl;
        let hits = link.hits;
        let tdLink = document.createElement('th');
        let tdHits = document.createElement('th');
        tdHits.appendChild(document.createTextNode(shortLink));
        tdLink.appendChild(document.createTextNode(hits));
        tr.appendChild(tdHits);
        tr.appendChild(tdLink);
        table.appendChild(tr);
      });
    }
  };
  xobj.send(null);
}

function GenerateLink(button, input) {
  if (button.getAttribute('class') === 'show') {
    button.setAttribute('class', 'hide');
    input.setAttribute('class', 'hideInput');

    setTimeout(function () {
      button.firstElementChild.innerHTML = 'COPIAR';

      button.setAttribute('class', 'show');
      input.setAttribute('class', 'showInput');
    }, 500);
  } else {
    button.firstElementChild.innerHTML = 'ENCURTAR';
  }
}

function clearInput(input) {
  input.value = '';
}
