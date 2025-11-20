export const effectLevelSlider = document.querySelector('.effect-level__slider'); // слайдер
export const effectLevelValue = document.querySelector('.effect-level__value'); // значение слайдера
export const uploadImagePreview = document.querySelector('.img-upload__preview img'); // превьюшка
export const effectsList = document.querySelector('.effects__list'); // список превьюшек фильтров

export let effectName = 'none';
export let effectParameter = '';
effectLevelSlider.classList.add('hidden');

noUiSlider.create(effectLevelSlider, {
  range: {
    min: 0,
    max: 100
  },
  start: 100,
  step: 1,
  connect: 'lower'
});

export const checkEffect = (evt) => {
  const checkedEffect = evt.target.id;

  switch (checkedEffect) {
    case 'effect-none':
      effectLevelSlider.noUiSlider.updateOptions({
        range: {
          min: 0,
          max: 100
        },
        step: 1,
      });
      effectLevelSlider.noUiSlider.set(100);
      effectName = 'none';
      uploadImagePreview.style.filter = `${effectName}`;
      effectLevelSlider.classList.add('hidden');
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
      effectName = 'grayscale';
      effectParameter = '';
      uploadImagePreview.style.filter = `${effectName}(${effectLevelValue.value}${effectParameter})`;
      effectLevelSlider.classList.remove('hidden');
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
      effectName = 'sepia';
      effectParameter = '';
      uploadImagePreview.style.filter = `${effectName}(${effectLevelValue.value}${effectParameter})`;
      effectLevelSlider.classList.remove('hidden');
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
      effectName = 'invert';
      effectParameter = '%';
      uploadImagePreview.style.filter = `${effectName}(${effectLevelValue.value}${effectParameter})`;
      effectLevelSlider.classList.remove('hidden');
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
      effectName = 'blur';
      effectParameter = 'px';
      uploadImagePreview.style.filter = `${effectName}(${effectLevelValue.value}${effectParameter})`;
      effectLevelSlider.classList.remove('hidden');
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
      effectName = 'brightness';
      effectParameter = '';
      uploadImagePreview.style.filter = `${effectName}(${effectLevelValue.value}${effectParameter})`;
      effectLevelSlider.classList.remove('hidden');
      break;
  }
};
