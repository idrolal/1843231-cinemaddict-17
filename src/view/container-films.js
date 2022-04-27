import { createElement } from '../render';

const containerFilm = () => '<div class="films-list__container"></div>';

export default class FilmContainerView {
  getTemplate() {
    return containerFilm();
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
