import { BaseComponent } from '../../../models/baseComponent';
import { Criterion, MAX_NUMBER_OF_CARDS } from '../../../models/constants';
import {
  appendChildren, createElem, createNewElement, createNewElementWithText, resetLocalStorage,
} from '../../../models/helpers';
import { ArrayStatistic } from '../../../models/models';
import { CategoryPage } from '../categoriesPage/categoriesPage';
import { StatBtn } from './statButton';

export class Statistic extends BaseComponent {
  private readonly root: HTMLElement;

  private readonly resetBtn: StatBtn;

  private readonly trainBtn: StatBtn;

  private countName: number;

  constructor(root: HTMLElement) {
    super('div', ['statistic']);
    this.root = root;
    this.resetBtn = new StatBtn(this.element, 'reset', 'reset statistic');
    this.trainBtn = new StatBtn(this.element, 'train', 'train difficult words');
    this.countName = 0;
  }

  render(): void {
    this.resetBtn.render();
    this.trainBtn.render();
    this.addWords();
    this.root.appendChild(this.element);
    this.resetBtn.element.addEventListener('click', () => {
      resetLocalStorage();
      this.element.innerHTML = '';
      this.render();
    });
    this.trainBtn.element.addEventListener('click', () => {
      this.trainDifficultWords();
    });
  }

  addWords(): void {
    // this.sortByPersents();
    this.sortBy(Criterion.Persents);
  }

  createHeader(root: HTMLElement): void {
    const word = createNewElementWithText('div', 'word', 'stat-word');
    const translation = createNewElementWithText('div', 'translation', 'stat-translation');
    const category = createNewElementWithText('div', 'category', 'stat-category');
    const clicks = createNewElementWithText('div', 'clicks', 'stat-clicks');
    const correct = createNewElementWithText('div', 'correct', 'stat-correct');
    const wrong = createNewElementWithText('div', 'wrong', 'stat-wrong');
    const persents = createNewElementWithText('div', '%', 'stat-persents');
    appendChildren(root, word, translation, category, clicks, correct, wrong, persents);
    word.addEventListener('click', () => {
      this.sortBy(Criterion.Name);
    });
    clicks.addEventListener('click', () => this.sortBy(Criterion.Click));
    wrong.addEventListener('click', () => this.sortBy(Criterion.Wrong));
    correct.addEventListener('click', () => this.sortBy(Criterion.Correct));
    translation.addEventListener('click', () => this.sortBy(Criterion.Translation));
    category.addEventListener('click', () => this.sortBy(Criterion.Category));
    persents.addEventListener('click', () => this.sortBy(Criterion.Persents));
  }

  sortBy(criterion: string): ArrayStatistic[] {
    if (document.getElementById('table') !== null) {
      document.getElementById('table').remove();
    }
    const statTable = createNewElement('div', 'stat-table');
    statTable.id = 'table';
    const statHeader = createNewElement('div', 'stat-header');
    this.createHeader(statHeader);
    statTable.appendChild(statHeader);
    let array: ArrayStatistic[] = [];
    const keys = Object.keys(localStorage);
    keys.forEach((key) => {
      const res = JSON.parse(localStorage.getItem(key));
      array.push(res);
    });
    if (criterion === Criterion.Name) {
      array = this.sortByName(array);
    }
    if (criterion === Criterion.Click) {
      array = this.sortByClicks(array);
    }
    if (criterion === Criterion.Wrong) {
      array = this.sortByWrong(array);
    }
    if (criterion === Criterion.Correct) {
      array = this.sortByCorrect(array);
    }
    if (criterion === Criterion.Translation) {
      array = this.sortByTranslation(array);
    }
    if (criterion === Criterion.Category) {
      array = this.sortByCategory(array);
    }
    if (criterion === Criterion.Persents) {
      array = this.sortByPersents(array);
    }
    for (let i = 0; i < array.length; i++) {
      const statElem = createNewElement('div', 'stat-elem');
      const res = JSON.parse(localStorage.getItem(array[i].word));
      createElem(statElem, res.word, res.translation, res.category, res.clicks, res.correct, res.wrong, res.persents);
      statTable.appendChild(statElem);
    }
    this.element.appendChild(statTable);
    this.countName += 1;
    return array;
  }

