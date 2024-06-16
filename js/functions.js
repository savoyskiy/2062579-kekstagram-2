function validateStringLenght (string, maxLenght) {
  if (string.lenght <= maxLenght) {
    return true;
  }

  return false;
}

// строка 6 символов, макс длина 7, ожидаю true
validateStringLenght('fngjhk', 7);
// строка 5 символов, макс длина 5, ожидаю true
validateStringLenght('fngjh', 5);
// строка 6 символов, макс длина 4, ожидаю false
validateStringLenght('fngjhk', 4);
