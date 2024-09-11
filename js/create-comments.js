const NUMBER_COMMENTS = 5;
let currentCount = 0;
let comments = [];

// элемент с большой картинкой в ДОМ
const bigPictureElement = document.querySelector('.big-picture');

// элемент со списком комментариев большой картинки
const bigPictureCommentsListElement = bigPictureElement.querySelector('.social__comments');
// элемент одного комментария из списка
const bigPictureCommentItemElement = bigPictureElement.querySelector('.social__comment');
// элемент с количеством комментариев
const bigPictureCommentsCountElement = bigPictureElement.querySelector('.social__comment-count');
// элемент-кнопка для добавления нового комментария
const bigPictureCommentsLoaderElement = bigPictureElement.querySelector('.social__comments-loader');

bigPictureCommentsListElement.innerHTML = '';

const createNextShowingComments = () => {
  const pictureCommentsFragment = document.createDocumentFragment();
  const showingComments = comments.slice(currentCount, currentCount + NUMBER_COMMENTS);
  const showingCommentsLength = showingComments.length + currentCount;

  showingComments.forEach((comment) => {
    const bigPictureCommentItem = bigPictureCommentItemElement.cloneNode(true);

    bigPictureCommentItem.querySelector('.social__picture').src = comment.avatar;
    bigPictureCommentItem.querySelector('.social__picture').alt = comment.name;
    bigPictureCommentItem.querySelector('.social__text').textContent = comment.message;

    pictureCommentsFragment.appendChild(bigPictureCommentItem);
  });

  bigPictureCommentsListElement.appendChild(pictureCommentsFragment);

  bigPictureCommentsCountElement.querySelector('.social__comment-shown-count').textContent = showingCommentsLength;
  bigPictureCommentsCountElement.querySelector('.social__comment-total-count').textContent = comments.length;

  if (showingCommentsLength >= comments.length) {
    bigPictureCommentsLoaderElement.classList.add('hidden');
  }

  currentCount += NUMBER_COMMENTS;
};
// функция показа блока комментариев (при открытии большой картинки)
const createShowingComments = (currentPictureComments) => {
  comments = currentPictureComments;
  createNextShowingComments();

  bigPictureCommentsLoaderElement.addEventListener('click', createNextShowingComments);
};
// функция очистки блока комментариев (при закрытии большой картинки)
const deleteShowingComments = () => {
  currentCount = 0;
  bigPictureCommentsListElement.innerHTML = '';
  bigPictureCommentsLoaderElement.classList.remove('hidden');
  bigPictureCommentsLoaderElement.removeEventListener('click', createNextShowingComments);
};

export {createShowingComments, deleteShowingComments};
