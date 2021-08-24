import { BaseComponent } from '../../../models/baseComponent';

export class Footer extends BaseComponent {
  private readonly root: HTMLElement;

  constructor(root: HTMLElement) {
    super('div', ['footer']);
    this.root = root;
    this.element.innerHTML = `<div class="logo"><a href="https://rs.school/js/"></a></div>
   <div><a href="https://github.com/ValeriyaDudoits" class="git">ValeriyaDudoits 2021</a></div>`;
  }

  render(): void {
    this.root.appendChild(this.element);
  }
}
