const getServerData = async () => {
  const response = await fetch('https://31.javascript.htmlacademy.pro/kekstagram/data');
  const data = await response.json();
  return data;
};

export {getServerData};
