import { Component, OnInit } from '@angular/core';
import urls from '../../assets/json/urls.json';

@Component({
  selector: 'app-shortener-form',
  templateUrl: './shortener-form.component.html',
  styleUrls: ['./shortener-form.component.scss']
})
export class ShortenerFormComponent implements OnInit {
 

  constructor() {}

  ngOnInit(): void {
    
  }

  
  newShortener(form) {
   
    let possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvxyzZ1234567890";
    let possibleNumber = "1234567890";
    let url = "";
    let newId = ""
    for (let i = 0; i < 5; i++) {
      newId += possibleNumber.charAt(Math.floor(Math.random() * possibleNumber.length));
    }

    for (let i = 0; i < 5; i++) {
      url += possible.charAt(Math.floor(Math.random() * possible.length));
    }
    url = "http://chr.dc/" + url;

    urls.push({
      id: newId,
      hits: 0,
      url: form.value,
      shortUrl: url
    });
    

    form.reset();
    
  }
}
