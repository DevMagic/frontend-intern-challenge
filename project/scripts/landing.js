//Import other JS files used for landing page
import {fetchUrls} from './topFive.js';
import {changeForm, verifyButtonAction} from './shortener.js';

//Prevents form from submiting
document.querySelector('#shorten-form').addEventListener("submit", ev => {ev.preventDefault()});

//Verifies button condition on clicking
document.querySelector('#btn-link').addEventListener("click", verifyButtonAction);

//Erases shortened link
document.querySelector('#btn-cancel').addEventListener("click", function(){changeForm("shorten")});

//Functions activated on page loading
window.addEventListener("load", function(){
    changeForm("shorten");
    fetchUrls();
});
