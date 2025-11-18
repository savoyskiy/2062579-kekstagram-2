import { createPhotosArray } from './create-photos-array.js'; // импорт функции, генерирующей моковые данные
import { createPictures } from './create-pictures.js'; // импорт функции, отрисовывающей изображения на странице
import { picturesContainer, openBigPicture } from './create-big-picture.js'; // импорт функции открытия/закрытия большого изображения
import { uploadImageInput, openUploadForm } from './upload-photo.js'; // импорт функции загрузки изображения
import { MAX_COMMENT_LENGTH, uploadImageForm, commentField, hashtagsField, pristine, validateComment, createErrorHashtagMessage, validateHashTagRules} from './validation-form.js'; // импорт данных валидации полей ввода формы

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

uploadImageForm.addEventListener('submit', (evt) => { // валидация формы
  evt.preventDefault();
  pristine.validate();
});
