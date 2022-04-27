import { createElement } from '../render';

const createNewButton = () => '<button class="films-list__show-more">Show more</button>';

export default class NewButtonView {
  getTemplate(){
    return createNewButton();
  }

  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate());
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
