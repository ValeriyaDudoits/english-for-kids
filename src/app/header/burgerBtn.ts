import { BaseComponent } from '../../models/baseComponent';
import { appendChildren, createNewElement } from '../../models/helpers';
import { Navigation } from './navigation';

export class BurgerButton extends BaseComponent {
  private readonly root: HTMLElement;

  private readonly burgerLine1: HTMLElement;

  private readonly burgerLine2: HTMLElement;

  private readonly burgerLine3: HTMLElement;

  private readonly navigation: Navigation;

  constructor(root: HTMLElement) {
    super('div', ['burger-btn']);
    this.root = root;
    this.burgerLine1 = createNewElement('div', 'burger-line1');
    this.burgerLine2 = createNewElement('div', 'burger-line2');
    this.burgerLine3 = createNewElement('div', 'burger-line3');
    this.navigation = new Navigation(this.root);
  }

  create(): void {
    this.navigation.render();
    appendChildren(this.element, this.burgerLine1, this.burgerLine2, this.burgerLine3);
  }

  render(): void {
    this.create();
    this.root.appendChild(this.element);
    this.showMenu();
  }

  showMenu(): void {
    this.element.addEventListener('click', () => {
      this.navigation.showNavigation();
      this.element.classList.toggle('btn-animation');
      this.burgerLine1.classList.toggle('line1-animation');
      this.burgerLine2.classList.toggle('line2-animation');
      this.burgerLine3.classList.toggle('line3-animation');
    });
    this.navigation.element.onmouseleave = () => {
      this.navigation.hideNavigation();
      this.element.classList.remove('btn-animation');
      this.burgerLine1.classList.remove('line1-animation');
      this.burgerLine2.classList.remove('line2-animation');
      this.burgerLine3.classList.remove('line3-animation');
    };
  }
}
