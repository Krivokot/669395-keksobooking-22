import { FLAT, BUNGALOW, HOUSE, PALACE } from './card.js';

const advertsFormElement = document.querySelector('.ad-form');
const mapFilterElement = document.querySelector('.map__filters');
const addressInputElement = document.querySelector('#address');


advertsFormElement.classList.add('ad-form--disabled');
mapFilterElement.classList.add('map__filters--disabled');


mapFilterElement.childNodes.forEach(element => {
  element.disabled = true;
});

advertsFormElement.childNodes.forEach(element => {
  element.disabled = true;
});

export {advertsFormElement, mapFilterElement, addressInputElement};
