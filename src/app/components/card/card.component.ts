import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FamousPeople } from '../../models/FamousPeople';
import { Global } from '../../services/global';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {
@Input() fp:FamousPeople;

@Output() deleteFp = new EventEmitter();

public url = Global.url;

  constructor() { }

  ngOnInit() {
  	
  }

  delete(e, fp) {
    this.deleteFp.emit({
      fp
    });
  }
  


}
