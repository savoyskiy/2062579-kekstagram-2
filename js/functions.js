// // 1. Функция проверки длины строки:
// function validateStringLength (string, maxLength) {
//   const result = (string.length <= maxLength);
//   return result;
// }

// validateStringLength ('fgfjfjk', 10);


// // 2. Функция проверки палиндрома:
// function validatePalindrom (string) {
//   const stringNormalize = string.replaceAll(' ', '').toLowerCase(); // нормализуем полученную строку

//   let stringReverse = ''; // создаем новую перевернутую

//   for (let i = (stringNormalize.length - 1); i >= 0; i--) { // заполняем перевенутую строку
//     stringReverse += stringNormalize.at(i);
//   }

//   const result = (stringReverse === stringNormalize); // сверяем перевернутую и полученную
//   return result;
// }

// validatePalindrom ('Лёша на полке клопа нашёл');


// // 3. Функция извлечения числа:
// function getNumber (string) {
//   const stringNormalize = string.toString().replaceAll(' ', ''); // явно приводим полученные данные к типу строка и удаляем все пробелы

//   let stringNumber = ''; // создаем новую строку

//   for (let i = 0; i < stringNormalize.length; i++) { // заполняем новую строку только цифрами
//     if (stringNormalize.at(i) >= 0 && stringNormalize.at(i) <= 9) {
//       stringNumber += stringNormalize.at(i);
//     }
//   }

//   const result = parseInt(stringNumber, 10); // приводим полученную строку к целому числу
//   return result;
// }

// getNumber('а я томат-2024');


// 4. Функция "Делу - время"
const calculateWorkTime = (startWork, endWork, startMeeting, timeMeeting) => {
  const startWorkSplit = startWork.split(':');
  const endWorkSplit = endWork.split(':');
  const startMeetingSplit = startMeeting.split(':');

  const startWorkHour = Number(startWorkSplit[0]);
  const startWorkMinute = Number(startWorkSplit[1]);
  const endWorkHour = Number(endWorkSplit[0]);
  const endWorkMinute = Number(endWorkSplit[1]);
  const startMeetingHour = Number(startMeetingSplit[0]);
  const startMeetingMinute = Number(startMeetingSplit[1]);

  const startWorkTime = startWorkHour * 60 + startWorkMinute;
  const endWorkTime = endWorkHour * 60 + endWorkMinute;
  const startMeetingTime = startMeetingHour * 60 + startMeetingMinute;
  const timeToEnd = endWorkTime - startMeetingTime;

  // console.log(startWorkHour, startWorkMinute, startWorkTime);
  // console.log(endWorkHour, endWorkMinute, endWorkTime);
  // console.log(startMeetingHour, startMeetingMinute, startMeetingTime);
  // console.log(timeToEnd, timeMeeting);

  if (startMeetingTime < startWorkTime || startMeetingTime > endWorkTime || timeToEnd < timeMeeting) {
    return false;
  } else {
    return true;
  }
};

calculateWorkTime('08:30', '17:30', '14:00', 90);

