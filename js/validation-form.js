const uploadImageForm = document.querySelector('.img-upload__form'); // форма загрузки фото
const commentField = uploadImageForm.querySelector('.text__description'); // поле ввода комментария
const hashtagsField = uploadImageForm.querySelector('.text__hashtags'); // поле ввода хэштэгов
const hashtagRules = /^#[a-zа-яё0-9]{1,19}$/i; // регулярное выражение для валидации хэштэга

const pristine = new Pristine(uploadImageForm, {
  // class of the parent element where the error/success class is added
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  // class of the parent element where error text element is appended
  errorTextParent: 'img-upload__field-wrapper'
});

const validateComment = () => commentField.value.length <= 140;

const validateHashTag = () => hashtagRules.test(hashtagsField.value);

pristine.addValidator(commentField, validateComment, 'Не более 140 символов');

pristine.addValidator(hashtagsField, validateHashTag, 'Неликвид');

uploadImageForm.addEventListener('submit',(evt) => {
  evt.preventDefault();
  pristine.validate();
});
