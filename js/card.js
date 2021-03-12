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

const generateCard = (offer, author) => {
  const cardElement = cardTemplateElement.cloneNode(true);

  const changePopupElementText = function (elementClass, data) {
    cardElement.querySelector(elementClass).textContent = data;

  };

  const updateFeaturesState = (items) => {

    const featuresElement = cardElement.querySelector('.popup__features');
    const featuresTemplateElement = featuresElement.cloneNode(true);
    featuresElement.innerText = '';

    items.forEach(item => {
      featuresElement.appendChild(featuresTemplateElement.querySelector(`.popup__feature--${item}`));
    });

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
  cardElement.querySelector('.popup__avatar').src = author.avatar;

  return mapFragment.appendChild(cardElement);

};

export {generateCard, FLAT, BUNGALOW, HOUSE, PALACE};
