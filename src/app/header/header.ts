import { BaseComponent } from '../../models/baseComponent';
import { BurgerButton } from './burgerBtn';

export class Header extends BaseComponent {
  private readonly root: HTMLElement;

  private readonly burgerBtn: BurgerButton;

  constructor(root: HTMLElement) {
    super('div', ['header']);
    this.root = root;
    this.burgerBtn = new BurgerButton(this.element);
  }

  create(): void {
    this.burgerBtn.render();
  }

  render(): void {
    this.create();
    this.root.appendChild(this.element);
  }
}
