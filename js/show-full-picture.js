const bigPictureElement = document.querySelector('.big-picture');
const picturesListElement = document.querySelector('.pictures');
const bigPictureCloser = bigPictureElement.querySelector('.big-picture__cancel');

const showHiddenElement = (evt) => {
  if (evt.target.closest('.pictures')) {
    bigPictureElement.classList.remove('hidden');
  }
};

const closeBigPicture = () => {
  bigPictureElement.classList.add('hidden');
};

picturesListElement.addEventListener('click', showHiddenElement);

bigPictureCloser.addEventListener('click', closeBigPicture);

