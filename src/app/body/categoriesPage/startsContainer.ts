import { BaseComponent } from '../../../models/baseComponent';

export class Stars extends BaseComponent {
  private readonly root: HTMLElement;

  constructor(root: HTMLElement) {
    super('div', ['star-container']);
    this.root = root;
    this.element.id = 'star-container';
  }

  render(): void {
    this.root.appendChild(this.element);
  }
}
