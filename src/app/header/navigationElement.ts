import { BaseComponent } from '../../models/baseComponent';

export class NavigationElement extends BaseComponent {
  private readonly root: HTMLElement;

  private readonly link: string;

  private readonly name: string;

  constructor(root: HTMLElement, href: string, name: string) {
    super('li', ['menu-item']);
    this.root = root;
    this.link = href;
    this.name = name;
  }

  create(): void {
    this.element.innerHTML = `<a class="nav-link" id=${this.name} href=${this.link}>${this.name}</a>`;
  }

  render(): void {
    this.create();
    this.root.appendChild(this.element);
  }
}
