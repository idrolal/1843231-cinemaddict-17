import { createElement } from '../render';

const filmExtra = () => '<section class="films-list films-list--extra"></section>';

export default class FilmExtraView {
  getTemplate() {
    return filmExtra();
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
