/* функция определения длины строки, если длина строки <= заданного значения, возвращает true, иначе false */
let stringLimit = 10; // значение для сравнения
let testString = 'Константин'; // проверяемая строка

function countStringLength (string, limit) {
  return string.length <= limit;
}

console.log('Работа функции определения длины строки. Ожидаю true, получаю ' + countStringLength(testString, stringLimit)); // проверка работы


/* функция проверки строки на палиндром, если строка палиндром, возвращает true, иначе false */
let possiblePalindrome = 'тОпот '; // проверяемая строка

function isPalindrome (string) {
  let preparedString = string.toLowerCase().replaceAll(' ', ''); // приводим к одному регистру и убираем пробелы
  let reversedString = '';

  for (let i = preparedString.length - 1; i >= 0; i--) {
    reversedString += preparedString[i];
  }

  return preparedString === reversedString;
}

console.log('Работа функции проверки строки на палиндром. Ожидаю true, получаю ' + isPalindrome(possiblePalindrome)); // проверка работы


/* функция, извлекающая числа из строки, если цифры в строке есть - возвращает челое положительное число, если нет - возвращает NaN */
let maybeIntegerString = 'год 2025 мечяц 10 число 22'; // заданная строка

function getInteger (string) {
  let preparedString = string.toString(); // если сразу задано число, переводим его в строку
  let integer = '';

  for (let i = 0;i < preparedString.length;i++) {
    let iCharacter = parseInt(preparedString[i]); // записываем i-символ заданной строки в переменную для проверки: если символ не число, записывается NaN
    if (!isNaN(iCharacter)) integer += preparedString[i]; // если i-символ число, вставляем его в новую строку
  }

  return parseInt(integer, 10); // переводим получившуюся строку в число или NaN, если она пуста
}

console.log('Работа функции извлечения числа. Ожидаю 20251022, получаю ' + getInteger(maybeIntegerString)); // проверка работы
