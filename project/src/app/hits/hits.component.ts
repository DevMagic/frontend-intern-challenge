import { Component, OnInit } from '@angular/core';
import urls from '../../assets/json/urls.json';
import{ GlobalConstants } from '../global-constants';
  
@Component({
  selector: 'app-hits',
  templateUrl: './hits.component.html',
  styleUrls: ['./hits.component.scss']
})
export class HitsComponent implements OnInit {
  hitsCache = GlobalConstants.hits;

  constructor() {}

  ngOnInit(): void {
    for (var i = 0; i < urls.length; i++) {
      this.hitsCache = this.hitsCache + urls[i].hits
      GlobalConstants.hits = this.hitsCache
    }
  }
  
}
