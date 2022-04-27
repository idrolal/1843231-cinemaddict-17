<section class="film-details">
  <form class="film-details__inner" action="" method="get">

  </form>
</section>
import { createElement } from '../render';

const createPopup = () => '<p class="profile__rating">Movie Buff</p>';

export default class PopaupView {
  getTemplate() {
    return createPopup();
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
