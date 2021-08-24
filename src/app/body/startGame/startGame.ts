import { BaseComponent } from '../../../models/baseComponent';

export class StartGame extends BaseComponent {
  private readonly root: HTMLElement;

  constructor(root: HTMLElement) {
    super('div', ['start-btn']);
    this.root = root;
    this.element.id = 'start-btn';
  }

  render(): void {
    this.root.appendChild(this.element);
  }
}
