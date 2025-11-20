import { createPhotosArray } from './create-photos-array.js'; // импорт функции, генерирующей моковые данные
import { createPictures } from './create-pictures.js'; // импорт функции, отрисовывающей изображения на странице
import { picturesContainer, openBigPicture } from './create-big-picture.js'; // импорт функции открытия/закрытия большого изображения
import { uploadImageInput, openUploadForm } from './upload-photo.js'; // импорт функции загрузки изображения
import { MAX_COMMENT_LENGTH, commentField, hashtagsField, pristine, validateComment, createErrorHashtagMessage, validateHashTagRules } from './validation-form.js'; // импорт данных валидации полей ввода формы

/* формируем объект с моковыми данными */
const photosArray = createPhotosArray();

/* отрисовываем изображения */
createPictures(photosArray);

/* открываем большое фото */
picturesContainer.addEventListener('click', (evt) => openBigPicture(evt, photosArray));

/* открываем форму загрузки фото */
uploadImageInput.addEventListener('change', (evt) => openUploadForm(evt));

/* валидируем поля ввода формы загрузки фото */
pristine.addValidator(commentField, validateComment, `Не более ${MAX_COMMENT_LENGTH} символов`); // проверка комментария
pristine.addValidator(hashtagsField, validateHashTagRules, createErrorHashtagMessage); // проверка хэштэгов


/* фильтры */
const effectLevelSlider = document.querySelector('.effect-level__slider'); // слайдер
const effectLevelValue = document.querySelector('.effect-level__value'); // значение слайдера
const uploadImagePreview = document.querySelector('.img-upload__preview img'); // превьюшка
const effectsList = document.querySelector('.effects__list'); // список превьюшек фильтров
const effectsPreviews = document.querySelectorAll('.effects__preview'); // превьюшки в фильтрах

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1,
  connect: 'lower'
});

effectLevelSlider.noUiSlider.on('update', () => {
  effectLevelValue.value = effectLevelSlider.noUiSlider.get();
  console.log(effectLevelValue.value);
});

effectsList.addEventListener('change', (evt) => {
  const checkedEffect = evt.target.id;

  switch (checkedEffect) {
    case 'effect-none':
      console.log(checkedEffect);
      break;
    case 'effect-chrome':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.set(1);
      console.log(checkedEffect);
      break;
    case 'effect-sepia':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 1
        },
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.set(1);
      console.log(checkedEffect);
      break;
    case 'effect-marvin':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        step: 1,
      });
      effectLevelSlider.noUiSlider.set(100);
      console.log(checkedEffect);
      break;
    case 'effect-phobos':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 3
        },
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.set(3);
      console.log(checkedEffect);
      break;
    case 'effect-heat':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 1,
          max: 3
        },
        step: 0.1,
      });
      effectLevelSlider.noUiSlider.set(3);
      console.log(checkedEffect);
      break;
  }
});
