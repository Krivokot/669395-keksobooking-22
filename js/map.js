import {advertsForm, mapFilter, addressInput} from "./form.js";
import {generateAdvertsments} from "./data.js";
import {generateCard} from "./card.js";

const CITY_LAT = 35.6894; 
const CITY_LNG = 139.6917100;

const map = L.map('map-canvas')
    .on('load', () => {

        advertsForm.classList.remove('ad-form--disabled');
        mapFilter.classList.remove('map__filters--disabled');


        mapFilter.childNodes.forEach(element => {
            element.disabled = false;
        });

        advertsForm.childNodes.forEach(element => {
            element.disabled = false;
        });
    })
    .setView({
        lat: CITY_LAT,
        lng: CITY_LNG,
    }, 10);

L.tileLayer(
    'https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png',
    {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
    },
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


  const x = mainMarker._latlng.lng.toFixed(5);
  const y = mainMarker._latlng.lat.toFixed(5);

mainMarker.on('moveend', () => {
    const x = mainMarker._latlng.lng.toFixed(5);
    const y = mainMarker._latlng.lat.toFixed(5);
    
    addressInput.value = `${x}, ${y}`;

  });

  addressInput.value = `${x}, ${y}`;

mainMarker.addTo(map);

const points = generateAdvertsments();

const pinIcon = L.icon({
    iconUrl: 'img/pin.svg',
    iconSize: [42, 42],
    iconAnchor: [21, 21],
  });

points.forEach((point) => {
    const marker = L.marker({
        lat: point.location.lng,
        lng: point.location.lat,
      
        },
        {
        icon: pinIcon,
        },
    );

    marker
        .addTo(map)
        .bindPopup(generateCard(point.offer, point.author));
});