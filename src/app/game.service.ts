import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

@Injectable()
export class GameService {

  public cards: Array<Card> = [];
  public guessedPairs: Number = 0;
  public flippedCards: Card[] = [];
  public canFlip = true;
  public turns = 0;

  constructor() {
    this.generateGame(10);
    this.cards = this.shuffleArray(this.cards);
  }

  public getCards() {
    return of(this.cards);
  }

  public generateGame(numberOfPairs: number) {
    // fill board with two cards of each number
    for (let i = 1; i <= numberOfPairs; i++) {
      this.cards.push({
        value: i.toString(),
        flipped: false,
        guessed: false
      });
      this.cards.push({
        value: i.toString(),
        flipped: false,
        guessed: false
      });
    }
  }

  public closeUnguessed() {
    this.cards.forEach(card => {
      if (card.guessed) {
        return;
      }
      card.flipped = false;
    });
  }

  public flip(card: Card) {
    if (!this.canFlip) {
      return;
    }
    card.flipped = true;
    this.flippedCards.push(card);

    if (this.flippedCards.length === 2) {
      if (this.isPair()) {
        this.flippedCards.forEach(c => {
          c.guessed = true;
        });
      } else {
        this.canFlip = false;
        setTimeout(() => {
          this.closeUnguessed();
          this.canFlip = true;

        }, 1000);
      }

      this.turns++;
      this.flippedCards = [];
    }
  }

  private isPair() {
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
