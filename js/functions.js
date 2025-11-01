const startMeeteng = '09:05'; // время начала встречи
const lengthMeeteng = 90; // длительность встречи
const startWork = '33:00'; // начало работы
const endWork = '17:00'; // окончание работы
const MINUTES_IN_HOUR = 60;

const compareMeteengWork = (start, end, time, meetLength) => {
  const timeArray = [start, end, time];
  // проверки, что в вводные данные в верных форматах и с нужным разделителем
  for (let i = 0; i < 3; i++) {
    if (typeof timeArray[i] !== 'string' || !timeArray[i].includes(':')) {
      return 'Введите данные в верном формате \'чч:мм\'';
    }
  }
  if (typeof lengthMeeteng !== 'number') {
    return 'Введите продолжительность встречи числом (в минутах)';
  }
  /* высчитываем минуты начала/конца дня и встречи */
  const startDayMinute = Number(start.split(':')[0]) * MINUTES_IN_HOUR + Number(start.split(':')[1]);
  const startMeetMinute = Number(time.split(':')[0]) * MINUTES_IN_HOUR + Number(time.split(':')[1]);
  const endDayMinute = Number(end.split(':')[0]) * MINUTES_IN_HOUR + Number(end.split(':')[1]);
  const endMeetMinute = startMeetMinute + meetLength;

  if (isNaN(startDayMinute) || isNaN(startMeetMinute) || isNaN(endDayMinute)) { // проверка, что удалось преобразовать в число (т.е. данные введены в нужном формате)
    return 'Введите данные в верном формате \'чч:мм\'';
  }
  if (startDayMinute > 1440 || startMeetMinute > 1440 || endDayMinute > 1440) { // проверка, что время введено корректно
    return 'Время не может быть больше 24:00';
  }
  if (startDayMinute > startMeetMinute || endMeetMinute > endDayMinute) { // если начало/конец встречи раньше начала/позже конца раб.дня возвращаем false
    return false;
  }

  return true;
};

compareMeteengWork(startWork, endWork, startMeeteng, lengthMeeteng);


// /* функция определения длины строки, если длина строки <= заданного значения, возвращает true, иначе false */
// const stringLimit = 10; // значение для сравнения
// const testString = 'Самолёт'; // проверяемая строка

// const countStringLength = (string = 'Робот', limit = 5) => string.length <= limit;

// countStringLength(testString, stringLimit);


// /* функция проверки строки на палиндром, если строка палиндром, возвращает true, иначе false */
// const possiblePalindrome = 'ТопОт '; // проверяемая строка

// const isPalindrome = (string = 'довод') => {
//   const preparedString = string.toString().toLowerCase().replaceAll(' ', ''); // приводим к строке (если задана не строка), одному регистру и убираем пробелы
//   let reversedString = '';

//   for (let i = preparedString.length - 1; i >= 0; i--) {
//     reversedString += preparedString[i];
//   }

//   return preparedString === reversedString;
// };

// isPalindrome(possiblePalindrome);


// /* функция, извлекающая числа из строки, если цифры в строке есть - возвращает целое положительное число, если нет - возвращает NaN */
// const maybeIntegerString = 'год 2025 месяц 10 число 22'; // заданная строка

// const getInteger = (string = '101') => {
//   const preparedString = string.toString(); // если сразу задано число, переводим его в строку
//   let integer = '';

//   for (let i = 0;i < preparedString.length;i++) {
//     const iCharacter = parseInt(preparedString[i], 10); // записываем i-символ заданной строки в переменную для проверки: если символ не цифра, записывается NaN
//     if (!isNaN(iCharacter)) {
//       integer += preparedString[i];
//     } // если i-символ цифра, вставляем его в новую строку
//   }

//   return parseInt(integer, 10); // переводим получившуюся строку в число или NaN, если она пуста
// };

// getInteger(maybeIntegerString);


// // Дополнительные функции
// /*
// 2635. Apply Transform Over Each Element in Array, solve it without the built-in Array.map method
// https://leetcode.com/problems/apply-transform-over-each-element-in-array/description/
// */

