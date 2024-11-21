import { debounce } from "./utilities";

let currentFilter = 'filter-default';
let photos = [];
const filtersElement = document.querySelector('.img-filters');
const ACTIVE_FILTER_CLASS = 'img-filters__button--active';

const appllyFilter = () => {
  let filteredPhotos = [];

  if(currentFilter === 'filter-default') {
    filteredPhotos = photos;
  }
  if(currentFilter === 'filter-random') {
    filteredPhotos = photos.toSorted(() => 0.5 - Math.random()).slice(0, 10);
  }
  if(currentFilter === 'filter-discussed') {
    filteredPhotos = photos.toSorted((a,b) => b.comments.length - a.comments.length);
  }
};

const onfilterChange = (evt) => {
  const targetFilter = evt.target;
  const activeFilter = document.querySelector(`.${ACTIVE_FILTER_CLASS}`);
  if(!targetFilter.matches('button')) {
    return;
  }
  if(activeFilter === targetFilter) {
    return;
  }
  activeFilter.classList.toggle(ACTIVE_FILTER_CLASS);
  targetFilter.classList.toggle(ACTIVE_FILTER_CLASS);
  currentFilter = targetFilter.getAttribute('id');

  appllyFilter();
};

const configFilter = (photosData) => {
  filtersElement.classList.remove('img-filters--inactive');
  filtersElement.addEventListener('click', onfilterChange);
  photos = photosData;
};

export {configFilter};
