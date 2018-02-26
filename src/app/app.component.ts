import { Component } from '@angular/core';
import { GameService, Card } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MemoryGame';

  public cards: Array<Card>;
  /**
   *
   */
  constructor(public gameService: GameService) {
    this.cards = gameService.grid;
  }

  public closeUnguessed() {
    this.gameService.closeUnguessed();
  }

  public flipped(card: Card) {
    console.log(card);
    this.gameService.flip(card)
  }
}
