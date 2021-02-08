'use strict'

const getRandomFloat = function (start, end, dot = 0) {

  if (start > end) {
    let swap = start;

    start = end;
    end = swap;
  }

  let rand = Math.random() * (end - start) + start;

  return Number(rand.toFixed(dot));

};


const getRandomInt = function (start, end) {

  return getRandomFloat(start, end);

};

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

const x = getRandomFloat(35.65000, 35.70000, 5);
const y = getRandomFloat(139.70000, 139.80000, 5);


const getRandomArrayElement = function (elements) {

  return elements[getRandomInt(0, elements.length-1)];
};

const getRandomArrayElements = function (elements) {
  const ARRAY_COPY = elements.slice();
  const ELEMENTS_COUNT = getRandomInt(1, ARRAY_COPY.length);

  let array = [];

  for (let i = 0; i < ELEMENTS_COUNT; i++) {

    array.push(ARRAY_COPY.splice(getRandomArrayElement(elements), 1));
  }

  return array;
}

const adv = () => {
  return {
    author: {
      avatar: `img/avatars/user0${getRandomInt(1,8)}.png`,
    },
    location: {
      x: x,
      y: y,
    },
    offer: {
      title: getRandomArrayElement(TITLES),
      address: `${x}, ${y}`,
      price: getRandomInt(1000, 20000),
      type: getRandomArrayElement(TYPES),
      rooms: getRandomInt(1,5),
      guests: getRandomInt(1,5),
      checkin: getRandomArrayElement(CHECKIN_TIMES),
      checkout: getRandomArrayElement(CHECKOUT_TIMES),
      features: getRandomArrayElements(FEAUTERS),
      description: getRandomArrayElement(DESCRIPTIONS),
      photos: getRandomArrayElement(PHOTOS),
    },
  }
};


const advs = () => new Array(ADVS_COUNT).fill(null).map(() => adv());

advs();
