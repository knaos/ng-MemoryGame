import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Card } from '../game.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input() card: Card;
  @Output() flipped = new EventEmitter<Card>();
  constructor() { }

  ngOnInit() {
  }

  flipCard() {
    if (this.card.flipped) {
      return;
    }
    this.card.flipped = true;
    this.flipped.emit(this.card);
  }

}
