const advertsForm = document.querySelector('.ad-form');
const mapFilter = document.querySelector('.map__filters');
const addressInput = document.querySelector('#address');


advertsForm.classList.add('ad-form--disabled');
mapFilter.classList.add('map__filters--disabled');


mapFilter.childNodes.forEach(element => {
  element.disabled = true;
});

advertsForm.childNodes.forEach(element => {
  element.disabled = true;
});

export {advertsForm, mapFilter, addressInput};
