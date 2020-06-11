import { Component, OnInit } from '@angular/core';
import urls from '../../assets/json/urls.json';
import{ GlobalConstants } from '../global-constants';


@Component({
  selector: 'app-top-links',
  templateUrl: './top-links.component.html',
  styleUrls: ['./top-links.component.scss']
})

export class TopLinksComponent implements OnInit {
  public show: boolean = true;
  counthits = 5;

  URLS = urls.sort(function (a, b) { return a.hits < b.hits ? 1 : -1; })
    .slice(0, this.counthits);

  public addURL() {
    if (this.counthits <= urls.length - 1) {
      this.counthits++;
      this.URLS = urls.sort(function (a, b) { return a.hits < b.hits ? 1 : -1; })
        .slice(0, this.counthits);
        
    }
    if (this.counthits == urls.length) {
      this.show = !this.show;
    }
  }

  public hitUrl(id) {
    for (var i = 0; i < urls.length; i++) {
      if (urls[i].id == id) {
        urls[i].hits++;
        this.URLS = urls.sort(function (a, b) { return a.hits < b.hits ? 1 : -1; })
        .slice(0, this.counthits);
        GlobalConstants.hits++;
      }
    }
  }

  constructor() { }

  ngOnInit(): void { }

}
