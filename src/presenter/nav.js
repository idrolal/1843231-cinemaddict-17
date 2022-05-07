import {render} from '../render.js';
import LinkNavBarView from '../view/link-from-nav.js';
import NavBarView from '../view/nav.js';

const link = [
  {
    href: 'all',
    title: 'All movies',
    count: ''
  },{
    href: 'watchlist',
    title: 'Watchlist',
    count: '13'
  },{
    href: 'history',
    title: 'History',
    count: '4'
  },{
    href: 'favorites',
    title: 'Favorites',
    count: '8'
  }
];

export default class NavBarPresenter {
  nav = new NavBarView();
  //   container = new FilmContainerView();
  //   allFilms = new AllFilms();
  init = (navContainer) => {
    this.navContainer = navContainer;

    render(this.nav, navContainer);
    for (let i = 0; i < link.length; i++) {
      render(new LinkNavBarView(link[i]), this.nav.getElement());
    }
  };
}

