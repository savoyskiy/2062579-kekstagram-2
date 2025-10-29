/* функция определения длины строки, если длина строки <= заданного значения, возвращает true, иначе false */
const stringLimit = 10; // значение для сравнения
const testString = 'Самолёт'; // проверяемая строка

const countStringLength = (string = 'Робот', limit = 5) => string.length <= limit;

countStringLength(testString, stringLimit);


/* функция проверки строки на палиндром, если строка палиндром, возвращает true, иначе false */
const possiblePalindrome = 'ТопОт '; // проверяемая строка

const isPalindrome = (string = 'довод') => {
  const preparedString = string.toString().toLowerCase().replaceAll(' ', ''); // приводим к строке (если задана не строка), одному регистру и убираем пробелы
  let reversedString = '';

  for (let i = preparedString.length - 1; i >= 0; i--) {
    reversedString += preparedString[i];
  }

  return preparedString === reversedString;
};

isPalindrome(possiblePalindrome);


/* функция, извлекающая числа из строки, если цифры в строке есть - возвращает целое положительное число, если нет - возвращает NaN */
const maybeIntegerString = 'год 2025 месяц 10 число 22'; // заданная строка

const getInteger = (string = '101') => {
  const preparedString = string.toString(); // если сразу задано число, переводим его в строку
  let integer = '';

  for (let i = 0;i < preparedString.length;i++) {
    const iCharacter = parseInt(preparedString[i], 10); // записываем i-символ заданной строки в переменную для проверки: если символ не цифра, записывается NaN
    if (!isNaN(iCharacter)) {
      integer += preparedString[i];
    } // если i-символ цифра, вставляем его в новую строку
  }

  return parseInt(integer, 10); // переводим получившуюся строку в число или NaN, если она пуста
};

getInteger(maybeIntegerString);

// Дополнительные функции
/*
2635. Apply Transform Over Each Element in Array, solve it without the built-in Array.map method
https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
*/

const originalArray = [1, 2, 3, 4, 5]; // исходный массив
const sumFunction = (i, n) => i + n; // функция суммирует поступающие аргументы
const multiplicateFunction = (i, n) => i * n; // функция перемножает поступающие аргументы
const increaser = 5; // значение, на которое увеличиваются элементы исходного массива

// увеличивает или умножает каждый элемент исходного массива на increaser в зависимости от переданной функции
const getNewArray = (array, transformer) => {
  const newArray = [];
  for (let i = 0; i < array.length; i++) {
    newArray[i] = transformer(array[i], increaser);
  }
  return newArray;
};

getNewArray(originalArray, sumFunction); // элементы исходного массива увеличиваются на increaser
getNewArray(originalArray, multiplicateFunction); // элементы исходного массива умножаются на increaser

/*
2620. Counter. Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
https://leetcode.com/problems/counter/description/
*/

const createCounter = (start) => {
  let startNumber = start;
  return () => startNumber++;
};

const getResult = createCounter(10);
getResult();
getResult();
getResult();
getResult();

/*
2634. Filter Elements from Array. Filtered Array should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. Solve it without the built-in Array.filter method.
https://leetcode.com/problems/filter-elements-from-array/description/
*/
const minusN = (number, N) => number - N; // функция, меняющая исходный массив
const someNumber = 1; // какое-то число для изменения исходного массива

const getFilteredArray = (Array, filter) => {
  const filteredArray = [];
  for (let i = 0; i < Array.length; i++) {
    if (filter(Array[i], someNumber)) { // проверка на truthy-значение
      filteredArray.push(filter(Array[i], someNumber));
    }
  }
  return filteredArray;
};

getFilteredArray(originalArray, minusN);
