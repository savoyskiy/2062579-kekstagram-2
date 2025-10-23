/* функция определения длины строки, если длина строки <= заданного значения, возвращает true, иначе false */
const stringLimit = 10; // значение для сравнения
const testString = 'Самолёт'; // проверяемая строка

const countStringLength = (string, limit) => string.length <= limit;

console.log('Работа функции определения длины строки. Ожидаю true, получаю ' + countStringLength(testString, stringLimit)); // проверка работы


/* функция проверки строки на палиндром, если строка палиндром, возвращает true, иначе false */
const possiblePalindrome = 'тОпот '; // проверяемая строка

const isPalindrome = (string) => {
  const preparedString = string.toLowerCase().replaceAll(' ', ''); // приводим к одному регистру и убираем пробелы
  let reversedString = '';

  for (let i = preparedString.length - 1; i >= 0; i--) {
    reversedString += preparedString[i];
  }

  return preparedString === reversedString;
}

console.log('Работа функции проверки строки на палиндром. Ожидаю true, получаю ' + isPalindrome(possiblePalindrome)); // проверка работы


/* функция, извлекающая числа из строки, если цифры в строке есть - возвращает челое положительное число, если нет - возвращает NaN */
const maybeIntegerString = 'год 2025 месяц 10 число 22'; // заданная строка

const getInteger = (string) => {
  const preparedString = string.toString(); // если сразу задано число, переводим его в строку
  let integer = '';

  for (let i = 0;i < preparedString.length;i++) {
    let iCharacter = parseInt(preparedString[i], 10); // записываем i-символ заданной строки в переменную для проверки: если символ не цифра, записывается NaN
    if (!isNaN(iCharacter)) integer += preparedString[i]; // если i-символ цифра, вставляем его в новую строку
  }

  return parseInt(integer, 10); // переводим получившуюся строку в число или NaN, если она пуста
}

console.log('Работа функции извлечения числа. Ожидаю 20251022, получаю ' + getInteger(maybeIntegerString)); // проверка работы
