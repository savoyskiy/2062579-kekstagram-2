export const scaleControlSmaller = document.querySelector('.scale__control--smaller'); // кнопка уменьшения масштаба
export const scaleControlBigger = document.querySelector('.scale__control--bigger'); // кнопка увеличения масштаба
const scaleControlValue = document.querySelector('.scale__control--value'); // поле значения масштаба
const uploadImagePreview = document.querySelector('.img-upload__preview img'); // превьюшка

let scaleValue = parseInt(scaleControlValue.value, 10);

export const smallPhotoScale = () => {
  if (scaleValue > 25) {
    scaleValue -= 25;
    uploadImagePreview.style.scale = `${scaleValue}%`;
    scaleControlValue.value = `${scaleValue}%`;
  }
};

export const bigPhotoScale = () => {
  if (scaleValue < 100) {
    scaleValue += 25;
    uploadImagePreview.style.scale = `${scaleValue}%`;
    scaleControlValue.value = `${scaleValue}%`;
  }
};

