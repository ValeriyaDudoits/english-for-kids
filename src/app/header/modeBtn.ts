import { BaseComponent } from '../../models/baseComponent';
import { Mode } from '../../models/constants';
import { appendChildren, createNewElement } from '../../models/helpers';

export class ModeButton extends BaseComponent {
  private readonly root: HTMLElement;

  private readonly modeInput: HTMLElement;

  private readonly modeLable: HTMLElement;

  private readonly modeHandle: HTMLElement;

  private readonly modeTrainText: HTMLElement;

  private readonly modePlayText: HTMLElement;

  constructor(root: HTMLElement) {
    super('div', ['mode-btn']);
    this.root = root;
    this.modeInput = createNewElement('input', 'mode-input');
    this.modeLable = createNewElement('label', 'mode-label');
    this.modeHandle = createNewElement('span', 'mode-handle');
    this.modeTrainText = createNewElement('span', 'mode-train-text', 'active');
    this.modePlayText = createNewElement('span', 'mode-play-text');
  }

  create(): void {
    this.modeHandle.id = 'mode-input';
    (this.modeInput as HTMLInputElement).type = 'checkbox';
    (this.modeInput as HTMLInputElement).name = 'change-mode';
    (this.modeLable as HTMLLabelElement).htmlFor = 'change-mode';
    this.modeTrainText.innerText = Mode.Train;
    this.modePlayText.innerText = Mode.Play;
    appendChildren(this.modeLable, this.modeHandle, this.modePlayText, this.modeTrainText);
    appendChildren(this.element, this.modeInput, this.modeLable);
  }

  render(): void {
    this.create();
    this.root.appendChild(this.element);
  }

  changeMode(): void {
    this.modeHandle.classList.toggle('play');
    this.modeTrainText.classList.toggle('active');
    this.modePlayText.classList.toggle('active');
    const startBtn = document.getElementById('start-btn');
    if (startBtn) {
      startBtn.classList.toggle('hidden');
    }
  }
}
