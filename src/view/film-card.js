import { createElement } from '../render';


const cardOfFilm = (obj) => `<article class="film-card">
<a class="film-card__link">
  <h3 class="film-card__title">${obj.title}</h3>
  <p class="film-card__rating">${obj.rating}</p>
  <p class="film-card__info">
    <span class="film-card__year">${obj.year}</span>
    <span class="film-card__duration">${obj.duration}</span>
    <span class="film-card__genre">${obj.genre}</span>
  </p>
  <img src=${obj.src}  alt="" class="film-card__poster">
  <p class="film-card__description">${obj.description}</p>
  <span class="film-card__comments">${obj.comments}</span>
</a>
<div class="film-card__controls">
  <button class="film-card__controls-item film-card__controls-item--add-to-watchlist" type="button">Add to watchlist</button>
  <button class="film-card__controls-item film-card__controls-item--mark-as-watched" type="button">Mark as watched</button>
  <button class="film-card__controls-item film-card__controls-item--favorite" type="button">Mark as favorite</button>
</div>
</article>`;

export default class FilmCardView {
  constructor(films) {
    this.films = films;
  }

  getTemplate(films) {
    return cardOfFilm(films);
  }

  getElement() {
    if (!this.element) {
      this.element = createElement(this.getTemplate(this.films));
    }
    return this.element;
  }

  removeElement() {
    this.element = null;
  }
}
