import { debounce } from './utilities';
import {createPicturesArray} from './create-pictures';

// переменная для текущего фильтра
let currentFilter = 'filter-default';
let photos = [];
// нахожу элемент с фильтрами
const filtersElement = document.querySelector('.img-filters');
// класс для активного фильтра
const ACTIVE_FILTER_CLASS = 'img-filters__button--active';

const debounceRender = debounce(createPicturesArray);

// функция применения фильтров
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
  debounceRender(filteredPhotos);
};

const onfilterChange = (evt) => {
  // фильтр, который выбирается кликом
  const targetFilter = evt.target;
  // активный фильтр
  const activeFilter = document.querySelector(`.${ACTIVE_FILTER_CLASS}`);
  // проверки, куда был клик
  if(!targetFilter.matches('button')) {
    return; // если клик не в кнопку фильтра, ничего не делается
  }
  if(activeFilter === targetFilter) {
    return; // если клик по активному, ничего не делается
  }
  // если клик в неактивный фильтр, переключаю класс с активного на выбранный
  activeFilter.classList.toggle(ACTIVE_FILTER_CLASS);
  targetFilter.classList.toggle(ACTIVE_FILTER_CLASS);
  currentFilter = targetFilter.getAttribute('id');
  // запускаю применение фильтров
  appllyFilter();
};

const configFilter = (photosData) => {
  // отображаю блок фильтров на странице
  filtersElement.classList.remove('img-filters--inactive');
  // подписываю блок на клики
  filtersElement.addEventListener('click', onfilterChange);
  // записываю в массив photos полученные с сервера данные
  photos = photosData;
};
// экспортирую
export {configFilter};
