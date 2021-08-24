import { BaseComponent } from '../../../models/baseComponent';
import {
  actionsMap, animals1Map, animals2Map, CategoryNames, emotionsMap, familyMap, foodMap, fruitsMap, natureMap,
} from '../../../models/models';

export class Card extends BaseComponent {
  constructor(readonly image: string) {
    super('div', ['card-container']);
    const translateWordString = this.getWord();
    this.element.innerHTML = `
       <div class="card">
        <div class="card-front" id="card-front" id="${this.image.slice(0, -4)}" 
        style="background-image: url('./images/${this.image}')"
         data-audio="${this.image.slice(0, -4)}">
        <div class="card-name">${this.image.split('/')[1].slice(0, -4)}</div>
        </div>
        <div class="card-back" style="background-image: url('./images/${this.image}')">
        <div class="card-translate">${translateWordString}</div></div>
        <div class="rotate ${this.image.split('/')[0]}" data-audio="rotate"></div>
      </div>
      `;
  }

  getWord(): string {
    const map = this.image.split('/')[0];
    const translate = this.image.split('/')[1].slice(0, -4);
    let translateWord;
    if (map === CategoryNames.Actions) {
      translateWord = actionsMap.get(translate);
    }
    if (map === CategoryNames.Animals1) {
      translateWord = animals1Map.get(translate);
    }
    if (map === CategoryNames.Animals2) {
      translateWord = animals2Map.get(translate);
    }
    if (map === CategoryNames.Emotions) {
      translateWord = emotionsMap.get(translate);
    }
    if (map === CategoryNames.Family) {
      translateWord = familyMap.get(translate);
    }
    if (map === CategoryNames.Food) {
      translateWord = foodMap.get(translate);
    }
    if (map === CategoryNames.Fruits) {
      translateWord = fruitsMap.get(translate);
    }
    if (map === CategoryNames.Nature) {
      translateWord = natureMap.get(translate);
    }
    return translateWord;
  }
}
