import { createElement } from '../render';

const filmList = () => '<section class="films-list"></section>';

export default class FilmListView {
  getTemplate() {
    return filmList();
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}

