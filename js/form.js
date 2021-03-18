import {postData} from './fetch.js';
import { isEscEvent } from './util.js';
import {addMainPointToMap, removeMainMarker} from './map.js';
import {mapView} from './main.js';
import {mapFiltersElement} from './filters.js';

const advertsFormElement = document.querySelector('.ad-form');
const mapFilterElement = document.querySelector('.map__filters');
const addressInputElement = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');
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

const resetForm = () => {
  advertsFormElement.reset();
  mapFiltersElement.reset();
  removeMainMarker();
  addMainPointToMap(mapView);
}

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
})

const closeModal = (popup) => {
  popup.classList.add('hidden');
};

const closeModalByAction = (popupType) => {
  popupType.addEventListener('click', () => {
    closeModal(popupType);
  })

  document.addEventListener('keydown', (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeModal(popupType);
    }
  })
}

const addModal = (templateId) => {
  const popupTemplate = document.querySelector(templateId).content;
  mainElement.insertBefore(popupTemplate, promoElement);
}

advertsFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  postData(formData)
    .then((response) => {
      if (response.ok) {
        addModal('#success');
        resetForm();
        const sendPopup = document.querySelector('.success');
        sendPopup.classList.remove('hidden');

        closeModalByAction(sendPopup);
      }
    })
    .catch(() => {
      addModal('#error');
      const errorPopup = document.querySelector('.error');
      errorPopup.classList.remove('hidden');

      closeModalByAction(errorPopup);
    })
})

export {advertsFormElement, mapFilterElement, addressInputElement, mainElement, promoElement};
