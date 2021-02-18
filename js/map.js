import {advs} from './data.js';

const cardTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const map = document.querySelector('.map__canvas');

const createAdvs = advs();

const mapFragment = document.createDocumentFragment();

const translateType = function (type) {
  switch (type) {
    case 'flat':
      return 'Квартира';
    case  'bungalow':
      return 'Бунгало';
    case 'house':
      return 'Дом';
    case 'palace':
      return 'Дворец';
    default:
      return 'Не определено';
  }
};

createAdvs.forEach(({offer, author}) => {
  const cardElement = cardTemplate.cloneNode(true);

  const changePopupElementText = function (elementClass, data) {
    cardElement.querySelector(elementClass).textContent = data;

    return;
  };

  const getFeatures = function (items) {

    const features = cardElement.querySelector('.popup__features');
    const featuresTemplate = features.cloneNode(true);
    features.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
      if (items[i] == 'wifi') {
        features.appendChild(featuresTemplate.querySelector('.popup__feature--wifi'));
      } else if (items[i] == 'dishwasher') {
        features.appendChild(featuresTemplate.querySelector('.popup__feature--dishwasher'));
      } else if (items[i] == 'parking') {
        features.appendChild(featuresTemplate.querySelector('.popup__feature--parking'));
      } else if (items[i] == 'washer') {
        features.appendChild(featuresTemplate.querySelector('.popup__feature--washer'));
      } else if (items[i] == 'elevator') {
        features.appendChild(featuresTemplate.querySelector('.popup__feature--elevator'));
      } else {
        features.appendChild(featuresTemplate.querySelector('.popup__feature--conditioner'));
      }
    }
  };

  changePopupElementText('.popup__title', offer.title);
  changePopupElementText('.popup__text--address', offer.address);
  changePopupElementText('.popup__text--price', `${offer.price} ₽/ночь`);
  changePopupElementText('.popup__type', translateType(offer.type));
  changePopupElementText('.popup__text--capacity', `${offer.rooms} комнаты для ${offer.guests} гостей`);
  changePopupElementText('.popup__text--time', `Заезд после ${offer.checkin} выезд до ${offer.checkout}`);
  getFeatures(offer.features);
  changePopupElementText('.popup__description', offer.description);
  cardElement.querySelector('.popup__photo').src = offer.photos;
  cardElement.querySelector('.popup__avatar').src = author.avatar;


  mapFragment.appendChild(cardElement);
});

map.appendChild(mapFragment);
