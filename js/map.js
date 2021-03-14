/* global L:readonly */

import {advertsFormElement, mapFilterElement, addressInputElement, mainElement, promoElement, resetButton} from './form.js';
import {fetchData} from './fetch.js';
import {generateCard} from './card.js';

const CITY_LAT = 35.6894;
const CITY_LNG = 139.6917100;
const DEFAULT_ZOOM = 13;

export function initMap() {
  const map = L.map('map-canvas')
    .on('load', () => {

      advertsFormElement.classList.remove('ad-form--disabled');
      mapFilterElement.classList.remove('map__filters--disabled');


      mapFilterElement.childNodes.forEach(element => {
        element.disabled = false;
      });

      advertsFormElement.childNodes.forEach(element => {
        element.disabled = false;
      });
    })
    .setView({
      lat: CITY_LAT,
      lng: CITY_LNG,
    }, DEFAULT_ZOOM);

  L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
  ).addTo(map);

  const mainPinIcon = L.icon({
    iconUrl: 'img/main-pin.svg',
    iconSize: [52, 52],
    iconAnchor: [26, 26],
  });

  const mainMarker = L.marker(
    {
      lat: CITY_LAT,
      lng: CITY_LNG,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  const setDefaultAddressInputValue = () => {
    const x = mainMarker._latlng.lng.toFixed(5);
    const y = mainMarker._latlng.lat.toFixed(5);

    addressInputElement.value = `${x}, ${y}`;
  }


  mainMarker.on('moveend', () => {
    const x = mainMarker._latlng.lng.toFixed(5);
    const y = mainMarker._latlng.lat.toFixed(5);

    addressInputElement.value = `${x}, ${y}`;

  });

  setDefaultAddressInputValue()

  mainMarker.addTo(map);

  fetchData().then(data => addPointsToMap(map, data)).catch(() => {
      const errorGetPopupTemplate = document.querySelector('#errorGet').content;
      mainElement.insertBefore(errorGetPopupTemplate, promoElement);
    })

    resetButton.addEventListener('click', (evt) => {
      evt.preventDefault();
      mainMarker.setLatLng([CITY_LAT, CITY_LNG]);
      setDefaultAddressInputValue();
    })
}

function addPointsToMap(map, points) {
  const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [42, 42],
    iconAnchor: [21, 21],
  });

  points.forEach((point) => {
    const marker = L.marker({
      lat: point.location.lat,
      lng: point.location.lng,

    },
    {
      icon: pinIcon,
    },
    );

    marker.addTo(map).bindPopup(generateCard(point.offer, point.author));
  });
}

