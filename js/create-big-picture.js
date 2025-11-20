const BODY = document.querySelector('BODY');
export const picturesContainer = document.querySelector('.pictures'); // контейнер с фото
const bigPicture = document.querySelector('.big-picture'); // большое фото
const bigPictureCancel = bigPicture.querySelector('.big-picture__cancel'); // крестик на большом фото
const bigPictureImg = bigPicture.querySelector('.big-picture__img img'); // большое фото
const socialCaption = bigPicture.querySelector('.social__caption'); // описание фото
const socialCommentsTotal = bigPicture.querySelector('.social__comment-total-count'); // кол-во комментариев
const likesCount = bigPicture.querySelector('.likes-count'); // кол-во лайков
const socialComments = bigPicture.querySelector('.social__comments'); // блок с комментариями
const socialCommentCount = bigPicture.querySelector('.social__comment-count'); //
const commentsLoader = bigPicture.querySelector('.comments-loader');

const createCommentsListItem = (comment) => { // ф-я создания комментария
  const commentListItem = document.createElement('LI');
  commentListItem.classList.add('social__comment');
  const commentText = document.createElement('P');
  commentText.classList.add('social__text');
  commentText.textContent = comment.message;
  const commentAvatar = document.createElement('IMG');
  commentAvatar.classList.add('social__picture');
  commentAvatar.width = '35';
  commentAvatar.height = '35';
  commentAvatar.src = comment.avatar;
  commentAvatar.alt = comment.name;
  commentListItem.append(commentAvatar, commentText);
  socialComments.append(commentListItem);
};

const closeBigPicture = () => { // функция закрытия окна
  bigPicture.classList.add('hidden'); // закрыть окно

  socialCommentCount.classList.remove('hidden'); // прячем блоки по заданию 8.14
  commentsLoader.classList.remove('hidden'); // прячем блоки по заданию 8.14
  BODY.classList.remove('modal-open');

  bigPictureCancel.removeEventListener('click', closeBigPicture); // снять обработчик с крестика

  document.removeEventListener('keydown', onEscapeDown); // снять обработчик с эскейпа
};

function onEscapeDown (evt) { // ф-я закрытия окна по эскейпу
  if (evt.key === 'Escape') {
    closeBigPicture();
  }
}

const packBigPictureData = (array, id) => { // функция заполнения полей большого фото
  bigPictureImg.src = array[id].url;
  socialCaption.textContent = array[id].description;
  socialCommentsTotal.textContent = array[id].comments.length;
  likesCount.textContent = array[id].likes;
  socialComments.innerHTML = '';
  array[id].comments.forEach(createCommentsListItem);
};

export const openBigPicture = (evt, array) => { // функция открытия окна
  if (evt.target.matches('.picture__img')) {
    bigPicture.classList.remove('hidden'); // открыть окно

    const index = evt.target.id - 1; // определяем индекс элемента в объекте
    packBigPictureData(array, index); // заполняем модальное окно данными большого фото из объекта
    socialCommentCount.classList.add('hidden'); // прячем блоки по заданию 8.14
    commentsLoader.classList.add('hidden'); // прячем блоки по заданию 8.14
    BODY.classList.add('modal-open');

    bigPictureCancel.addEventListener('click', closeBigPicture); // повесить обработчик на крестик

    document.addEventListener('keydown', onEscapeDown); // повесить обработчик на эскейп
  }
};
