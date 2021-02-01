'use strict'

const GET_RANDOM = function (start, end) {

  let numbers = [];

  if (start > end) {
    let swap = start;

    start = end;
    end = swap;
  }

  for (let i = start; i <= end; i++) {

    numbers.push(i);

  }

  let rand = numbers[Math.floor(Math.random()*numbers.length)];

  return rand;

};

console.log(GET_RANDOM(10, 0));

//или функция из MDN

const GET_RANDOM_MDN = function (min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log(GET_RANDOM_MDN(0, 10));

//с плавающей запятой

const GET_RANDOM_GEO = function (start, end, dot) {

  if (start > end) {
    let swap = start;

    start = end;
    end = swap;
  }

  let rand = Math.random() * (end - start) + start;

   return Number(rand.toFixed(dot));

};

console.log(GET_RANDOM_GEO(0.2, 1, 1));
