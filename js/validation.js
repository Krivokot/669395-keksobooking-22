import { FLAT, BUNGALOW, HOUSE, PALACE } from './card.js';

const typeElement = document.querySelector('#type');
const priceElement = document.querySelector('#price');

const minPriceValue = {
  FLAT: 1000,
  BUNGALOW: 0,
  HOUSE: 5000,
  PALACE: 10000,
};

const getTypePrice = (evt) => {

  switch (evt.target.value) {
    case BUNGALOW:
      return priceElement.placeholder = minPriceValue.BUNGALOW,
      priceElement.min = minPriceValue.BUNGALOW;
    case FLAT:
      return priceElement.placeholder = minPriceValue.FLAT,
      priceElement.min = minPriceValue.FLAT;
    case HOUSE:
      return priceElement.placeholder = minPriceValue.HOUSE,
      priceElement.min = minPriceValue.HOUSE;
    case PALACE:
      return priceElement.placeholder = minPriceValue.PALACE,
      priceElement.min = minPriceValue.PALACE;

  }
};

typeElement.addEventListener('change', getTypePrice);

const timeInElement = document.querySelector('#timein');
const timeOutElement = document.querySelector('#timeout');


const syncTimeInValue = (evt) => {
  timeOutElement.childNodes.forEach(element => {
    if (evt.target.value == element.value) {
      element.selected = true;
    }
  });
}

const syncTimeOutValue = (evt) => {
  timeInElement.childNodes.forEach(element => {
    if (evt.target.value == element.value) {
      element.selected = true;
    }
  });
}

timeInElement.addEventListener('change', syncTimeInValue);
timeOutElement.addEventListener('change', syncTimeOutValue);


const roomNumberElement = document.querySelector('#room_number');
const capacityElement = document.querySelector('#capacity');
