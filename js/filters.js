
import { removeMarkers } from './map.js';

const mapFiltersElement = document.querySelector('.map__filters');
const filterHousingType = mapFiltersElement.querySelector('#housing-type');
const filterHousingRooms = mapFiltersElement.querySelector('#housing-rooms');
const filterHousingGuests = mapFiltersElement.querySelector('#housing-guests');


const filterByType = (items) => {
  return items.offer.type === filterHousingType.value || filterHousingType.value === 'any';
}


function createFilter (points, filtered) {
  const filteredPoints = points.filter(item => filterByType(item)).slice(0, 10)
  filtered(filteredPoints);
}

const filterByRooms = (items) => {
  return items.offer.rooms === Number(filterHousingRooms.value) || filterHousingRooms.value === 'any';
}

const filterByGuests = (items) => {
  return items.offer.guests === Number(filterHousingGuests.value) || filterHousingGuests.value === 'any';
}

function createFilter (points, filtered) {
  const filteredPoints = points.filter(item =>
    filterByType(item) &&
    filterByRooms(item) &&
    filterByGuests(item),

  ).slice(0, 10)
  filtered(filteredPoints);
}

function setFilterChangeListener (points, filtered) {
  createFilter(points, filtered)
  mapFiltersElement.addEventListener('change', () => {

    removeMarkers();
    createFilter(points, filtered)
  })
}


export {setFilterChangeListener, mapFiltersElement};

