import { BaseComponent } from '../../../models/baseComponent';
import { ImageCategory } from '../../../models/models';
import { Card } from './cards';
import { GameField } from './mainField';

export class MainPage extends BaseComponent {
  private readonly root: HTMLElement;

  private readonly cardsField: GameField;

  constructor(root: HTMLElement) {
    super('div', ['main-page']);
    this.root = root;
    this.cardsField = new GameField();
    this.element.appendChild(this.cardsField.element);
  }

  returnMainPageEl(): HTMLElement {
    return this.element;
  }

  newMainPage(images: string[]): void {
    this.cardsField.clear();
    const cards = images
      .map((url) => new Card(url));
    cards.forEach((card) => {
      card.element.addEventListener('click', () => {
        const linkHome = window.location.pathname;
        document.location.assign(`${linkHome}#/`);
        document.location.assign(`${linkHome}#${card.image.split('/')[1].slice(0, -4)}/`);
      });
    });
    this.cardsField.addCards(cards);
  }

  render(): void {
    this.root.appendChild(this.element);
    this.start();
  }

  clear(): void {
    this.cardsField.element.innerHTML = '';
  }

  async start(): Promise<void> {
    const res: Response = await fetch('./images.json');
    const categories: ImageCategory[] = await res.json();
    const images: string[] = categories[0].images.map((name) => `${categories[0].category}/${name}`);
    this.newMainPage(images);
  }
}
