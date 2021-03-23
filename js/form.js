import {postData, fetchData} from './fetch.js';
import { isEscEvent } from './util.js';
import {addMainPointToMap, removeMainMarker, addPointsToMap} from './map.js';
import {mapView} from './main.js';
import {mapFiltersElement} from './filters.js';

const advertsFormElement = document.querySelector('.ad-form');
const addressInputElement = document.querySelector('#address');
const resetButton = document.querySelector('.ad-form__reset');
const mainElement = document.querySelector('main');
const promoElement = mainElement.querySelector('.promo');

advertsFormElement.classList.add('ad-form--disabled');
mapFiltersElement.classList.add('map__filters--disabled');


mapFiltersElement.childNodes.forEach(element => {
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
  fetchData().then(data => addPointsToMap(mapView, data)).catch(() => {
    const errorGetPopupTemplate = document.querySelector('#error-template').content;
    mainElement.insertBefore(errorGetPopupTemplate, promoElement);
  })
}

resetButton.addEventListener('click', (evt) => {
  evt.preventDefault();
  resetForm();
})

const closeModal = (popup) => {
  popup.classList.add('hidden');
};


const closeModalByAction = (popupType) => {
  const closeModalByKey = (evt) => {
    if (isEscEvent(evt)) {
      evt.preventDefault();
      closeModal(popupType);
      document.removeEventListener('keydown', closeModalByKey)
    }
  }

  popupType.addEventListener('click', () => {
    closeModal(popupType);
    document.removeEventListener('keydown', closeModalByKey)
  })

  document.addEventListener('keydown', closeModalByKey)
}



const showModal = (templateId) => {
  const popupTemplate = document.querySelector(templateId).content;
  mainElement.insertBefore(popupTemplate, promoElement);
}

const onSuccess = () => {
  showModal('#success');
  resetForm();
  const sendPopup = document.querySelector('.success');
  sendPopup.classList.remove('hidden');

  closeModalByAction(sendPopup);
}

const onError = () => {
  showModal('#error');
  const errorPopup = document.querySelector('.error');
  errorPopup.classList.remove('hidden');

  closeModalByAction(errorPopup);

  const errorButton = document.querySelector('.error__button');
  errorButton.addEventListener('click', () => {
    errorPopup.classList.add('hidden');
  })
}

advertsFormElement.addEventListener('submit', (evt) => {
  evt.preventDefault();
  const formData = new FormData(evt.target);

  postData(formData)
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onError();
      }
    })
    .catch(() => {
      onError();
    })
})

export {advertsFormElement, addressInputElement, mainElement, promoElement};
