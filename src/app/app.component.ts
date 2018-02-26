import { Component } from '@angular/core';
import { GameService, Card } from './game.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'MemoryGame';
  public cards: Array<Card> = [];
  public pairsLeft: Number;
  public gameWon: boolean;
  /**
   *
   */
  constructor(public gameService: GameService) {
    this.gameService.getCards().subscribe(cards => {
      this.cards = cards;
    });
    this.updateStats();

  }

  public closeUnguessed() {
    this.gameService.closeUnguessed();
  }

  public flipped(card: Card) {
    console.log(card);
    this.gameService.flip(card);
    this.updateStats();
  }

  private updateStats() {
    const pairsGuessed: number = this.gameService.cards.filter(c => c.guessed).length;
    this.pairsLeft = (this.gameService.cards.length - pairsGuessed) / 2;

    if (this.pairsLeft === 0) {
      this.gameWon = true;
    }
  }
}