  sortByName(array: ArrayStatistic[]): ArrayStatistic[] {
    if (this.countName % 2 === 0) {
      array.sort((obj1, obj2) => {
        if (obj1.word < obj2.word) return -1;
        if (obj1.word > obj2.word) return 1;
        return 0;
      });
    } else {
      array.sort((obj1, obj2) => {
        if (obj1.word < obj2.word) return -1;
        if (obj1.word > obj2.word) return 1;
        return 0;
      }).reverse();
    }
    return array;
  }

  sortByClicks(array: ArrayStatistic[]): ArrayStatistic[] {
    if (this.countName % 2 === 0) {
      array.sort((obj1, obj2) => obj1.clicks - obj2.clicks);
    } else {
      array.sort((obj1, obj2) => obj1.clicks - obj2.clicks).reverse();
    }
    return array;
  }

  sortByWrong(array: ArrayStatistic[]): ArrayStatistic[] {
    if (this.countName % 2 === 0) {
      array.sort((obj1, obj2) => obj1.wrong - obj2.wrong);
    } else {
      array.sort((obj1, obj2) => obj1.wrong - obj2.wrong).reverse();
    }
    return array;
  }

  sortByCorrect(array: ArrayStatistic[]): ArrayStatistic[] {
    if (this.countName % 2 === 0) {
      array.sort((obj1, obj2) => obj1.correct - obj2.correct);
    } else {
      array.sort((obj1, obj2) => obj1.correct - obj2.correct).reverse();
    }
    return array;
  }

  sortByTranslation(array: ArrayStatistic[]): ArrayStatistic[] {
    if (this.countName % 2 === 0) {
      array.sort((obj1, obj2) => {
        if (obj1.translation < obj2.translation) return -1;
        if (obj1.translation > obj2.translation) return 1;
        return 0;
      });
    } else {
      array.sort((obj1, obj2) => {
        if (obj1.translation < obj2.translation) return -1;
        if (obj1.translation > obj2.translation) return 1;
        return 0;
      }).reverse();
    }
    return array;
  }

  sortByCategory(array: ArrayStatistic[]): ArrayStatistic[] {
    if (this.countName % 2 === 0) {
      array.sort((obj1, obj2) => {
        if (obj1.category < obj2.category) return -1;
        if (obj1.category > obj2.category) return 1;
        return 0;
      });
    } else {
      array.sort((obj1, obj2) => {
        if (obj1.category < obj2.category) return -1;
        if (obj1.category > obj2.category) return 1;
        return 0;
      }).reverse();
    }
    return array;
  }

  sortByPersents(array: ArrayStatistic[]): ArrayStatistic[] {
    if (this.countName % 2 === 0) {
      array.sort((obj1, obj2) => obj1.persents - obj2.persents);
    } else {
      array.sort((obj1, obj2) => obj1.persents - obj2.persents).reverse();
    }
    return array;
  }

  async trainDifficultWords(): Promise<void> {
    this.countName = 1;
    const arrayWithStatAll = this.sortBy(Criterion.Persents);
    const arrayWithStat = [];
    for (let i = 0; i < MAX_NUMBER_OF_CARDS; i++) {
      arrayWithStat.push(arrayWithStatAll[i]);
    }
    for (let i = 0; i < arrayWithStat.length; i++) {
      if (arrayWithStat[i].persents === 0) {
        arrayWithStat.length = i;
      }
    }
    if (arrayWithStat.length < 1) {
      const message = createNewElementWithText('div', 'There are no difficult words!', 'message');
      this.element.appendChild(message);
      return;
    }
    const arrayForCards = [];
    for (let i = 0; i < arrayWithStat.length; i++) {
      arrayForCards.push(`${arrayWithStat[i].category}/${arrayWithStat[i].word}.jpg`);
    }
    const page = document.getElementById('page');
    page.innerHTML = '';
    const newPage = new CategoryPage(page);
    newPage.render();
    newPage.newCategoryPage(arrayForCards);
  }
}
