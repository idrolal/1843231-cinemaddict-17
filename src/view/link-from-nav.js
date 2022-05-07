import { createElement } from '../render';

const createLink= (obj) => {
  let result;
  if(obj.count.length > 0){
    result += `<a href=#${obj.href}" class="main-navigation__item">${obj.title} <span class="main-navigation__item-count">${obj.count}</a>`;
  } else {
    result +=`<a href=#${obj.href}" class="main-navigation__item main-navigation__item--active">${obj.title}</a>`;
  }
  return result;
};

export default class LinkNavBarView {
  constructor(link) {
    this.link = link;
  }

  getTemplate(link){
    return createLink(link);
  }

  getElement(){
    if(!this.element){
      this.element = createElement(this.getTemplate(this.link));
    }
    return this.element;
  }

  removeElement(){
    this.element = null;
  }
}
