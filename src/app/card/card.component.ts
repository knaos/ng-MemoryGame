import { Component, OnInit, Input } from '@angular/core';
import { Card } from '../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    if (this.card.flipped) {
      return;
    }

    this.card.flipped = true;
  }

}