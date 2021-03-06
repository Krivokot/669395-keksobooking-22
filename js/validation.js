import { FLAT, BUNGALOW, HOUSE, PALACE } from './card.js';

const typeElement = document.querySelector('#type');
const priceElement = document.querySelector('#price');
const DEFAULT_MIN_PRICE = 1000;

const minPriceValue = {
  FLAT: 1000,
  BUNGALOW: 0,
  HOUSE: 5000,
  PALACE: 10000,
};

const getTypePrice = (evt) => {
  priceElement.value = null;
  console.log(priceElement.placeholder);
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

priceElement.min = DEFAULT_MIN_PRICE;
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

const updateDefaultCapacityDisabled = (value) => {
  capacityElement.children[0].disabled = value,
  capacityElement.children[1].disabled = value,
  capacityElement.children[3].disabled = value
}

updateDefaultCapacityDisabled(true);

const syncCapacityValue = (evt) => {
    switch (evt.target.value) {
      case '1':
        return capacityElement.children[2].selected = true, 
        updateDefaultCapacityDisabled(true);
      case '2':
        updateDefaultCapacityDisabled(false);
        return capacityElement.children[1].selected = true,
        capacityElement.children[0].disabled = true,
        capacityElement.children[3].disabled = true;
      case '3':
        updateDefaultCapacityDisabled(false);
        return capacityElement.children[0].selected = true,
        capacityElement.children[3].disabled = true;
      case '100':
        updateDefaultCapacityDisabled(false);
        return capacityElement.children[3].selected = true,
        capacityElement.children[0].disabled = true,
        capacityElement.children[1].disabled = true,
        capacityElement.children[2].disabled = true;
    }
  }

  roomNumberElement.addEventListener('change', syncCapacityValue);

