function validateStringLength (string, maxLength) {
  const result = (string.length <= maxLength);
  return result;
}


// строка 7 символов, макс длина 8, ожидаю true
console.log(validateStringLength('fngjnch', 8));
// строка 4 символов, макс длина 4, ожидаю true
console.log(validateStringLength('fngj', 4));
// строка 3 символов, макс длина 2, ожидаю false
console.log(validateStringLength('fng', 2));
