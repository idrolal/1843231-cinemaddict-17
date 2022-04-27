import FilmCardPresenter from './presenter/film-card.';
import { render } from './render';
import FilterView from './view/filter';
import UserRankView from './view/user-rank';

const siteMainElement = document.querySelector('.main');
const saitHeaderElement = document.querySelector('.header');
const filmCardPresenter = new FilmCardPresenter();

render(new FilterView(), siteMainElement);
render(new UserRankView(), saitHeaderElement);

filmCardPresenter.init(siteMainElement);
