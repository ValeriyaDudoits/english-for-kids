import { BaseComponent } from '../../../models/baseComponent';
import { Card } from './cards';

export class GameField extends BaseComponent {
  private cards: Card[] = [];

  constructor() {
    super('div', ['game-field']);
  }

  clear(): void {
    this.cards = [];
    this.element.innerHTML = '';
  }

  addCards(cards: Card[]): void {
    this.cards = cards;
    this.cards.forEach((card) => this.element.appendChild(card.element));
  }
}
