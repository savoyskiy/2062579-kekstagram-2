// адрес для получения данных с сервера
const serverUrlGetData = 'https://31.javascript.htmlacademy.pro/kekstagram/data';
// адрес для отправки данных на сервер
const serverUrlPost = 'https://31.javascript.htmlacademy.pro/kekstagram';
// методы
const methodGet = 'GET';
const methodPost = 'POST';
// шаблон сообщения об ошибке загрузки данных
const errorLoadDataTemplate = document.querySelector('#data-error').content.querySelector('.data-error');
const body = document.body;
// время отображения сообщения об ошибке
const REMOVE_ERROR_MESSAGE_TIMEOUT = 5000;

// функция отображения сообщения об ошибке
const showErrorMessage = () => {
  // клонирую элемент по шаблону
  const errorLoadDataElement = errorLoadDataTemplate.cloneNode(true);
  // добавляю клонированный элемент на страницу
  body.append(errorLoadDataElement);
  // нахожу этот элемент
  const errorMessageElement = document.querySelector('.data-error');
  // удаляю его через установленное время
  setTimeout(() => {
    errorMessageElement.remove();
  }, REMOVE_ERROR_MESSAGE_TIMEOUT);
};
// функция обращения к серверу
const loader = async (address, method, requestBody) => {
  const response = await fetch(address, {method, requestBody});
  return response.ok ? await response.json() : Promise.reject();
};
// функция получения данных с сервера
const getServerData = () => loader(serverUrlGetData, methodGet, null);
// функция отправки данных на сервер
const postServerData = (requestBody) => loader(serverUrlPost, methodPost, requestBody);

// запускаю получение данных с сервера и обработку ошибки
const bootstrap = async () => {
  try {
    await getServerData();
  } catch (error) {
    showErrorMessage();
  }
};
bootstrap();

export {getServerData, postServerData, showErrorMessage};
