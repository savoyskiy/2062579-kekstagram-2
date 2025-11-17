const BODY = document.querySelector('BODY');
const uploadImageForm = document.querySelector('.img-upload__form');
export const uploadImageInput = uploadImageForm.querySelector('.img-upload__input'); // поле загрузки фото
const uploadImageOverlay = uploadImageForm.querySelector('.img-upload__overlay'); // окно загрузки комм-я
const uploadImagePreview = uploadImageForm.querySelector('.img-upload__preview img'); // превьюшка
const uploadImageCancel = uploadImageForm.querySelector('.img-upload__cancel'); // кнопка закрытия

const closeUploadForm = () => {
  uploadImageOverlay.classList.add('hidden');
  BODY.classList.remove('modal-open');

  uploadImageCancel.removeEventListener('click', closeUploadForm); // снять обработчик с крестика

  document.removeEventListener('keydown', onEscapeDown); // снять обработчик с эскейпа

  uploadImagePreview.src = 'img/upload-default-image.jpg'; // вернуть превью значение по-умолчанию
};

const onEscapeDown = (evt) => { // функция закрытия окна по эскейпу
  if (evt.key === 'Escape') {
    closeUploadForm();
  }
};

export const openUploadForm = (evt) => {
  uploadImageOverlay.classList.remove('hidden');
  BODY.classList.add('modal-open');
  /* следующие две строки потребовались, чтобы обойти ошибку 'not allowed to load local resource' */
  const file = evt.target.files[0];
  const source = URL.createObjectURL(file);

  uploadImagePreview.src = source; // подставляем загруженное фото в превью

  uploadImageCancel.addEventListener('click', closeUploadForm); // обработчик на крестик

  document.addEventListener('keydown', onEscapeDown); // повесить обработчик на эскейп
};
