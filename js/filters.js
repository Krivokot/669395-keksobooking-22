/* global _:readonly */

import { removeMarkers } from './map.js';

const mapFiltersElement = document.querySelector('.map__filters');
const filterHousingType = mapFiltersElement.querySelector('#housing-type');
const filterHousingRooms = mapFiltersElement.querySelector('#housing-rooms');
const filterHousingGuests = mapFiltersElement.querySelector('#housing-guests');
const filterHousingPrice = mapFiltersElement.querySelector('#housing-price');
const filterHousingFeatures = mapFiltersElement.querySelector('#housing-features');

const LOW = 10000;
const HIGH = 50000;
const COUNT = 10;
const DELAY = 500;

const filterByType = (items) => {
  return items.offer.type === filterHousingType.value || filterHousingType.value === 'any';
}

const filterByRooms = (items) => {
  return items.offer.rooms === Number(filterHousingRooms.value) || filterHousingRooms.value === 'any';
}

const filterByGuests = (items) => {
  return items.offer.guests === Number(filterHousingGuests.value) || filterHousingGuests.value === 'any';
}

const filterByPrice = (items) => {
  switch (filterHousingPrice.value) {
    case 'low':
      return items.offer.price <= LOW;
    case 'middle':
      return items.offer.price >= LOW && items.offer.price <= HIGH;
    case 'high':
      return items.offer.price >= HIGH;
    case 'any':
      return items.offer.price
  }
}

const filterByFeatures = (items) => {
  const checkedElements = filterHousingFeatures.querySelectorAll('input:checked');

  if (checkedElements.length === 0) {
    return true;
  } else {
    for (let i = 0; i < checkedElements.length; i ++) {
      return items.offer.features.includes(checkedElements[i].value)
    }
  }
}

const createFilter = _.debounce((points, filtered) => {
  const filteredPoints = points.filter(item =>
    filterByType(item) &&
    filterByRooms(item) &&
    filterByGuests(item) &&
    filterByPrice(item) &&
    filterByFeatures(item),

  ).slice(0, COUNT)
  filtered(filteredPoints);
}, DELAY)

function setFilterChangeListener (points, filtered) {
  createFilter(points, filtered)
  mapFiltersElement.addEventListener('change', () => {
    removeMarkers();
    createFilter(points, filtered)
  })
}

export {setFilterChangeListener, mapFiltersElement};
