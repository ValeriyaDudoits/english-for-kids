import { App } from './app/app';
import { setStorage } from './models/helpers';
import './style/main.scss';

const rootNode: HTMLElement = document.querySelector('#app');
const app = new App(rootNode);
window.onload = () => {
  const linkHome = window.location.pathname;
  document.location.assign(`${linkHome}#/`);
  app.render();
  setStorage();
};
window.onhashchange = () => {
  app.router();
};
