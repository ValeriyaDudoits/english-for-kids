import { Card } from '../app/body/mainPage/cards';
import {
  LSItem, NUMBER_OF_STARS_IN_CONTAINER, Word,
} from './constants';
import {
  ArrayStatistic, categoryByName, CategoryNames, translationByName,
} from './models';

export const createNewElement = (element: string, ...classes: string[]): HTMLElement => {
  const newElement = document.createElement(element);
  classes.forEach((item) => {
    newElement.classList.add(item);
  });
  return newElement;
};

export const appendChildren = (parent: HTMLElement, ...children: HTMLElement[]): void => {
  children.forEach((item) => {
    parent.appendChild(item);
  });
};

export function playAudio(src: string): void {
  const audio = new Audio();
  audio.preload = 'auto';
  audio.src = src;
  audio.play();
}

export function checkStarContainer(): void {
  const starContainerNum = document.getElementById('star-container').childElementCount;
  if (starContainerNum > NUMBER_OF_STARS_IN_CONTAINER) {
    const container = document.getElementById('star-container');
    container.innerHTML = '';
  }
}
export function setInLSActions(action: string, key: string): void {
  const res = JSON.parse(localStorage.getItem(`${key}`));
  if (action === LSItem.Click) {
    res.clicks += 1;
  }
  if (action === LSItem.Correct) {
    res.correct += 1;
    const allAnswers = res.wrong / (res.wrong + res.correct);
    res.persents = Math.round(allAnswers * 100);
  }
  if (action === LSItem.Wrong) {
    res.wrong += 1;
    const allAnswers = res.wrong / (res.wrong + res.correct);
    res.persents = Math.round(allAnswers * 100);
  }
  localStorage.setItem(`${key}`, JSON.stringify(res));
}

export async function playAudioTrainMode(event: MouseEvent, card: Card): Promise<void> {
  const audioName = (event.target as HTMLElement).dataset.audio;
  if (audioName === 'rotate') {
    card.element.classList.add('translate');
    card.element.onmouseleave = () => {
      card.element.classList.remove('translate');
    };
    return;
  }
  setInLSActions(LSItem.Click, audioName.split('/')[1]);
  playAudio(`./audio/${audioName}.mp3`);
}

export const createNewElementWithText = (element: string, text?: string, ...classes: string[]): HTMLElement => {
  const newElement = document.createElement(element);
  classes.forEach((item) => {
    newElement.classList.add(item);
  });
  newElement.innerText = `${text}`;
  return newElement;
};

export function createElem(root: HTMLElement,
  wordStorage: string,
  translationStorage: string,
  categoryStorage: string,
  clicksStorage: string,
  correctStorage: string,
  wrongStorage: string,
  persents: number): void {
  const word = createNewElementWithText('div', `${wordStorage}`, 'stat-word');
  const translation = createNewElementWithText('div', `${translationStorage}`, 'stat-translation');
  const category = createNewElementWithText('div', `${categoryStorage}`, 'stat-category');
  const clicks = createNewElementWithText('div', `${clicksStorage}`, 'stat-clicks');
  const correct = createNewElementWithText('div', `${correctStorage}`, 'stat-correct');
  const wrong = createNewElementWithText('div', `${wrongStorage}`, 'stat-wrong');
  const per = createNewElementWithText('div', `${persents}`, 'stat-persents');
  appendChildren(root, word, translation, category, clicks, correct, wrong, per);
}

export function createObject(word: string, translation: string, category: string): ArrayStatistic {
  const objGeneral = {
    word: `${word}`,
    translation: `${translation}`,
    category: `${category}`,
    clicks: 0,
    correct: 0,
    wrong: 0,
    persents: 0,
  };
  return objGeneral;
}

