
import {render} from '../render.js';
import FilmCardView from '../view/film-card.js';
import FilmListdView from '../view/film-list.js';
import NewButtonView from '../view/btn-show-more.js';
import FilmContainerView from '../view/container-films.js';
import AllFilms from '../view/all-films.js';

const list = [
  {
    title: 'The Dance of Life',
    rating: 8.3,
    year: 1929,
    duration: '1h 55m',
    genre: 'Musical',
    src: './images/posters/the-dance-of-life.jpg',
    description: 'Burlesque comic Ralph "Skid" Johnson (Skelly), and specialty dancer Bonny Lee King (Carroll), end up together on a cold, rainy night at a tr…',
    comments: '5 comments'
  },
  {
    title: 'Sagebrush Trail',
    rating: 3.2,
    year: 1933,
    duration: '54m',
    genre: 'Western',
    src: './images/posters/sagebrush-trail.jpg',
    description: 'Sentenced for a murder he did not commit, John Brant escapes from prison determined to find the real killer. By chance Brant\'s narrow escap…',
    comments: '89 comments'
  },
  {
    title: 'The Man with the Golden Arm',
    rating: 9.0,
    year: 1955,
    duration: '1h 59m',
    genre: 'Drama',
    src: './images/posters/the-man-with-the-golden-arm.jpg',
    description: 'Frankie Machine (Frank Sinatra) is released from the federal Narcotic Farm in Lexington, Kentucky with a set of drums and a new outlook on…',
    comments: '18 comments'
  },
  {
    title: 'Santa Claus Conquers the Martians',
    rating: 2.3,
    year: 1964,
    duration: '1h 21m',
    genre: 'Comedy',
    src: './images/posters/santa-claus-conquers-the-martians.jpg',
    description: 'The Martians Momar ("Mom Martian") and Kimar ("King Martian") are worried that their children Girmar ("Girl Martian") and Bomar ("Boy Marti…',
    comments: '465 comments'
  },
  {
    title: 'Popeye the Sailor Meets Sindbad the Sailor',
    rating: 5.3,
    year: 1936,
    duration: '16m',
    genre: 'Cartoon',
    src: './images/posters/popeye-meets-sinbad.png',
    description: 'In this short, Sindbad the Sailor (presumably Bluto playing a "role") proclaims himself, in song, to be the greatest sailor, adventurer and…',
    comments: '0 comments'
  }
];

export default class FilmCardPresenter {
  list = new FilmListdView();
  container = new FilmContainerView();
  allFilms = new AllFilms();
  init = (filmContainer) => {
    this.filmContainer = filmContainer;

    render(this.allFilms, filmContainer);
    render(this.list, this.allFilms.getElement());
    render(this.container, this.list.getElement());

    for (let i = 0; i < list.length; i++) {
      render(new FilmCardView(list[i]), this.container.getElement());
    }
    render(new NewButtonView(), this.list.getElement());
  };
}
