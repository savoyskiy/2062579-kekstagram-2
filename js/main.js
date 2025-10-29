/* массив с описаниями к фото */
const PHOTOS_DESCRIPTIONS = [
  'Что-то на пляжном',
  'Без указателя бы не нашёл!',
  'Кому водички?',
  'Очень красивые глаза',
  'Напомнило "Особо опасен" Бекмамбетова',
  'Чёрный не значит незаметный!',
  'На диете... =(',
  'А на третье здесь компот',
  'Вжжжжух!',
  'Хз, зачем это сфоткал',
  'Заборчики!',
  'Чёрный был круче, но этот тож ничего',
  'Диета закончилась! =)',
  'Красноречивый взгляд',
  'Эх, валенки, валенки...',
  '50 оттенков синего',
  'Кто найдет меня на фото, тому приз :D',
  'Он не старый, он винтажный!',
  'Меня заставили, сам бы я такое не купил!',
  'Хочу домой, к ёлкам...',
  'Зачем тут лимон?',
  'Щас Солнце утонет, и всё...',
  'Суровый.',
  'Не знаю, кто, но зажигал ничо так',
  '122 лошади под капотом и одна водяная лошадь снаружи'
];

const RAW_MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!'
];

const NAMES = [
  'Аня',
  'Борис',
  'Вика',
  'Гоша',
  'Диана',
  'Егор',
  'Женя',
  'Зиновий',
  'Иришка',
  'Йорген',
  'Констанция',
  'Лена',
  'Миша',
  'Оля',
  'Паша',
  'Рената',
  'Саня',
  'Таня',
  'Ульяна',
  'Федор',
  'Христофор',
  'Шурик',
  'Эльвира',
  'Юра',
  'Яна'
];

const LIKES_MIN = 15;
const LIKES_MAX = 200;
const COMMENTS_MIN = 0;
const COMMENTS_MAX = 30;
const AVATAR_MIN = 1;
const AVATAR_MAX = 6;

/* функция получения случайного числа в диапазоне от А до В */
const getRandomNumber = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

/* функция генерации сообщения в комментарии */
const getMessage = (messagesArray) => {
  const message1 = messagesArray[getRandomNumber(0, messagesArray.length - 1)];
  const message2 = messagesArray[getRandomNumber(0, messagesArray.length - 1)];
  let message = message1;
  if (message1 !== message2) {
    message += ` ${message2}`;
  }
  return message;
};

/* функция генерации id */
const createId = () => {
  let lastCreateId = 0;
  return () => lastCreateId++;
};
/* функция генерации id комментария */
const getIdComment = createId();

/* функция генерации массива комментариев */
const getCommentsArray = (names, messages) => {
  const comments = [];
  for (let i = 0;i < getRandomNumber(COMMENTS_MIN, COMMENTS_MAX);i++) {
    const comment = {
      id: getIdComment(),
      avatar: `img/avatar-${getRandomNumber(AVATAR_MIN, AVATAR_MAX)}.svg`,
      message: getMessage(messages),
      name: names[getRandomNumber(0, names.length - 1)]
    };
    comments.push(comment);
  }
  return comments;
};

/* функция генерации массива объектов с фотографиями */
const getPhotosArray = (descriptions) => {
  const photos = [];
  for (let i = 1;i <= descriptions.length;i++) {
    const photo = {
      id: i,
      url: `photos/${i}.jpg`,
      description: descriptions[i - 1],
      likes: getRandomNumber(LIKES_MIN, LIKES_MAX),
      comments: getCommentsArray(NAMES, RAW_MESSAGES, i)
    };
    photos.push(photo);
  }
  return photos;
};

getPhotosArray(PHOTOS_DESCRIPTIONS);
