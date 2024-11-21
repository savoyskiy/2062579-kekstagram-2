import './control-slider-effects.js';
import './show-full-picture.js';
import './control-scale-picture.js';
import './upload-picture-form.js';
import {getServerData, showErrorMessage} from './communication-server.js';
import {configFilter} from './filters.js';

// запускаю получение данных с сервера и обработку ошибки
const bootstrap = async () => {
  try {
    await getServerData();
    configFilter();
  } catch (error) {
    showErrorMessage();
  }
};
bootstrap();
