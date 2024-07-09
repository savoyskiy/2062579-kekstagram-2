const MESSAGES = [
  'Всё отлично!',
  'В целом всё неплохо. Но не всё.',
  'Когда вы делаете фотографию, хорошо бы убирать палец из кадра. В конце концов это просто непрофессионально.',
  'Моя бабушка случайно чихнула с фотоаппаратом в руках и у неё получилась фотография лучше.',
  'Я поскользнулся на банановой кожуре и уронил фотоаппарат на кота и у меня получилась фотография лучше.',
  'Лица у людей на фотке перекошены, как будто их избивают. Как можно было поймать такой неудачный момент?!',
];

const DESCRIPTION_PHOTOS = [
  'Вид на залив сверху',
  'Указатель пути на пляж',
  'Берег моря и камни',
  'Красотка с фотоаппаратом',
  'Еда в ресторане',
  'Спортивная машина',
  'На диете :(',
  'Свежий сок!',
  'Самолет над пляжем',
  'Оригинальный интерьер',
  'Облака над заборчиками',
  'Аудос',
  'И снова еда!',
  'Кот недоволен',
  'Мегаваленки',
  'Над горами',
  'На концерте',
  'Старинная тачка',
  'Тапки с фонариками',
  'Пальмы, вечер, облака',
  'Еще еда',
  'Закат в заливе',
  'Краб',
  'Снова концерт',
  'Бегемоты и Лэндровер',
];

const NAMES = [
  'Артём',
  'Александр',
  'Саша',
  'Лёша',
  'Алексей',
  'Андрей',
  'Анатолий',
  'Толя',
  'Анна',
  'Аня',
  'Алина',
  'Александра',
  'Борис',
  'Вова',
  'Владимир',
  'Виктор',
  'Витя',
  'Виктория',
  'Вика',
  'Валерий',
  'Валера',
  'Валерия',
  'Георгий',
  'Гоша',
  'Жора',
  'Геннадий',
  'Гена',
  'Галина',
  'Галя',
  'Дмитрий',
  'Митя',
  'Дима',
  'Денис',
  'Данила',
  'Даниил',
  'Дарья',
  'Даша',
  'Евгений',
  'Евгения',
  'Женя',
  'Елисей',
  'Егор',
  'Екатерина',
  'Катерина',
  'Катя',
  'Зиновий',
  'Зинаида',
  'Зина',
  'Игорь',
  'Ирина',
  'Ира',
  'Инна',
  'Иннокентий',
  'Константин',
  'Костя',
  'Кирилл',
  'Ксения',
  'Ксюша',
  'Леонид',
  'Лёня',
  'Лев',
  'Михаил',
  'Миша',
  'Максим',
  'Макс',
  'Мария',
  'Маша',
  'Марина',
  'Николай',
  'Коля',
  'Нина',
  'Олег',
  'Ольга',
  'Оля',
  'Оксана',
  'Павел',
  'Паша',
  'Пётр',
  'Петя',
  'Руслан',
  'Роман',
  'Рома',
  'Сергей',
  'Серёга',
  'Семён',
  'Сёма',
  'Станислав',
  'Стас',
  'Тимофей',
  'Тёма',
  'Татьяна',
  'Таня',
  'Фёдор',
  'Федя',
  'Феликс',
  'Эдуард',
  'Эдик',
  'Элина',
  'Юрий',
  'Юра',
  'Юлия',
  'Юля',
  'Яков',
  'Яна',
];
/*фунция получения псевдослучайного числа*/
const getRandomNumber = (a, b) => {
  const min = Math.min(a, b);
  const max = Math.max(a, b);
  const result = Math.floor(Math.random() * (max - min + 1)) + min;
  return result;
};

/* количество генерируемых описаний */
const quantityPhotos = 25;

/* функция генерации комментариев*/
const createComment = (number, commentsQuantity) => {
  /* массив с комментариями к фото, пустой */
  const commentsArray = [];

  if (commentsQuantity > 0) {
    /* цикл нужен для создания заданного количества комментариев */
    for (let i = 0; i < commentsQuantity; i++) {
      /*функция создания комментария*/
      const createRandomMessage = () => {
        let randomMessage;
        /* рандомно выбираем два сообщения из массива */
        const randomMessage1 = MESSAGES[getRandomNumber(0, MESSAGES.length - 1)];
        const randomMessage2 = MESSAGES[getRandomNumber(0, MESSAGES.length - 1)];
        /*сравниваем их*/
        if (randomMessage1 === randomMessage2) {
          randomMessage = randomMessage1; /* если одинаковые, выбираем первый*/
        } else {
          randomMessage = randomMessage1 + ' ' + randomMessage2; /*если разные, склеиваем итоговое сообщение из обоих */
        }
        return randomMessage;
      };

      /* функция генерации адреса аватара */
      const getAvatar = () => {
        const avatarUrl = 'img/avatar-' + getRandomNumber(1, 6) + '.svg';
        return avatarUrl;
      };

      /* заполняем массив с комментариями */
      commentsArray[i] = {
        id: number * 10000 + (i + 1),
        avatar: getAvatar(),
        message: createRandomMessage(),
        name: NAMES[getRandomNumber(0, NAMES.length - 1)],
      };
    }
  }

  return commentsArray;
};

/*функция создания описания фото*/
const createPhotoDescription = (number) => {
  /* определение количества комментариев */
  const commentsQuantity = getRandomNumber(0, 30);

  return {
    id: number,
    url: 'photos/' + number + '.jpg',
    description: DESCRIPTION_PHOTOS[number - 1],
    likes: getRandomNumber(15, 200),
    comments: createComment(number, commentsQuantity),
  };
};

/*итоговая функция */
const createDescriptionsArray = (quantity) => {
  /* массив с описаниями фото */
  const photoDescriptions = [];

  /* цикл заполнения массива с описаниями фото */
  for (let i = 1; i <= quantity; i++) {
    photoDescriptions[i - 1] = createPhotoDescription(i);
  }

  return photoDescriptions;
};

let photoDescriptionsArray = createDescriptionsArray(quantityPhotos);

