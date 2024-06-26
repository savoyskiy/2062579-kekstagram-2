// 1. Функция проверки длины строки:
const validateStringLength = (string, maxLength) => string.length <= maxLength;

validateStringLength ('fgfjfjk', 10);


// 2. Функция проверки палиндрома:
const validatePalindrom = (string) => {
  const stringNormalize = string.replaceAll(' ', '').toLowerCase(); // нормализуем полученную строку

  let stringReverse = ''; // создаем новую перевернутую

  for (let i = (stringNormalize.length - 1); i >= 0; i--) { // заполняем перевенутую строку
    stringReverse += stringNormalize.at(i);
  }

  const result = (stringReverse === stringNormalize); // сверяем перевернутую и полученную
  return result;
};

validatePalindrom ('Лёша на полке клопа нашёл');


// 3. Функция извлечения числа:
const getNumber = (string) => {
  const stringNormalize = string.toString().replaceAll(' ', ''); // явно приводим полученные данные к типу строка и удаляем все пробелы

  let stringNumber = ''; // создаем новую строку

  for (let i = 0; i < stringNormalize.length; i++) { // заполняем новую строку только цифрами
    if (stringNormalize.at(i) >= 0 && stringNormalize.at(i) <= 9) {
      stringNumber += stringNormalize.at(i);
    }
  }

  const result = parseInt(stringNumber, 10); // приводим полученную строку к целому числу
  return result;
};

getNumber('а я томат-2024');
