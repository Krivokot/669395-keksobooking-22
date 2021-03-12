import {postData} from './fetch.js';

const advertsFormElement = document.querySelector('.ad-form');
const mapFilterElement = document.querySelector('.map__filters');
const addressInputElement = document.querySelector('#address');
const submitButton = document.querySelector('.ad-form__submit');
const mainElement = document.querySelector('main');
const promoElement = mainElement.querySelector('.promo');


advertsFormElement.classList.add('ad-form--disabled');
mapFilterElement.classList.add('map__filters--disabled');


mapFilterElement.childNodes.forEach(element => {
  element.disabled = true;
});

advertsFormElement.childNodes.forEach(element => {
  element.disabled = true;
});

submitButton.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  postData(formData)
    .then(() => {
      const successSendPopupTemplate = document.querySelector('#success').content;
      mainElement.insertBefore(successSendPopupTemplate, promoElement);
    })
    .catch((err) => {
      const errorSendPopupTemplate = document.querySelector('#error').content;
      mainElement.insertBefore(errorSendPopupTemplate, promoElement);
    })
})

export {advertsFormElement, mapFilterElement, addressInputElement, mainElement, promoElement};
