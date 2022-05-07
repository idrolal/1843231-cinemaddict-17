import { createElement } from '../render';

const createNavBar= () => '<nav class="main-navigation"></nav>';

export default class NavBarView {


  getTemplate(){
    return createNavBar();
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
