import { BaseComponent } from '../../../models/baseComponent';
import {
  LSItem,
  MAX_NUMBER_OF_CARDS, MIXING_COEFFICIENT, TIME_OF_RESULT_DIV, WORD_ARRAY,
} from '../../../models/constants';
import {
  checkStarContainer,
  createNewElement, playAudio, playAudioTrainMode, setInLSActions,
} from '../../../models/helpers';
import {
  AudioCategory, audioPath, ImageCategory, imagesPath,
} from '../../../models/models';
import { Card } from '../mainPage/cards';
import { GameField } from '../mainPage/mainField';
import { StartGame } from '../startGame/startGame';
import { Star } from './star';
import { Stars } from './startsContainer';

export class CategoryPage extends BaseComponent {
  private readonly root: HTMLElement;

  private readonly cardsField: GameField;

  private counter: number;

  private wrongAnswers: number;

  private audioArray: string[];

  constructor(root: HTMLElement) {
    super('div', ['category-page']);
    this.element.id = 'field';
    this.root = root;
    this.cardsField = new GameField();
    this.element.appendChild(this.cardsField.element);
    this.counter = 0;
    this.audioArray = [];
    this.wrongAnswers = 0;
  }

  render(): void {
    this.root.appendChild(this.element);
  }

  newCategoryPage(images: string[]): void {
    this.cardsField.clear();
    const modeBtn = document.getElementById('mode-input');
    if (modeBtn.classList.contains('play')) {
      const cards = images
        .map((url) => new Card(url));
      cards.forEach((card) => {
        card.element.classList.toggle('play-mode');
      });
      const cardArray: Card[] = [];
      cards.forEach((card) => cardArray.push(card));
      this.cardsField.addCards(cardArray);
      const startBtn = new StartGame(this.element);
      startBtn.render();
      const starContainer = new Stars(this.element);
      starContainer.render();
      startBtn.element.addEventListener('click', () => this.clickStartGame(cardArray), { once: true });
      return;
    }
    const cards = images
      .map((url) => new Card(url));
    cards.forEach((card) => {
      card.element.addEventListener('click', (event) => playAudioTrainMode(event, card));
    });
    this.cardsField.addCards(cards);
  }

  clickStartGame(cardArray: Card[]): void {
    const category = cardArray[0].image.split('/')[0];
    if (cardArray.length < MAX_NUMBER_OF_CARDS) {
      this.getPlayModeInStatistic(cardArray);
      return;
    }
    for (let i = 0; i < cardArray.length; i++) {
      if (cardArray[i].image.split('/')[0] !== category) {
        this.getPlayModeInStatistic(cardArray);
        return;
      }
    }
    this.getPlayMode(cardArray);
  }

  clear(): void {
    this.element.remove();
  }

  async cardHandler(card: string): Promise<void> {
    const res: Response = await fetch('./images.json');
    const categories: ImageCategory[] = await res.json();
    const category = card.split('/')[1].slice(0, -4);
    const imageIndex = imagesPath[category];
    const images = categories[imageIndex].images.map((name) => `${categories[imageIndex].category}/${name}`);
    this.newCategoryPage(images);
  }

  async getPlayMode(cards: Card[]): Promise<void> {
    if (cards.length < 1) {
      return;
    }
    const category = cards[0].image.split('/')[0];
    const res: Response = await fetch('./audio.json');
    const categories: AudioCategory[] = await res.json();
    const audioArrayCategory: string[] = [];
    audioArrayCategory.length = 0;
    audioArrayCategory.push(category);
    const audioIndex = audioPath[audioArrayCategory[0]];
    this.audioArray = categories[audioIndex].audio.map((name) => `${categories[audioIndex].category}/${name}`)
      .sort(() => Math.random() - MIXING_COEFFICIENT);
    this.getGame();
  }

  getPlayModeInStatistic(cards: Card[]): void {
    const audioArrayCategory: string[] = [];
    for (let i = 0; i < cards.length; i++) {
      const audio = `${cards[i].image.slice(0, -4)}.mp3`;
      audioArrayCategory.push(audio);
    }
    audioArrayCategory.sort(() => Math.random() - MIXING_COEFFICIENT);
    this.audioArray = audioArrayCategory;
    this.getGame();
  }

  getGame(): void {
    const field = document.getElementById('field');
    field.addEventListener('click', (event: MouseEvent) => this.checkAnswer(event, field));
    this.gameStep();
  }

  checkAnswer(event: MouseEvent, field: HTMLElement): void {
    const selectCard = (event.target as HTMLElement).dataset.audio;
    const starContainer = document.getElementById('star-container');
    if ((event.target as HTMLElement).classList.contains('guessed')) {
      return;
    }
    if ((event.target as HTMLElement).classList.contains('start-btn')) {
      return;
    }
    if (selectCard === WORD_ARRAY[WORD_ARRAY.length - 1]) {
      const audioWin = new Audio();
      audioWin.preload = 'auto';
      audioWin.src = './audio/yes.mp3';
      audioWin.play();
      audioWin.addEventListener('ended', () => {
        if (this.counter === this.audioArray.length) {
          return;
        }
        (event.target as HTMLElement).classList.add('guessed');
        this.counter += 1;
        checkStarContainer();
        const star = new Star(starContainer);
        star.renderFullStar();
        field.removeEventListener('click', (e: MouseEvent) => this.checkAnswer(e, field));
        setInLSActions(LSItem.Correct, WORD_ARRAY[WORD_ARRAY.length - 1].split('/')[1]);
        this.gameStep();
      });
    } else {
      playAudio('./audio/ops.mp3');
      this.wrongAnswers += 1;
      setInLSActions(LSItem.Wrong, WORD_ARRAY[WORD_ARRAY.length - 1].split('/')[1]);
      checkStarContainer();
      const star = new Star(starContainer);
      star.renderEmptyStar();
    }
  }

  gameStep(): void {
    if (this.counter === this.audioArray.length) {
      this.endGame();
      return;
    }
    const startGameBtn = document.getElementById('start-btn');
    startGameBtn.classList.add('repeat');
    startGameBtn.addEventListener('click', () => this.repeatAudio());
    playAudio(`./audio/${this.audioArray[this.counter]}`);
    const word = this.audioArray[this.counter].slice(0, -4);
    WORD_ARRAY.push(word);
  }

  repeatAudio(): void {
    playAudio(`./audio/${this.audioArray[this.counter]}`);
  }

  endGame(): void {
    this.counter = 0;
    this.audioArray = [];
    WORD_ARRAY.length = 0;
    const startGameBtn = document.getElementById('start-btn');
    startGameBtn.classList.remove('repeat');
    if (this.wrongAnswers < 1) {
      playAudio('./audio/win.mp3');
      const success = createNewElement('div', 'success');
      this.element.appendChild(success);
      setTimeout(() => {
        success.remove();
        const linkHome = window.location.pathname;
        document.location.assign(`${linkHome}#/`);
      }, TIME_OF_RESULT_DIV);
    } else {
      playAudio('./audio/fail.mp3');
      const wrong = createNewElement('div', 'wrong');
      const mistakes = createNewElement('div', 'mistake-text');
      mistakes.innerText = `You have ${this.wrongAnswers} mistakes`;
      wrong.appendChild(mistakes);
      this.element.appendChild(wrong);
      setTimeout(() => {
        wrong.remove();
        const linkHome = window.location.pathname;
        document.location.assign(`${linkHome}#/`);
      }, TIME_OF_RESULT_DIV);
    }
  }
}
