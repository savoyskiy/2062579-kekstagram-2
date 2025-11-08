const picturesList = document.querySelector('.pictures'); // лист с фото
const pictureTemplate = document.querySelector('#picture').content.querySelector('.picture'); // шаблон для фото
const picturesFragment = document.createDocumentFragment(); // фрагмент

const createPictures = (datasArray) => {
  datasArray.forEach(({id, url, description, likes, comments}) => {
    const picturesListItem = pictureTemplate.cloneNode(true);
    picturesListItem.href = `${id}.html`; // не требуется по заданию, но линтер ругается, если не использовать id
    const img = picturesListItem.querySelector('.picture__img');
    img.src = url;
    img.alt = description;
    const likesNumber = picturesListItem.querySelector('.picture__likes');
    likesNumber.textContent = likes;
    const commentsNumber = picturesListItem.querySelector('.picture__comments');
    commentsNumber.textContent = comments.length;
    picturesFragment.append(picturesListItem);
  });

  return picturesList.append(picturesFragment);
};

export {createPictures};
