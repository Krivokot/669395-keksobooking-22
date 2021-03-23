const cardTemplateElement = document.querySelector('#card')
  .content
  .querySelector('.popup');

const mapFragment = document.createDocumentFragment();

const FLAT = 'flat';
const BUNGALOW = 'bungalow';
const HOUSE = 'house';
const PALACE = 'palace';

const TypesTranslation = {
  [FLAT]: 'Квартира',
  [BUNGALOW]: 'Бунгало',
  [HOUSE]: 'Дом',
  [PALACE]: 'Дворец',
};

const translateType = function (type) {
  return TypesTranslation[type] || 'Не определено';
};

const checkNullElement = (element) => {
  if (element.children.length < 1) {
    element.classList.add('hidden')
  }
}

const generateCard = (offer, author) => {
  const cardElement = cardTemplateElement.cloneNode(true);

  const changePopupElementText = function (elementClass, data) {
    const popupElement = cardElement.querySelector(elementClass);
    popupElement.textContent = data;

    if (popupElement.textContent === '') {
      popupElement.classList.add('hidden')
    }
  };

  const updateFeaturesState = (items) => {

    const featuresElement = cardElement.querySelector('.popup__features');
    const featuresTemplateElement = featuresElement.cloneNode(true);
    featuresElement.innerText = '';

    items.forEach(item => {
      featuresElement.appendChild(featuresTemplateElement.querySelector(`.popup__feature--${item}`));
    });

    checkNullElement(featuresElement);

  };

  const updatePhotosState = (photos) => {
    const photosBlock = cardElement.querySelector('.popup__photos');
    const photoElement = cardElement.querySelector('.popup__photo');
    photosBlock.innerText = '';

    photos.forEach((photo) => {

      const photoTemplate = photoElement.cloneNode(true);
      photoTemplate.src = photo;

      photosBlock.appendChild(photoTemplate);

    })

    checkNullElement(photosBlock);
  }

  const addUserAvatar = () => {
    const popupAvatarElement =  cardElement.querySelector('.popup__avatar');

    if (author.avatar) {
      popupAvatarElement.src = author.avatar;
    } else {
      popupAvatarElement.classList.add('hidden')
    }
  }

  changePopupElementText('.popup__title', offer.title);
  changePopupElementText('.popup__text--address', offer.address);
  changePopupElementText('.popup__text--price', `${offer.price} ₽/ночь`);
  changePopupElementText('.popup__type', translateType(offer.type));
  changePopupElementText('.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  changePopupElementText('.popup__text--time', `Заезд после ${offer.checkin} выезд до ${offer.checkout}`);
  updateFeaturesState(offer.features);
  changePopupElementText('.popup__description', offer.description);
  updatePhotosState(offer.photos);
  addUserAvatar();



  return mapFragment.appendChild(cardElement);

};

export {generateCard, FLAT, BUNGALOW, HOUSE, PALACE};
