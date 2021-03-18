const mapFiltersElement = document.querySelector('.map__filters');
const filterHousingType = mapFiltersElement.querySelector('#housing-type');

import { removeMarkers } from './map.js';

const filterByType = (items) => {
  return items.offer.type === filterHousingType.value || filterHousingType.value === 'any';
}

function createFilter (points, filtered) {
  const filteredPoints = points.filter(item => filterByType(item)).slice(0, 10)
  filtered(filteredPoints);
}

function setHouseTypeChangeListener (points, filtered) {
  createFilter(points, filtered)
  filterHousingType.addEventListener('change', () => {
    removeMarkers();
    createFilter(points, filtered)
  })
}

export {setHouseTypeChangeListener};
