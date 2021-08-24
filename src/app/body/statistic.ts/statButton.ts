import { BaseComponent } from '../../../models/baseComponent';

export class StatBtn extends BaseComponent {
  private readonly root: HTMLElement;

  constructor(root: HTMLElement, classes: string, text: string) {
    super('div', [`${classes}`]);
    this.root = root;
    this.element.id = `${classes}`;
    this.element.innerText = text;
  }

  render(): void {
    this.root.appendChild(this.element);
  }
}
