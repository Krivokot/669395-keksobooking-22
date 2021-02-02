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
