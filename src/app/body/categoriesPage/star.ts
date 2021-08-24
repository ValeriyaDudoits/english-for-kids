import { BaseComponent } from '../../../models/baseComponent';

export class Star extends BaseComponent {
  private readonly root: HTMLElement;

  constructor(root: HTMLElement) {
    super('div', ['star']);
    this.root = root;
    this.element.id = 'star';
  }

  renderFullStar(): void {
    this.element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <g fill="#ffd900" stroke="#ffd900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </g>
    </svg>`;
    this.root.appendChild(this.element);
  }

  renderEmptyStar(): void {
    this.element.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32">
        <g fill="none" stroke="#ffd900" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <path d="M16 2 L20 12 30 12 22 19 25 30 16 23 7 30 10 19 2 12 12 12 Z" />
        </g>
    </svg>`;
    this.root.appendChild(this.element);
  }
}
