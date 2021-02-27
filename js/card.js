import {generateAdvertsments} from './data.js';

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const advertsCollection = generateAdvertsments();

const mapFragment = document.createDocumentFragment();

const TypesTranslation = {
  FLAT: 'Квартира',
  BUNGALOW: 'Бунгало',
  HOUSE: 'Дом',
  PALACE: 'Дворец',
};

const translateType = function (type) {
  switch (type) {
    case 'flat':
      return TypesTranslation.FLAT;
    case  'bungalow':
      return TypesTranslation.BUNGALOW;
    case 'house':
      return TypesTranslation.HOUSE;
    case 'palace':
      return TypesTranslation.PALACE;
    default:
      return 'Не определено';
  }
};

const generateCard = (offer, author) => {
  const cardElement = cardTemplate.cloneNode(true);

  const changePopupElementText = function (elementClass, data) {
    cardElement.querySelector(elementClass).textContent = data;

  };

  const updateFeaturesState = function (items) {

    const featuresElement = cardElement.querySelector('.popup__features');
    const featuresTemplate = featuresElement.cloneNode(true);
    featuresElement.innerHTML = '';

    items.forEach(item => {
      featuresElement.appendChild(featuresTemplate.querySelector(`.popup__feature--${item}`));
    });

  };

  changePopupElementText('.popup__title', offer.title);
  changePopupElementText('.popup__text--address', offer.address);
  changePopupElementText('.popup__text--price', `${offer.price} ₽/ночь`);
  changePopupElementText('.popup__type', translateType(offer.type));
  changePopupElementText('.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  changePopupElementText('.popup__text--time', `Заезд после ${offer.checkin} выезд до ${offer.checkout}`);
  updateFeaturesState(offer.features);
  changePopupElementText('.popup__description', offer.description);
  cardElement.querySelector('.popup__photo').src = offer.photos;
  cardElement.querySelector('.popup__avatar').src = author.avatar;


  return mapFragment.appendChild(cardElement);
  
};

export {generateCard};