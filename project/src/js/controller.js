import { Service } from '../js/services.js';
import '../css/style.css';
import * as images from '../js/images.js';
const service = new Service();

class Controller {
  constructor(_service) {
    this.init();
  }
  init() {
    this.setForm();
    this.setClickBtn();
    this.setCleanInput();
    this.setInputKeyUp();
    this.createTopFiveTableAndGetData();
    this.getHitsData();
  }
  setForm() {
    let btnSendUrl = document.getElementById('btnSendUrl');
    btnSendUrl.innerText = 'ENCURTAR';
    btnSendUrl.value = 'encurtar';
  }
  setClickBtn() {
    let btnSendUrl = document.getElementById('btnSendUrl');
    btnSendUrl.addEventListener('click', () => {
      if (this.validationInputUrl()) {
        if (btnSendUrl.value === 'copiar') {
          this.copyUrl();
        } else {
          this.sendUrl();
        }
      }
      event.preventDefault();
    });
  }
  sendUrl() {
    this.setBtnCopy();
    let inputUrl = document.getElementById('inputUrl');
    let inputUrlValue = document.getElementById('inputUrl').value;
    let getUrlData = service.getShortUrl(inputUrlValue);
    inputUrl.value = getUrlData.shortUrl;
  }
  copyUrl() {
    let copyText = document.getElementById('inputUrl');
    copyText.select();
    document.execCommand('copy');
  }
  setInputKeyUp() {
    let inputUrl = document.getElementById('inputUrl');
    let btnClear = document.getElementById('btnClear');
    inputUrl.addEventListener('keyup', () => {
      btnClear.style.visibility = 'visible';
    });
  }
  setCleanInput() {
    let btnClear = document.getElementById('btnClear');
    btnClear.addEventListener('click', () => {
      this.setForm();
      let inputUrl = document.getElementById('inputUrl');
      btnClear.style.visibility = 'hidden';
      inputUrl.value = '';
    });
  }
  setBtnCopy() {
    let btnSendUrl = document.getElementById('btnSendUrl');
    btnSendUrl.innerText = 'COPIAR';
    btnSendUrl.value = 'copiar';
  }
  createTopFiveTableAndGetData() {
    const urlIndexCell = 0;
    const hitsIndexCell = 1;
    const top5Table = document.getElementById('top5');
    const topFiveData = service.getTopFive();
    topFiveData.map((webSite, index) => {
      let row = top5Table.insertRow(index);
      let cellUrl = row.insertCell(urlIndexCell);
      let cellHits = row.insertCell(hitsIndexCell);
      cellUrl.innerHTML = webSite.url;
      cellHits.innerHTML = webSite.hits;
    });
  }
  getHitsData() {
    const hitsDiv = document.getElementById('hits');
    hitsDiv.innerHTML = service.getTotalHits();
  }
  validationInputUrl() {
    let inputUrl = document.getElementById('inputUrl');
    let value = inputUrl.value.trim();
    if (value === '') {
      return false;
    }
    return true;
  }
}

let ctr = new Controller();
