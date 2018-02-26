import { Injectable } from '@angular/core';

@Injectable()
export class GameService {

  public grid: Array<Card> = [];
  public guessedPairs: Number = 0;
  public flippedCards: Card[] = [];

  constructor() {
    this.generateGame(10);
    this.grid = this.shuffleArray(this.grid);
  }

  public generateGame(pairsNumber: number) {
    // fill board with two cards each
    for (let i = 1; i <= pairsNumber; i++) {
      this.grid.push({
        value: i.toString(),
        flipped: false,
        guessed: false
      });
      this.grid.push({
        value: i.toString(),
        flipped: false,
        guessed: false
      });
    }
  }

  public closeUnguessed() {
    this.grid.forEach(card => {
      if (card.guessed) {
        return;
      }
      card.flipped = false;
    });

    this.flippedCards = [];
  }

  public flip(card: Card) {
    if (this.flippedCards.length === 2) {
      if (this.isPair()) {
        this.flippedCards.forEach(c => {
          c.guessed = true;
        });
      }
      this.closeUnguessed();
    }

    card.flipped = true;
    this.flippedCards.push(card);
  }

  public isPair() {
    return this.flippedCards[0].value === this.flippedCards[1].value ? true : false;
  }

  private shuffleArray(arr: any[]) {
    const newArr = arr.slice();
    for (let i = newArr.length; i; i -= 1) {
      const j = Math.floor(Math.random() * i);
      const x = newArr[i - 1];
      newArr[i - 1] = newArr[j];
      newArr[j] = x;
    }
    return newArr;
  }
}

export interface Card {
  value: string;
  flipped: boolean;
  guessed: boolean;
}
