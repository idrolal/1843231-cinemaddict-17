import { createElement } from '../render';

const containerFilms = () => '<section class="films"></section>';

export default class AllFilms {
  getTemplate(){
    return containerFilms();
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