// const originalArray = [1, 2, 3, 4, 5]; // исходный массив
// const sumFunction = (i, n) => i + n; // функция суммирует поступающие аргументы
// const multiplicateFunction = (i, n) => i * n; // функция перемножает поступающие аргументы
// const increaser = 5; // значение, на которое увеличиваются элементы исходного массива

// // увеличивает или умножает каждый элемент исходного массива на increaser в зависимости от переданной функции
// const getNewArray = (array, transformer) => {
//   const newArray = [];
//   for (let i = 0; i < array.length; i++) {
//     newArray[i] = transformer(array[i], increaser);
//   }
//   return newArray;
// };

// getNewArray(originalArray, sumFunction); // элементы исходного массива увеличиваются на increaser
// getNewArray(originalArray, multiplicateFunction); // элементы исходного массива умножаются на increaser


// /*
// 2620. Counter. Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).
// https://leetcode.com/problems/counter/description/
// */

// const createCounter = (start) => {
//   let startNumber = start;
//   return () => startNumber++;
// };

// const getResult = createCounter(10);
// getResult();
// getResult();
// getResult();
// getResult();


// /*
// 2634. Filter Elements from Array. Filtered Array should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. Solve it without the built-in Array.filter method.
// https://leetcode.com/problems/filter-elements-from-array/description/
// */
// const minusN = (number, N) => number - N; // функция, меняющая исходный массив
// const someNumber = 1; // какое-то число для изменения исходного массива

// const getFilteredArray = (Array, filter) => {
//   const filteredArray = [];
//   for (let i = 0; i < Array.length; i++) {
//     if (filter(Array[i], someNumber)) { // проверка на truthy-значение
//       filteredArray.push(filter(Array[i], someNumber));
//     }
//   }
//   return filteredArray;
// };

// getFilteredArray(originalArray, minusN);


// /*
// 2626. Array Reduce Transformation. Given an integer array nums, a reducer function fn, and an initial value init, return the final result obtained by executing the fn function on each element of the array, sequentially, passing in the return value from the calculation on the preceding element. Solve it without using the built-in Array.reduce method.
// https://leetcode.com/problems/array-reduce-transformation/description/
// */
// const emptyArray = [];
// const anotherArray = [10, 25, 30, 45, 50, 65, 70];
// const initialNumber = 10;

// const summArray = (accum, current) => { // суммирует значения массива
//   const result = accum += current;
//   return result;
// };

// const multiplicateArray = (accum, current) => { // перемножает значения массива
//   const result = accum *= current;
//   return result;
// };

// const reduceArray = (Array, reduser, init) => {
//   let reducedArray = init;
//   for (let i = 0; i < Array.length; i++) {
//     reducedArray = reduser(reducedArray, Array[i]);
//   }
//   return reducedArray;
// };

// reduceArray(emptyArray, summArray, initialNumber);
// reduceArray(anotherArray, summArray, initialNumber);
// reduceArray(originalArray, multiplicateArray, initialNumber);


// /*
// 2648. Generate Fibonacci Sequence. Write a generator function that returns a generator object which yields the fibonacci sequence.
// https://leetcode.com/problems/generate-fibonacci-sequence/description/
// */
// const callNumber = 10; // число шагов .next()

// const generateFibonacci = function* (first, second) { // генераторная функция последовательности
//   const sequence = [];
//   yield sequence[0] = first;
//   yield sequence[1] = second;
//   let i = 1;
//   while (true) {
//     i++;
//     yield sequence[i] = sequence[i - 1] + sequence[i - 2];
//   }
// };

// const generatorSequence = (number, generator, one, two) => { // функция запускающая генераторную указанное число раз (number)
//   const fibonacciSequence = [];
//   const gen = generator(one, two);
//   for (let i = 0; i < number; i++) {
//     fibonacciSequence[i] = gen.next().value;
//   }
//   return fibonacciSequence;
// };

// generatorSequence(callNumber, generateFibonacci, 0, 1);
