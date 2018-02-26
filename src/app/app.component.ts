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
  constructor(gameService: GameService) {
    this.cards = gameService.grid;
  }
}
