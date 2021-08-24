import { BaseComponent } from '../../models/baseComponent';
import { Link } from '../../models/constants';
import { CategoryNames } from '../../models/models';
import { NavigationElement } from './navigationElement';

export class Navigation extends BaseComponent {
  private readonly root: HTMLElement;

  constructor(root: HTMLElement) {
    super('ul', ['menu']);
    this.root = root;
  }

  create(): void {
    new NavigationElement(this.element, Link.Main, CategoryNames.Main).render();
    new NavigationElement(this.element, Link.Actions, CategoryNames.Actions).render();
    new NavigationElement(this.element, Link.Animals1, CategoryNames.Animals1).render();
    new NavigationElement(this.element, Link.Animals2, CategoryNames.Animals2).render();
    new NavigationElement(this.element, Link.Emotions, CategoryNames.Emotions).render();
    new NavigationElement(this.element, Link.Family, CategoryNames.Family).render();
    new NavigationElement(this.element, Link.Food, CategoryNames.Food).render();
    new NavigationElement(this.element, Link.Fruits, CategoryNames.Fruits).render();
    new NavigationElement(this.element, Link.Nature, CategoryNames.Nature).render();
    new NavigationElement(this.element, Link.Stat, CategoryNames.Stat).render();
  }

  render(): void {
    this.create();
    this.root.appendChild(this.element);
  }

  showNavigation(): void {
    this.element.classList.toggle('menu-show');
  }

  hideNavigation(): void {
    this.element.classList.remove('menu-show');
  }
}
