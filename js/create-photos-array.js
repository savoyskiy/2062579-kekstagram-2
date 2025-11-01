import {getRandomNumber, createId} from './utils';
import {getDataArrays} from './data.js';

const LIKES_NUMBER = { // количество лайков от мин до макс
  MIN: 15,
  MAX: 200
};
const COMMENTS_NUMBER = { // количесвто генерируемых комментариев
  MIN: 0,
  MAX: 30
};
const AVATAR_NUMBER = { // номера генерируемых аватарок
  MIN: 1,
  MAX: 6
};
/* деструктурируем импортированные данные */
const {PHOTOS_DESCRIPTIONS, RAW_MESSAGES, NAMES} = getDataArrays();

/* функция генерации сообщения в комментарии */
const getMessage = (messagesArray) => {
  const message1 = messagesArray[getRandomNumber(0, messagesArray.length - 1)];
  const message2 = messagesArray[getRandomNumber(0, messagesArray.length - 1)];
  let message = message1;
  if (message1 !== message2) {
    message += ` ${message2}`;
  }
  return message;
};

/* функция генерации id комментария, первый id=1 */
const getIdComment = createId(1);

/* функция генерации массива комментариев */
const getCommentsArray = (names, messages) => {
  const comments = [];
  const commentsNumber = getRandomNumber(COMMENTS_NUMBER.MIN, COMMENTS_NUMBER.MAX);
  for (let i = 0;i < commentsNumber;i++) {
    const comment = {
      id: getIdComment(),
      avatar: `img/avatar-${getRandomNumber(AVATAR_NUMBER.MIN, AVATAR_NUMBER.MAX)}.svg`,
      message: getMessage(messages),
      name: names[getRandomNumber(0, names.length - 1)]
    };
    comments.push(comment);
  }
  return comments;
};

/* функция генерации массива объектов с фотографиями */
const getPhotosArray = () => {
  const photos = [];
  for (let i = 1;i <= PHOTOS_DESCRIPTIONS.length;i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: PHOTOS_DESCRIPTIONS[i - 1],
      likes: getRandomNumber(LIKES_NUMBER.MIN, LIKES_NUMBER.MAX),
      comments: getCommentsArray(NAMES, RAW_MESSAGES, i)
    };
    photos.push(photo);
  }
  return photos;
};

export {getPhotosArray};

/* альтернативный вариант: функция формирует один объект с описанием одного фото. На основе этой функции формируется массив объектов заданной длины */

const PHOTOS_ID = { // идентификаторы фотографий по ТЗ от 1 до 25
  START: 1,
  END: 25
};

const getIdPhoto = createId(PHOTOS_ID.START); // счетчик id для фотографий

const getPhotoDescription = () => { // функция формирования одного объекта описания фото
  const Id = getIdPhoto();
  const photo = {
    id: Id,
    url: `photos/${Id}.jpg`,
    description: PHOTOS_DESCRIPTIONS[Id - 1],
    likes: getRandomNumber(LIKES_NUMBER.MIN, LIKES_NUMBER.MAX),
    comments: getCommentsArray(NAMES, RAW_MESSAGES, Id)
  };
  return photo;
};

const createPhotosArray = () => Array.from({ length: PHOTOS_ID.END}, getPhotoDescription); // функция, формирующая массив описаний

export {createPhotosArray};
