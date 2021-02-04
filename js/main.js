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


const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow'
];

const CHECKIN_TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const CHECKOUT_TIMES = [
  '12:00',
  '13:00',
  '14:00'
];

const FEAUTERS = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner'
];

const PHOTOS = [
  'http://o0.github.io/assets/images/tokyo/hotel1.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel2.jpg',
  'http://o0.github.io/assets/images/tokyo/hotel3.jpg'
];

const ADVS_COUNT = 10;


const getRandomArrayElement = function (elements) {

  return elements[getRandomInt(0, elements.length-1)];
};

const adv = () => {
  return {
      author: {
        avatar: 'img/avatars/user' + '0' + getRandomInt(1,8) + '.png',
      },
      location: {
        x: getRandomFloat(35.65000, 35.70000, 5),
        y: getRandomFloat(139.70000, 139.80000, 5),
    },
      offer: {
        title: '',
        address: '',
        price: getRandomInt(1000, 20000),
        type: getRandomArrayElement(TYPES),
        rooms: getRandomInt(1,5),
        guests: getRandomInt(1,5),
        checkin: getRandomArrayElement(CHECKIN_TIMES),
        checkout: getRandomArrayElement(CHECKOUT_TIMES),
        features: getRandomArrayElement(FEAUTERS),
        description: '',
        photos: getRandomArrayElement(PHOTOS),
      },
  }
};


const advs = new Array(ADVS_COUNT).fill(null).map(() => adv());

console.log(advs);
