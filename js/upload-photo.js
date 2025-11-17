const BODY = document.querySelector('BODY');
const uploadImageForm = document.querySelector('.img-upload__form'); // форма загрузки фото
export const uploadImageInput = uploadImageForm.querySelector('.img-upload__input'); // поле загрузки фото
const uploadImageOverlay = uploadImageForm.querySelector('.img-upload__overlay'); // окно загрузки комм-я
const uploadImagePreview = uploadImageForm.querySelector('.img-upload__preview img'); // превьюшка
const uploadImageCancel = uploadImageForm.querySelector('.img-upload__cancel'); // кнопка закрытия
const effectsPreviews = uploadImageForm.querySelectorAll('.effects__preview'); // превьюшки в фильтрах


const closeUploadForm = () => { // функция закрытия формы
  uploadImageOverlay.classList.add('hidden');
  BODY.classList.remove('modal-open');

  uploadImageCancel.removeEventListener('click', closeUploadForm); // снять обработчик с крестика

  document.removeEventListener('keydown', onEscapeDown); // снять обработчик с эскейпа

  uploadImageInput.value = ''; // вернуть полю загрузки фото значение по-умолчанию
};

const onEscapeDown = (evt) => { // функция закрытия окна по эскейпу
  if (evt.key === 'Escape') {
    closeUploadForm();
  }
};

export const openUploadForm = (evt) => { // функция открытия формы
  uploadImageOverlay.classList.remove('hidden');
  BODY.classList.add('modal-open');
  /* следующие две строки потребовались, чтобы обойти ошибку 'not allowed to load local resource' */
  const file = evt.target.files[0];
  const source = URL.createObjectURL(file);

  uploadImagePreview.src = source; // подставляем загруженное фото в превью

  effectsPreviews.forEach((effectsPreview) => { // и в превьюшки эффектов
    effectsPreview.style.backgroundImage = `url(${source})`;
  });

  uploadImageCancel.addEventListener('click', closeUploadForm); // обработчик на крестик

  document.addEventListener('keydown', onEscapeDown); // повесить обработчик на эскейп
};
