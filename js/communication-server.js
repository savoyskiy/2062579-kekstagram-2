let gotData = 0;

fetch('https://31.javascript.htmlacademy.pro/kekstagram/data')
  .then((response) => response.json())
  .then((data) => {
    gotData = data;
    return gotData;
  });

export {gotData};