export function setItemInLocalStorage(word: string): void {
  localStorage.setItem(word, JSON.stringify(createObject(word, translationByName[word], categoryByName[word])));
}
export function setStorage(): void {
  if (localStorage.getItem(Word.Climb) == null) {
    setItemInLocalStorage(Word.Climb);
  }
  if (localStorage.getItem(Word.Dive) == null) {
    setItemInLocalStorage(Word.Dive);
  }
  if (localStorage.getItem(Word.Drive) == null) {
    setItemInLocalStorage(Word.Drive);
  }
  if (localStorage.getItem(Word.Fly) == null) {
    setItemInLocalStorage(Word.Fly);
  }
  if (localStorage.getItem(Word.Jump) == null) {
    setItemInLocalStorage(Word.Jump);
  }
  if (localStorage.getItem(Word.Ride) == null) {
    setItemInLocalStorage(Word.Ride);
  }
  if (localStorage.getItem(Word.Run) == null) {
    setItemInLocalStorage(Word.Run);
  }
  if (localStorage.getItem(Word.Walk) == null) {
    setItemInLocalStorage(Word.Walk);
  }
  if (localStorage.getItem(Word.Cat) == null) {
    setItemInLocalStorage(Word.Cat);
  }
  if (localStorage.getItem(Word.Elephant) == null) {
    setItemInLocalStorage(Word.Elephant);
  }
  if (localStorage.getItem(Word.Fish) == null) {
    setItemInLocalStorage(Word.Fish);
  }
  if (localStorage.getItem(Word.Monkey) == null) {
    setItemInLocalStorage(Word.Monkey);
  }
  if (localStorage.getItem(Word.Pig) == null) {
    setItemInLocalStorage(Word.Pig);
  }
  if (localStorage.getItem(Word.Shark) == null) {
    setItemInLocalStorage(Word.Shark);
  }
  if (localStorage.getItem(Word.Sheep) == null) {
    setItemInLocalStorage(Word.Sheep);
  }
  if (localStorage.getItem(Word.Squirrel) == null) {
    setItemInLocalStorage(Word.Squirrel);
  }
  if (localStorage.getItem(Word.Bee) == null) {
    setItemInLocalStorage(Word.Bee);
  }
  if (localStorage.getItem(Word.Dog) == null) {
    setItemInLocalStorage(Word.Dog);
  }
  if (localStorage.getItem(Word.Frog) == null) {
    setItemInLocalStorage(Word.Frog);
  }
  if (localStorage.getItem(Word.Giraffe) == null) {
    setItemInLocalStorage(Word.Giraffe);
  }
  if (localStorage.getItem(Word.Horse) == null) {
    setItemInLocalStorage(Word.Horse);
  }
  if (localStorage.getItem(Word.Lion) == null) {
    setItemInLocalStorage(Word.Lion);
  }
  if (localStorage.getItem(Word.Panda) == null) {
    setItemInLocalStorage(Word.Panda);
  }
  if (localStorage.getItem(Word.Rabbit) == null) {
    setItemInLocalStorage(Word.Rabbit);
  }
  if (localStorage.getItem(Word.Angry) == null) {
    setItemInLocalStorage(Word.Angry);
  }
  if (localStorage.getItem(Word.Brave) == null) {
    setItemInLocalStorage(Word.Brave);
  }
  if (localStorage.getItem(Word.Confused) == null) {
    setItemInLocalStorage(Word.Confused);
  }
  if (localStorage.getItem(Word.Crying) == null) {
    setItemInLocalStorage(Word.Crying);
  }
  if (localStorage.getItem(Word.Happy) == null) {
    setItemInLocalStorage(Word.Happy);
  }
  if (localStorage.getItem(Word.Sad) == null) {
    setItemInLocalStorage(Word.Sad);
  }
  if (localStorage.getItem(Word.Sick) == null) {
    setItemInLocalStorage(Word.Sick);
  }
  if (localStorage.getItem(Word.Surprised) == null) {
    setItemInLocalStorage(Word.Surprised);
  }
  if (localStorage.getItem(Word.Brother) == null) {
    setItemInLocalStorage(Word.Brother);
  }
  if (localStorage.getItem(CategoryNames.Family) == null) {
    setItemInLocalStorage(CategoryNames.Family);
  }
  if (localStorage.getItem(Word.Father) == null) {
    setItemInLocalStorage(Word.Father);
  }
  if (localStorage.getItem(Word.Friend) == null) {
    setItemInLocalStorage(Word.Friend);
  }
  if (localStorage.getItem(Word.Grandma) == null) {
    setItemInLocalStorage(Word.Grandma);
  }
  if (localStorage.getItem(Word.Grandpa) == null) {
    setItemInLocalStorage(Word.Grandpa);
  }
  if (localStorage.getItem(Word.Mother) == null) {
    setItemInLocalStorage(Word.Mother);
  }
  if (localStorage.getItem(Word.Sister) == null) {
    setItemInLocalStorage(Word.Sister);
  }
  if (localStorage.getItem(Word.Bread) == null) {
    setItemInLocalStorage(Word.Bread);
  }
  if (localStorage.getItem(Word.Burger) == null) {
    setItemInLocalStorage(Word.Burger);
  }
  if (localStorage.getItem(Word.IceCream) == null) {
    setItemInLocalStorage(Word.IceCream);
  }
  if (localStorage.getItem(Word.Cake) == null) {
    setItemInLocalStorage(Word.Cake);
  }
  if (localStorage.getItem(Word.Cookies) == null) {
    setItemInLocalStorage(Word.Cookies);
  }
  if (localStorage.getItem(Word.Donuts) == null) {
    setItemInLocalStorage(Word.Donuts);
  }
  if (localStorage.getItem(Word.Rice) == null) {
    setItemInLocalStorage(Word.Rice);
  }
  if (localStorage.getItem(Word.Tako) == null) {
    setItemInLocalStorage(Word.Tako);
  }
  if (localStorage.getItem(Word.Apple) == null) {
    setItemInLocalStorage(Word.Apple);
  }
  if (localStorage.getItem(Word.Cherry) == null) {
    setItemInLocalStorage(Word.Cherry);
  }
  if (localStorage.getItem(Word.Banana) == null) {
    setItemInLocalStorage(Word.Banana);
  }
  if (localStorage.getItem(Word.Grapes) == null) {
    setItemInLocalStorage(Word.Grapes);
  }
  if (localStorage.getItem(Word.Lemon) == null) {
    setItemInLocalStorage(Word.Lemon);
  }
  if (localStorage.getItem(Word.Orange) == null) {
    setItemInLocalStorage(Word.Orange);
  }
  if (localStorage.getItem(Word.Peach) == null) {
    setItemInLocalStorage(Word.Peach);
  }
  if (localStorage.getItem(Word.Pear) == null) {
    setItemInLocalStorage(Word.Pear);
  }
  if (localStorage.getItem(Word.Beach) == null) {
    setItemInLocalStorage(Word.Beach);
  }
  if (localStorage.getItem(Word.Flower) == null) {
    setItemInLocalStorage(Word.Flower);
  }
  if (localStorage.getItem(Word.Forest) == null) {
    setItemInLocalStorage(Word.Forest);
  }
  if (localStorage.getItem(Word.Lake) == null) {
    setItemInLocalStorage(Word.Lake);
  }
  if (localStorage.getItem(Word.Mountain) == null) {
    setItemInLocalStorage(Word.Mountain);
  }
  if (localStorage.getItem(Word.Rainbow) == null) {
    setItemInLocalStorage(Word.Rainbow);
  }
  if (localStorage.getItem(Word.Snow) == null) {
    setItemInLocalStorage(Word.Snow);
  }
  if (localStorage.getItem(Word.Tree) == null) {
    setItemInLocalStorage(Word.Tree);
  }
}

export function resetLocalStorage(): void {
  localStorage.clear();
  setStorage();
}
