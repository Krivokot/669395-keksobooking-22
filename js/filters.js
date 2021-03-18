const mapFiltersElement = document.querySelector('.map__filters');
const filterHousingType = mapFiltersElement.querySelector('#housing-type');

import { removeMarker } from './map.js';


const filterByType = (items) => items.offer.type === filterHousingType.value || filterHousingType.value === 'any';

function createFilter (points, filtered) {
  const filteredPoints = points.filter(item => filterByType(item))
  filtered(filteredPoints);
      // removeMarker();
}

function setHouseTypeChangeListener (points, filtered) {

    filterHousingType.addEventListener('change', createFilter(points, filtered))
}

export {setHouseTypeChangeListener};

// function setHouseTypeChangeListener (pointsm func) {

//   filterHousingType.addEventListener('change', (evt) => {
//     const filteredPoints = points.filter(item => item.offer.type === evt.target.value)
//     func(filteredPoints);
//   })
// }
