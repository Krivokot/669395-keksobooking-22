/* global _:readonly */

import { removeMarkers } from './map.js';

const mapFiltersElement = document.querySelector('.map__filters');
const filterHousingTypeElement = mapFiltersElement.querySelector('#housing-type');
const filterHousingRoomsElement = mapFiltersElement.querySelector('#housing-rooms');
const filterHousingGuestsElement = mapFiltersElement.querySelector('#housing-guests');
const filterHousingPriceElement = mapFiltersElement.querySelector('#housing-price');
const filterHousingFeaturesElement = mapFiltersElement.querySelector('#housing-features');

const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const COUNT_MARKERS = 10;
const DELAY = 500;

const filterByType = (items) => {
  return items.offer.type === filterHousingTypeElement.value || filterHousingTypeElement.value === 'any';
}

const filterByRooms = (items) => {
  return items.offer.rooms === Number(filterHousingRoomsElement.value) || filterHousingRoomsElement.value === 'any';
}

const filterByGuests = (items) => {
  return items.offer.guests === Number(filterHousingGuestsElement.value) || filterHousingGuestsElement.value === 'any';
}

const filterByPrice = (items) => {
  switch (filterHousingPriceElement.value) {
    case 'low':
      return items.offer.price <= LOW_PRICE;
    case 'middle':
      return items.offer.price >= LOW_PRICE && items.offer.price <= HIGH_PRICE;
    case 'high':
      return items.offer.price >= HIGH_PRICE;
    case 'any':
      return items.offer.price
  }
}

const filterByFeatures = (item) => {
  const checkedFeatureElements = filterHousingFeaturesElement.querySelectorAll('input:checked');
  const checkedFeatures = []
  checkedFeatureElements.forEach(element => checkedFeatures.push(element.value));

  return checkedFeatureElements.length === 0 ? true : checkedFeatures.every(checkedFeature => item.offer.features.includes(checkedFeature));
}

const createFilter = _.debounce((points, filtered) => {
  const filteredPoints = points.filter(item =>
    filterByType(item) &&
    filterByRooms(item) &&
    filterByGuests(item) &&
    filterByPrice(item) &&
    filterByFeatures(item),

  ).slice(0, COUNT_MARKERS)
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
