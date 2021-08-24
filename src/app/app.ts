import { BaseComponent } from '../models/baseComponent';
import { appRoutes, CLASS_MARK } from '../models/constants';
import { createNewElement } from '../models/helpers';
import { CategoryNames, CategoryPass } from '../models/models';
import { CategoryPage } from './body/categoriesPage/categoriesPage';
import { Footer } from './body/footer/footer';
import { MainPage } from './body/mainPage/mainPage';
import { Statistic } from './body/statistic.ts/statistic';
import { Header } from './header/header';
import { ModeButton } from './header/modeBtn';

export class App extends BaseComponent {
  private readonly root: HTMLElement;

  private readonly header: Header;

  private readonly footer: Footer;

  private readonly modeBtn: ModeButton;

  private readonly page: HTMLElement;

  constructor(root: HTMLElement) {
    super('div', ['app']);
    this.root = root;
    this.footer = new Footer(this.element);
    this.header = new Header(this.element);
    this.modeBtn = new ModeButton(this.header.element);
    this.page = createNewElement('div', 'page');
    this.page.id = 'page';
  }

  render(): void {
    this.root.appendChild(this.element);
    this.header.render();
    this.modeBtn.render();
    this.element.appendChild(this.page);
    this.router();
    this.footer.render();
    this.modeBtn.element.addEventListener('click', () => this.changeMode());
  }

  changeMode(): void {
    this.modeBtn.changeMode();
    const linkHome = window.location.hash;
    if (linkHome === '#stat/') {
      this.page.innerHTML = '';
      const newStat = new Statistic(this.page);
      newStat.render();
      newStat.trainDifficultWords();
      return;
    }
    this.router();
  }

  router(): void {
    const main: HTMLElement = document.getElementById(CategoryNames.Main);
    const actions: HTMLElement = document.getElementById(CategoryNames.Actions);
    const animals1: HTMLElement = document.getElementById(CategoryNames.Animals1);
    const animals2: HTMLElement = document.getElementById(CategoryNames.Animals2);
    const emotions: HTMLElement = document.getElementById(CategoryNames.Emotions);
    const family: HTMLElement = document.getElementById(CategoryNames.Family);
    const fruits: HTMLElement = document.getElementById(CategoryNames.Fruits);
    const food: HTMLElement = document.getElementById(CategoryNames.Food);
    const nature: HTMLElement = document.getElementById(CategoryNames.Nature);
    const stat = document.getElementById(CategoryNames.Stat);
    const currentUrl: string = window.location.hash.slice(1);

    const page = appRoutes[currentUrl];
    if (page === CategoryNames.Main) {
      this.page.innerHTML = '';
      new MainPage(this.page).render();
      main.classList.add(CLASS_MARK);
    } else {
      main.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Actions) {
      this.page.innerHTML = '';
      this.routerChange(CategoryPass.Actions);
      actions.classList.add(CLASS_MARK);
    } else {
      actions.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Animals1) {
      this.page.innerHTML = '';
      this.routerChange(CategoryPass.Animals1);
      animals1.classList.add(CLASS_MARK);
    } else {
      animals1.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Animals2) {
      this.page.innerHTML = '';
      this.routerChange(CategoryPass.Animals2);
      animals2.classList.add(CLASS_MARK);
    } else {
      animals2.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Emotions) {
      this.page.innerHTML = '';
      this.routerChange(CategoryPass.Emotions);
      emotions.classList.add(CLASS_MARK);
    } else {
      emotions.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Family) {
      this.page.innerHTML = '';
      this.routerChange(CategoryPass.Family);
      family.classList.add(CLASS_MARK);
    } else {
      family.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Food) {
      this.page.innerHTML = '';
      this.routerChange(CategoryPass.Food);
      food.classList.add(CLASS_MARK);
    } else {
      food.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Fruits) {
      this.page.innerHTML = '';
      this.routerChange(CategoryPass.Fruits);
      fruits.classList.add(CLASS_MARK);
    } else {
      fruits.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Nature) {
      this.page.innerHTML = '';
      this.routerChange(CategoryPass.Nature);
      nature.classList.add(CLASS_MARK);
    } else {
      nature.classList.remove(CLASS_MARK);
    }
    if (page === CategoryNames.Stat) {
      this.page.innerHTML = '';
      new Statistic(this.page).render();
      stat.classList.add(CLASS_MARK);
    } else {
      stat.classList.remove(CLASS_MARK);
    }
  }

  routerChange(category: string): void {
    const categoryPage = new CategoryPage(this.page);
    categoryPage.render();
    categoryPage.cardHandler(category);
  }
}
