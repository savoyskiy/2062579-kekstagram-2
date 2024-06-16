// 1. Функция проверки длины строки:
function validateStringLength (string, maxLength) {
  const result = (string.length <= maxLength);
  return result;
}

validateStringLength ('fgfjfjk', 10);
// // строка 7 символов, макс длина 8, ожидаю true
// console.log(validateStringLength('fngjnch', 8));
// // строка 4 символов, макс длина 4, ожидаю true
// console.log(validateStringLength('fngj', 4));
// // строка 3 символов, макс длина 2, ожидаю false
// console.log(validateStringLength('fng', 2));


// 2. Функция проверки палиндрома:
function validatePalindrom (string) {
  const stringNormalize = string.replaceAll(' ', '').toLowerCase();

  let stringReverse = '';

  for (let i = (stringNormalize.length - 1); i >= 0; i--) {
    stringReverse += stringNormalize.at(i);
  }

  if (stringReverse === stringNormalize) {
    return true;
  } else {
    return false;
  }
}

validatePalindrom ('Лёша на полке клопа нашёл');
// // ожидаем false
// console.log(validatePalindrom ('Клоп на полке Лёшу укусил'));
// // ожидаем true
// console.log(validatePalindrom ('Лёша на полке клопа нашёл'));
