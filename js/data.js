import {getRandomFloat, getRandomInt} from './util.js';

const TITLES = [
  'Крутая хата в центре',
  'Зачетная конура для милых котиков',
  'Царские хоромы за гроши',
  'Жилье для студентов и не только',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
];

const CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00',
];

const FEAUTERS = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = [
  'Отличный ремонт, прекрасный вид, тихие соседи, что нужно еще?',
  'Чисто, уютно, хорошо, до моря 230 км. Это Япония, детка',
  'Помещение без мебели, без ремонта, есть крысы, рядом живут наркоманы',
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg',
];

const ADVS_COUNT = 10;
const LONGITUDE_MIN = 139.70000;
const LONGITUDE_MAX = 139.80000;
const LATITUDE_MIN = 35.65000;
const LATITUDE_MAX = 35.70000;
const GUESTS_MIN = 1;
const GUESTS_MAX = 5;
const ROOMS_MIN = 1;
const ROOMS_MAX = 5;
const PRICE_MIN = 1000;
const PRICE_MAX = 20000;

const getRandomArrayElement = function (elements) {

  return elements[getRandomInt(0, elements.length-1)];
};

const getRandomArrayElements = function (elements) {
  const ARRAY_COPY = elements.slice();
  const ELEMENTS_COUNT = getRandomInt(0, ARRAY_COPY.length);

  let array = [];

  for (let i = 0; i < ELEMENTS_COUNT; i++) {
    array.push(ARRAY_COPY.splice(getRandomArrayElement(elements), 1));
  }

  return array;
}

const generateAdvertsmentsItem = () => {
  const x = getRandomFloat(LATITUDE_MIN, LATITUDE_MAX);
  const y = getRandomFloat(LONGITUDE_MIN, LONGITUDE_MAX);
  
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(1,8)}.png`,
    },
    location: {
      lng: x,
      lat: y,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${x}, ${y}`,
      price: getRandomInt(PRICE_MIN, PRICE_MAX),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(ROOMS_MIN, ROOMS_MAX),
      guests: getRandomInt(GUESTS_MIN, GUESTS_MAX),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getRandomArrayElements(FEAUTERS),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
  }
};


const generateAdvertsments = () => new Array(ADVS_COUNT).fill(null).map(() => generateAdvertsmentsItem());

export {generateAdvertsments};
