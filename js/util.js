const CITY_LAT = 35.6894;
const CITY_LNG = 139.6917100;
const DEFAULT_ZOOM = 13;

const getRandomFloat = function (start, end, dot = 5) {

  if (start > end) {
    let swap = start;

    start = end;
    end = swap;
  }

  let rand = Math.random() * (end - start) + start;

  return Number(rand.toFixed(dot));

};


const getRandomInt = function (start, end) {

  return getRandomFloat(start, end, 0);

};

const isEscEvent = (evt) => {
  return evt.key === 'Escape' || evt.key === 'Esc';
};

export {getRandomFloat, getRandomInt, isEscEvent, CITY_LAT, CITY_LNG, DEFAULT_ZOOM};
